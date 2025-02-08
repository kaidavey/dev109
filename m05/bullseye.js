//Prompt the user to enter a number
let num = prompt("Please enter a number");

var table = num;           // Unit of table
//var operator = 'addition';
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message

/*
if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
*/

// Calculate the Multiplication Table
while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br>';
  i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
