// Create web server
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
    res.send('Create a new comment');
});

// Update an existing comment
app.put('/comments/:id', (req, res) => {
    res.send('Update a comment');
});

// Delete an existing comment
app.delete('/comments/:id', (req, res) => {
    res.send('Delete a comment');
});

// Get all comments
app.get('/comments', (req, res) => {
    res.send('Get all comments');
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
    res.send('Get a single comment');
});

// Start the server
app.listen(8080, () => {
    console.log('Server started');
});