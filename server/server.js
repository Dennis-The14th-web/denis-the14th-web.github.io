const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/Post');
const Feedback = mongoose.model('Feedback');
const { MONGOURI } = require('./keys');


// require('dotenv/config');

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
    const { name, email, message } = req.body
    if (!name || !email || !message) {
       return res.status(422).json({err: "please fill all field"})
    }
    const feedback = new Feedback({
        name,
        email,
        message
    })

    feedback.save()
    .then(feedback=>{
        res.json({message: "successfully saved"})
    })
    .catch(err=>{
        (err)
    })
});

// Connect home to DB via prod 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

mongoose.connect(process.env.MONGOLAB_URI || MONGOURI,
{ useNewUrlParser: true, useUnifiedTopology: true },
 () => console.log("connected to DB"));

// module.exports = router;

// Listen to port and spin server
const Port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(Port);
console.log('Server now listening on PORT',Port)