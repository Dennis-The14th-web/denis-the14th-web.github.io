const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

require('dotenv/config');

// Initialize express
const app = express();

// Access middleware
app.use(bodyParser.json());
// app.use('/submit', postsRoutes);

// Accessing home page
app.use(express.static("public"));

// Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// post route
app.post('/', (req, res) => {
    const post = new Post({
        name: req.body.name,
        message: req.body.message
    });
    // console.log("Data:", post);
    post.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err)
    });
});

// Connect to DB via prod or dev
if (process.env.NODE_ENV === "production") {
    app.use(express.static("public"));
  }

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("connected to DB"));

// module.exports = router;

// Listen to port and spin server
const Port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(Port);
console.log('Server now listening on PORT',Port)