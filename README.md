# CapillaryTech Documentation Chatbot  
*An End-to-End Project Overview*

---

## 1. Introduction

This project involves creating an intelligent chatbot that answers queries based on the CapillaryTech documentation. The chatbot leverages modern web scraping techniques, embedding models, and the LangChain library to provide context-relevant answers by harnessing the power of Retrieval-Augmented Generation (RAG).

---

## 2. Project Overview and Motivation

### Objective:
Build a chatbot capable of answering questions by extracting and processing information directly from the CapillaryTech documentation website. The resulting solution is highly scalable and can effectively handle both user-focused and developer-focused queries.

### Key Motivations:
- **Automation:** Automatically extract and structure a large volume of documentation.
- **Efficiency:** Speed up the retrieval of relevant content using vector embeddings.
- **User Experience:** Provide an interactive, real-time chatbot interface integrated with a robust backend service.


---

## 3. Stage 1: Scraping Documentation Links

### 3.1 Understanding the Documentation Structure
The CapillaryTech documentation is organized into two primary sections:
- **User Documentation:** Accessible via routes beginning with `/docs/`, including pages like **introduction**, **accessing-capillary**, and **home-page-tour**.
- **Developer Documentation:** Accessible via routes beginning with `/reference/`, such as **apioverview** and **oauth**.

Additionally, each section is further divided into distinct sub-categories (e.g., *Engage+*, *Insights+*, *Capillary Data Platform*, etc.). A careful exploration of the navigation menu reveals that both the user and developer sections list out the links you need to scrape.

### 3.2 Tools and Techniques Used
- **Selenium/Playwright:**  
  These tools are used to simulate a browser environment due to the website’s single-page application (SPA) nature. They help render JavaScript dynamically for complete content retrieval.
  
- **JavaScript & Node.js:**  
  A sample script using Playwright is used to extract navigation links systematically. The extracted links are then organized into JSON based on sections.

### 3.3 Workflow & Process
- **Navigating Key Pages:**  
  Visit `/docs/introduction` for User Documentation and `/reference/apioverview` for Developer Documentation.
  
- **Extracting Navigation Links:**  
  Scrape the nav bar to record all related documentation URLs.
  
- **Organizing Data:**  
  The links are categorized into sections and stored in a structured JSON file.

---

## 4. Stage 2: Extracting Documentation Content

### 4.1 Content Extraction Methods
Once the links are organized, the next step is to extract the actual content from each page. Due to the SPA nature of the site, additional steps (via Selenium/Playwright) are sometimes needed to ensure that the dynamic content has fully loaded.

- **BeautifulSoup:**  
  Used for parsing the HTML and isolating the relevant content sections.
  
- **Markdown Conversion:**  
  Libraries like *markdownify* help convert the HTML content into Markdown format for easy readability and future processing.

### 4.2 Converting to Markdown
- The extracted content is stored as `.md` files. This not only organizes the data but also aids in later processing (e.g., document chunking for embedding).
- A large number of links (over 1,200 pages) are successfully scraped and converted into Markdown documents.

---

## 5. Stage 3: Building the Retrieval-Augmented Generation Pipeline

### 5.1 Document Chunking
- **Why Chunking?**  
  Splitting each large Markdown file into smaller chunks (with overlaps) enables efficient embedding and more precise retrieval.
  
- **Process:**  
  Each document is divided into segments of 1,000 characters (with a 100-character overlap) to ensure context retention at the boundaries.

### 5.2 Embedding Generation
- **Embedding Model:**  
  The `all-MiniLM-L6-v2` sentence transformer is utilized for creating embeddings that capture the semantic meaning of text chunks.
  
- **Embeddings Workflow:**  
  Each document chunk is converted into an embedding vector, which serves as a numerical representation of the content.

### 5.3 Vector Database (Pinecone) Integration
- **Pinecone:**  
  A persistent vector store where all generated embeddings are stored.
  
- **Integration Approach:**  
  The embeddings, along with their associated metadata (like filename and source), are added to a collection in Pinecone.

  <img width="1679" alt="Screenshot 2025-04-11 at 7 47 23 AM" src="https://github.com/user-attachments/assets/a0a5157a-ea51-4b65-92da-462bc5dba64a" />

---

## 6. Stage 4: Backend Service for Query Processing

### 6.1 Processing User Questions
- **Embedding the Question:**  
  When a user submits a question, it is transformed into an embedding vector using the same model employed for document chunks.
  
- **Storage for Context:**  
  The processed question, along with its embedding, is stored to maintain context across multiple queries.

### 6.2 Cosine Similarity and Relevant Retrieval
- **Similarity Search:**  
  Compare the question embedding with the stored document embeddings in the vector database to identify the top most relevant chunks via cosine similarity.
  
- **Outcome:**  
  The combined context (retrieved chunks) forms the basis for generating a relevant answer.

### 6.3 Integrating an LLM for Answer Generation
- **LLM Integration (e.g., Gork):**  
  The retrieved context and the user’s question are combined to create a prompt for a large language model (LLM).
  
- **End-to-End Response:**  
  The LLM processes the prompt and generates a coherent answer, which is then sent back to the user.

### 6.4 Session Management and Context Preservation
- **Conversational Memory:**  
  To support multi-turn interactions, the system stores previous questions and responses so that context is maintained throughout the conversation.
  
- **Data Logging:**  
  All questions, embeddings, and answers are logged into a designated folder or database, ensuring traceability and context sensitivity.

---

## 7. Stage 5: Frontend Chatbot Interface (Next.js)

### 7.1 User Interface Design and Colour Palette
- **Design Principles:**  
  The UI is designed to offer a smooth, interactive user experience, incorporating the following colour schemes:
  - **Background:** `#242E35`
  - **Lines/Borders:** `#1241A9`
  - **Text:** White (`#FFFFFF`)
  - **Accent:** `#3A4348`
  
- **Component Structure:**  
  The chatbot interface is built using Next.js, with individual components handling chat history, user inputs, and bot responses.

  ![WhatsApp Image 2025-04-11 at 07 46 10](https://github.com/user-attachments/assets/c9996f11-853b-4376-bb04-75ab71d7f1cc)


### 7.2 Loading Animations and Real-Time Feedback
- **Interactivity:**  
  While waiting for the backend to process the query, the interface displays a loading animation (e.g., dots blinking) to provide visual feedback.
  
- **Seamless Experience:**  
  When the response is ready, the animation stops and the chatbot displays the answer. This seamless transition helps maintain a smooth conversational flow.

---

## Architecture Overview
![ChatGPT Image Apr 11, 2025, 07_44_55 AM](https://github.com/user-attachments/assets/96afe496-ddb2-4e1a-af63-d9316b513d72)



---

## Demo: Visual Assets and Screenshots

View detailed screenshots and visual assets for this project by accessing the following resource:

[CapillaryTech Documentation Chatbot Visual Assets](https://drive.google.com/file/d/1gfLJYvms89CqB05vAW6yADG5Sx2zWf-8/view?usp=sharing)




---

*End of Document*
