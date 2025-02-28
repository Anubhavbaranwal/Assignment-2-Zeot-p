# CDP Documentation Chatbot

A Node.js Express API that provides a chatbot interface for querying documentation from Customer Data Platforms (CDPs) including Segment, mParticle, Lytics, and Zeotap.

## Features

- RESTful API endpoints for chatbot interactions
- OpenAI integration for intelligent responses
- Web scraping capabilities to fetch latest documentation
- Error handling with custom API response format
- Health check endpoint for monitoring

## Tech Stack

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **OpenAI API**: For generating intelligent responses
- **Axios**: HTTP client for making requests
- **Cheerio**: HTML parsing and data extraction
- **CORS**: Cross-Origin Resource Sharing support


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cdp-documentation-chatbot.git
   cd cdp-documentation-chatbot

2. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the root directory with your OpenAI API key:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=8000

4.Start the server:
  ```bash
  node src/index.js

 API Endpoints
  Health Check
    GET /api/v1/healthcheck
    Returns server status
  Chatbot
    POST /api/v1/askQuestion
    Request body: { "question": "Your question about a CDP here" }
    Responds with AI-generated answer based on fetched documentation


Error Handling
The API uses custom error handling with ApiError class and standard response format via ApiResponse.