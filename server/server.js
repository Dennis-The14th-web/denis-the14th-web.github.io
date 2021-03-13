const express = require('express');
const http = require('http'); 
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/Post');
const Feedback = mongoose.model('Feedback');
const { MONGODB_URI } = require('./config/keys');


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
mongoose.connect(MONGODB_URI,
{ useNewUrlParser: true,
useUnifiedTopology: true 
})
mongoose.connection.on('connected',()=>{
    console.log("conneted to db")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

// module.exports = router;

// Listen to port and spin server
const Port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = http.createServer(app);
server.listen(Port);
console.log('Server now listening on PORT', Port)