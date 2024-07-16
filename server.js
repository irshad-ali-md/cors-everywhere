const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all domains
app.use(cors());

// Route to serve the JSON file
app.get('/api/v3/spec.json', (req, res) => {
  const filePath = path.join(__dirname, 'spec.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
