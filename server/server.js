const express = require('express');
const http = require('http'); 
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./models/Post');
const Feedback = mongoose.model('Feedback');
const { MONGODB_URI } = require('./config/keys');


// require('dotenv/config');

// Initialize express
const app = express();

mongoose.connect(MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));

// Access middleware
// Data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

// CORS Middleware
app.use(cors());

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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
  }

// module.exports = router;

// Listen to port and spin server
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`)
});