// alert("working")
// $

// Initialize Firebase
var config = import("./keys")

var config = {
    apiKey: "process.env.API_KEY",
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
// console.log(123);

if ($("#name").val() == "" || $("#phone").val() == "" || $("#email").val() == "" || $("#message").val() == "") {

 alert("Form is incomplete. Please fill out all fields.");
 
}else{

// Get values
var name = getInputVal("name");
var phone = getInputVal("phone");
var email = getInputVal("email");
var message = getInputVal("message");
//  var name= $("#Form-Input1").val();
//  var phone= $("#Form-Input2").val();
//   var email= $("#Form-Input3").val();
//    var message= $("#Text-area1").val();
// console.log(name);

saveMessage(name, phone, email, message);

alert("Message sent. I will get back to you ASAP");

}
};

function getInputVal(id){
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(name, phone, email, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
name: name,
phone: phone,
email: email,
message: message
});
}


// Holds the updated time for cards 
// $(".card").on("click", function(){
//   event.preventDefault();
   
//    var textMuted = moment($(".text-muted").val().trim(), "HH:mm").subtract(10, "years").format("x");
// })


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

