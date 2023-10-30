const express = require('express');
const app = express();
const port = 3000;

// Serve static files (CSS, images, JavaScript)
app.use(express.static('public'));

// Define routes for the different pages
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
