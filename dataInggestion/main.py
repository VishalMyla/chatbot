import json
import requests
from bs4 import BeautifulSoup
import os

# Path to your JSON file
json_path = 'capillary_doc_links.json'

# Output directory
output_dir = "scraped_pages"
os.makedirs(output_dir, exist_ok=True)

# Read the JSON
with open(json_path, "r", encoding="utf-8") as f:
    data = json.load(f)

def extract_main_content(soup):
    # Try grabbing main content
    main = soup.find('main') or soup.find('article') or soup.body
    if not main:
        return ""
    
    # Remove scripts and styles
    for tag in main(['script', 'style', 'nav', 'footer', 'header', 'aside']):
        tag.decompose()

    # Extract with hierarchy
    lines = []
    for el in main.find_all(['h1', 'h2', 'h3', 'p', 'li', 'pre', 'code', 'table']):
        if el.name == 'table':
            rows = el.find_all('tr')
            for row in rows:
                cols = row.find_all(['th', 'td'])
                line = ' | '.join(col.get_text(strip=True) for col in cols)
                if line:
                    lines.append(line)
            continue

        text = el.get_text(strip=True)
        if not text:
            continue
        if el.name.startswith('h'):
            lines.append(f"{'#' * int(el.name[1])} {text}")
        elif el.name in ['pre', 'code']:
            lines.append(f"```{text}```")
        else:
            lines.append(text)
    return "\n\n".join(lines)

# Loop through each section and scrape content
for section, pages in data.items():
    for page in pages:
        title = page['title']
        url = page['url']
        
        try:
            print(f"Scraping {title} - {url}")
            response = requests.get(url, timeout=10)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, "html.parser")
            content = extract_main_content(soup)

            if not content:
                print(f"No content extracted from {url}")
                continue

            # Safe filename
            filename = f"{section}_{title}".replace(" ", "_").replace("/", "_") + ".txt"
            file_path = os.path.join(output_dir, filename)

            with open(file_path, "w", encoding="utf-8") as f_out:
                f_out.write(f"# {title}\n\n{content}")

        except Exception as e:
            print(f"Failed to scrape {url}: {e}")
