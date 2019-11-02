// alert("working")
// $

require("dotenv").config();

// console.log(process.env);

var config = require("./keys")

// var firebase = require("instant-express-api");



var config = {
    apiKey: process.env.API_KEY,
    authDomain: "my-portfolio-92fc8.firebaseapp.com",
    databaseURL: "https://my-portfolio-92fc8.firebaseio.com",
    projectId: "my-portfolio-92fc8",
    storageBucket: "my-portfolio-92fc8.appspot.com",
    messagingSenderId: "255672623201",
    appId: "1:255672623201:web:b21b821fa673a9ec918a20",
    measurementId: "G-ECZXRJNT05"
  };

firebase.initializeApp(config);

var messagesRef = firebase.database().ref("messages");

document.getElementById("contactform").addEventListener("submit",
 submitForm);

function submitForm(){
// e.preventDefault();
// console.log(123);
var name = getInputVal("name");
var phone = getInputVal("phone");
var email = getInputVal("email");
var message = getInputVal("message");
//  var name= $("#Form-Input1").val();
//   var email= $("#Form-Input2").val();
//    var message= $("#Text-area1").val();
// console.log(name);

saveMessage(name, phone, email, message);

alert("Your message has been sent!");

}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, phone, email, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
name: name,
phone: phone,
email: email,
message: message
});
}