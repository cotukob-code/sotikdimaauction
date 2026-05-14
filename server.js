const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from auction-site directory
app.use(express.static(path.join(__dirname, 'auction-site')));

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'auction-site', 'index.html'));
});

// Serve other HTML files
app.get('/*.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'auction-site', req.path));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;