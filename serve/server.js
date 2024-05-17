const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userPosts', { useNewUrlParser: true, useUnifiedTopology: true });

// Check MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the schema and model
const postSchema = new mongoose.Schema({
    name: String,
    subject: String,
    text: String
});

const Post = mongoose.model('Post', postSchema);

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve the form HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../post.html'));
});

// Serve the data table HTML file
app.get('/datatable', (req, res) => {
    res.sendFile(path.join(__dirname, './TableData.html'));
});

// Serve the JavaScript file
app.get('/Table.js', (req, res) => {
    res.sendFile(path.join(__dirname, './Table.js'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    const newPost = new Post({
        name: req.body.name,
        subject: req.body.subject,
        text: req.body.text
    });

    newPost.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

// Fetch posts
app.get('/posts', (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(posts);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
