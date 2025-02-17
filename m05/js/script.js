// Prompt the user to enter a number
let num = prompt("Please enter a number (0-10)", "3");

// Convert the string input to a number
num = Number(num);

// Pass the number through checks to make sure it is valid
if (num == null || isNaN(num) || num < 0 || num > 10) {
  console.log("You entered a value that does not fit the parameters.");
  num = 0;
}

// Declare the message
var msg = '<h2>Multiplication Table</h2>';

// Calculate the Multiplication Table
for (var i = 1; i <= 10; i++) {
  msg += i + ' x ' + num + ' = ' + (i * num) + '<br>';
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
