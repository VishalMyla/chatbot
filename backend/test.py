import os
import pinecone
import requests
from langchain.embeddings import HuggingFaceEmbeddings

# Step 1: Initialize the HuggingFace embedding model
def initialize_embeddings():
    """
    Initialize the embedding model.
    """
    print("Initializing embedding model...")
    embeddings = HuggingFaceEmbeddings(
        model_name="all-MiniLM-L6-v2",  # A good lightweight model for embeddings
        model_kwargs={'device': 'cpu'}
    )
    return embeddings

# Initialize embeddings
embeddings = initialize_embeddings()

# Step 2: Initialize Pinecone
pinecone.init(api_key=os.environ["PINECONE_API_KEY"], environment=os.environ["PINECONE_ENV"])
index = pinecone.Index("my-embeddings-index")  # Replace with your index name

def get_hf_embedding(text: str) -> list:
    """
    Use HuggingFaceEmbeddings to generate an embedding for the input text.
    """
    return embeddings.embed_query(text)  # Using embed_query() from the HuggingFaceEmbeddings API

def call_llm_api(prompt: str) -> str:
    """
    Call the LLM API (e.g. Gorek) with a text prompt and return the response.
    """
    url = "https://api.grok.xai.com/v1/completions"  # Update as per your endpoint
    headers = {
        "Authorization": f"Bearer {os.environ['GOREK_API_KEY']}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "grok-beta",
        "prompt": prompt,
        "max_tokens": 200,
        "temperature": 0.2,
        "top_p": 1.0
    }
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 200:
        json_resp = response.json()
        return json_resp["choices"][0]["message"]["content"]
    else:
        raise Exception(f"LLM API request failed: {response.status_code}, {response.text}")

def process_query(user_query: str) -> str:
    """
    For a given user query, generate an embedding, retrieve similar vectors from Pinecone,
    extract their textual content, build a prompt, and call the LLM API to generate an answer.
    """
    # Generate embedding for the user query
    query_embedding = get_hf_embedding(user_query)
    
    # Query Pinecone for the most similar vectors
    query_results = index.query(vector=query_embedding, top_k=3, include_metadata=True)
    
    # Extract text from metadata of each matching vector (assumes each record's metadata has a "text" field)
    context_texts = [match["metadata"].get("text", "") for match in query_results.get("matches", [])]
    context = "\n".join(context_texts)
    
    # Construct a prompt for the LLM (LLM expects text, not raw embeddings)
    prompt = (
        f"Context:\n{context}\n\n"
        f"User Query: {user_query}\n\n"
        f"Provide a clear and comprehensive answer based on the above context:"
    )
    
    # Call the LLM API with the prompt and return its response
    return call_llm_api(prompt)

if __name__ == "__main__":
    user_input = input("Enter your query: ")
    try:
        answer = process_query(user_input)
        print("\nLLM Response:")
        print(answer)
    except Exception as e:
        print("Error processing query:", e)
