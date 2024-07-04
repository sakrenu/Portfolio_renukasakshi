const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for contact messages
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// API route to handle contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    newContact.save()
        .then(() => res.json({ success: true }))
        .catch(err => res.json({ success: false, error: err }));
});

// Serve the index.html file for any unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
