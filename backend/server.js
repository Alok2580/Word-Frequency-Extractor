const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');  // Import cors
const app = express();
const port = 5000;

app.use(cors());  // Enable CORS for all routes
app.use(express.json());

// Function to get the most frequent words from page content
const getTopWords = (text, n = 10) => {
  const words = text.replace(/[^a-zA-Z\s]/g, '').toLowerCase().split(/\s+/);
  const wordCount = {};

  words.forEach(word => {
    if (word) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });

  const sortedWords = Object.entries(wordCount)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, n);

  return sortedWords;
};

// Endpoint to fetch the content of a page and extract the most frequent words
app.post('/api/fetch-words', async (req, res) => {
  const { url, n } = req.body;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const text = $('body').text(); // Extract text from the body of the page
    const topWords = getTopWords(text, n);

    res.json({ topWords });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching the page content' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
