// Initialize Firebase
var config = import("./keys")

var config = {
    apiKey: "AIzaSyBw07HQpEJAG77e0xe_-eW2rjJIhlRo0Zo",
    authDomain: "my-portfolio-92fc8.firebaseapp.com",
    databaseURL: "https://my-portfolio-92fc8.firebaseio.com",
    projectId: "my-portfolio-92fc8",
    storageBucket: "my-portfolio-92fc8.appspot.com",
    messagingSenderId: "255672623201",
    appId: "1:255672623201:web:b21b821fa673a9ec918a20",
    measurementId: "G-ECZXRJNT05"
  };

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

document.getElementById("contactform").addEventListener("submit",
 submitForm);


//  Submit form
function submitForm(){
// e.preventDefault();

if ($("#name").val() == "" || $("#email").val() == "" || $("#message").val() == "") {

 alert("Form is incomplete. Please fill out all fields.");
 reset()
 
}else{

// Get values
var name = getInputVal("name");
var email = getInputVal("email");
var message = getInputVal("message");


saveMessage(name, email, message);

alert("Message sent. I will get back to you ASAP");

}
};

function getInputVal(id){
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(name, email, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
name: name,
email: email,
message: message
});
}

function reset() {
  name = $("#name").val(""),
  email = $("#email").val(""),
  message = $("#message").val("")
};

let init = function() {
    let card = document.querySelector(".text-muted"),
    startTime = new Date();
    
    if (card) {
      card.addEventListener("click", function(){
        let miliSeconds = new Date() - startTime;

        alert(miliSeconds/1000 + "seconds,");
       });
    }
}

document.addEventListener("DOMContentLoaded", function(){
  init();

}, false);

