// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var path = require("path");
// var User = require("./Model/userModel")
// var mongoose = require("mongoose");

var app = express();

// Set the app up with morgan.
// morgan is used to log our HTTP Requests. By setting morgan to 'dev'
// the :status token will be colored red for server error codes,
// yellow for client error codes, cyan for redirection codes,
// and uncolored for all other codes.
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Database configuration
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}
// DB Setup (connect mongolab cloud management and instance of mongodb)
var databaseUrl = (process.env.MONGOLAB || "mongodb://portfoliocoding:portfoliocodingmaster1$@ds161517.mlab.com:61517/heroku_d10n8ht4");
var collections = ["feedbacks"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", (error) => {
  console.log("Database Error:", error);
});

// Routes
// ======

// Simple index route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

// Handle form submission, save submission to mongodb
app.post("/submit", (req, res) => {
  console.log(req.body);
  // Insert the result into the feedbacks collection
  db.feedbacks.insert(req.body, (error, saved) => {
    // Log any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send the result back to the browser
      // This will fire off the success function of the ajax request
      res.send(saved);
    }
  });
});

// Listen on port 3000
const port = process.env.PORT || 3000;
// const server = http.createServer(app);
app.listen(port);
console.log('Server listening on: ', port);

