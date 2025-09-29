// document.getElementById("demo").innerHTML = "Hello, World!";

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// function that uses the += operator
function myFunction() {
    var sentence = "I am learning";   // create a variable
    sentence += " JavaScript!"; // use the += operator
    document.getElementById("concatenate").innerHTML = sentence;  // using document.getElementById to display the result
}