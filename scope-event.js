// Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
// Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"

// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J". INCOMPLETE!

// Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"

// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.
//

document.getElementById("btn1").onclick = function(){
  document.getElementById("text1").innerHTML = "I'm Right!";
};

document.getElementById("btn2").onclick = function(){
  document.getElementById("text1").innerHTML = "No I'm Right!";
}

document.getElementById("large-button").onmouseover = function(){
    alert("Hey! I told you not to hover over me!");
};

// document.getElementById("sect3").addEventListener("keypress", listener("f", "e"));
//
// function listener(listen){
//   var x = event.which || event.keyCode;
//   document.getElementById("text-out").innerHTML = "You typed: " + x;
// }
//
// listener("f", "e");
