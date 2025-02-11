const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle other routes for your pages
app.get('/web', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/web/index.html'));
});

app.get('/audio', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/audio/index.html'));
});

app.get('/visual', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/visual/index.html'));
});

app.get('/stuff', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/stuff/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 