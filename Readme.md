# CDP Documentation Chatbot

A Node.js Express API that provides a chatbot interface for querying documentation from various Customer Data Platforms (CDPs), including **Segment**, **mParticle**, **Lytics**, and **Zeotap**.

## Features

- **Intelligent Responses**: Powered by OpenAI API for AI-generated answers.
- **Real-time Documentation Fetching**: Web scraping capabilities to fetch the latest documentation and ensure the chatbot gives up-to-date responses.
- **Error Handling**: Custom error responses with a structured API format to manage errors efficiently.
- **Health Check**: Monitor the health and status of the API with a health check endpoint.

## Tech Stack

- **Node.js**: JavaScript runtime environment for building scalable server-side applications.
- **Express.js**: Web application framework to handle HTTP requests and API routes.
- **OpenAI API**: Used for generating intelligent and context-aware responses.
- **Axios**: HTTP client to make requests to external resources and fetch documentation.
- **Cheerio**: HTML parsing and data extraction library for web scraping to gather the latest documentation.
- **CORS**: Cross-Origin Resource Sharing support for interacting with the API from different origins.

## Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Anubhavbaranwal/Assignment-2-Zeot-p.git](https://github.com/Anubhavbaranwal/Assignment-2-Zeot-p)
   cd cdp-documentation-chatbot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with the necessary configurations:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=8000
   ```

4. **Start the server**:
   ```bash
   node src/index.js
   ```

The server should now be running on `http://localhost:8000` (or the port you've set in the `.env` file).

---

## API Endpoints

### 1. Health Check

- **Endpoint**: `GET /api/v1/healthcheck`
- **Description**: Returns the server status to ensure it's operational.
- **Response**:
  ```json
  {
    "status": "ok"
  }
  ```

### 2. Chatbot Query

- **Endpoint**: `POST /api/v1/askQuestion`
- **Request Body**:
  ```json
  {
    "question": "Your question about a CDP here"
  }
  ```
- **Description**: Submit a question about any supported CDP (e.g., Segment, mParticle, etc.), and the API responds with an AI-generated answer based on the latest fetched documentation.
- **Response**:
  ```json
  {
    "answer": "AI-generated answer based on documentation."
  }
  ```

---

## Error Handling

The API uses custom error handling with two key components:

1. **ApiError**: A class for generating structured error messages.
2. **ApiResponse**: A standard response format for both successful and erroneous responses.

**Example error response**:
```json
{
  "status": "error",
  "message": "Detailed error message here",
  "code": 400
}
```

---

## Web Scraping

The chatbot fetches the latest documentation from the CDP websites via web scraping using **Cheerio**.

---

## License

MIT License. See `LICENSE` for details.

