
# Word Frequency Extractor

## Description
The **Word Frequency Extractor** is a full-stack web application that fetches the content from a given URL and analyzes the frequency of visible words on that page. It displays the top `n` most frequent words and their respective counts. The application is built using **Node.js**, **Express**, **Cheerio** (for web scraping), and a simple frontend using **HTML**, **CSS**, and **JavaScript**.

This tool can be useful for SEO analysis, content analysis, or simply extracting word frequencies from web pages for further processing.

## Features
- Fetches the text content from any given URL.
- Analyzes and counts the frequency of visible words.
- Displays the top `n` most frequent words.
- Simple and user-friendly interface.
- Supports dynamic fetching of word frequencies.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Web Scraping**: Cheerio, Axios
- **API**: RESTful API for communication between frontend and backend.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) installed on your machine.
- A modern web browser (Chrome, Firefox, etc.).

### Steps to Run the Project Locally

1. **Clone the Repository**

   Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/Alok2580/Word-Frequency-Extractor.git
   ```
   Navigate into the project directory:
   ```bash
   cd Word-Frequency-Extractor
   ```

2. **Install Backend Dependencies**

   Once inside the project folder, install the required backend dependencies using npm:
   ```bash
   npm install
   ```

3. **Start the Backend Server**

   Start the backend server with the following command:
   ```bash
   node server.js
   ```
   The backend server will now be running at `http://localhost:5000`.

4. **Open the Frontend**

   Open the `index.html` file directly in your browser to interact with the application. You can simply double-click on `index.html` or drag it into your browser.

### How to Use
1. Open the web page (`index.html`) in your browser.
2. Enter a valid URL in the "Enter URL" input field.
3. Enter the number of top words you want to retrieve in the "Number of Top Words" field.
4. Click on the **"Get Word Frequency"** button to fetch the word frequency data.
5. The table will display the top `n` most frequent words and their corresponding frequencies.

### Example Use Case
- **URL**: `https://www.expertrec.com/`
- **Top Words**: `10`
- Click **Get Word Frequency**, and the page will show the top 10 words with their frequencies from the Wikipedia page.

## API Endpoints

### `POST /api/fetch-words`
- **Description**: Accepts a POST request with a URL and the number of top words (`n`) to retrieve.
- **Request Body**:
  ```json
  {
    "url": "https://example.com",
    "n": 10
  }
  ```
- **Response**: Returns the top `n` most frequent words and their frequencies.
  ```json
  {
    "topWords": [
      ["word1", 10],
      ["word2", 8],
      ["word3", 5]
    ]
  }
  ```

## Troubleshooting
1. **CORS Errors**: If you're facing CORS issues, make sure your backend server is running and the URL is accessible.

2. **Fetching Data**: Ensure the URL you enter is publicly accessible and doesn't require authentication. The scraping functionality doesn't handle authentication or dynamic content loaded by JavaScript.

3. **Server Not Running**: Make sure to start the backend server with `node server.js`. The frontend will not work without the backend running on `http://localhost:5000`.

## Contributing
Feel free to fork the repository, make improvements, or report bugs. Contributions are always welcome!

## License
This project is licensed under the MIT License.
