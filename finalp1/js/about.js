// Create var for message
let msg = document.getElementById('result');

// Function Called by HTML file
function calculateDifference(inputDate) {
    event.preventDefault();

    // Clear Anything in Message Div
    msg.innerHTML = '';

    // Create Date Object for user input
    let userDate = new Date(inputDate);

    let userYear = userDate.getFullYear();
    let diffYear = userYear - 2029;

    msg.innerHTML = 'An error occurred.'

    if (diffYear > 0) {
        msg.innerHTML = "You will graduate " + diffYear + " years after me.";
    } else if (diffYear < 0) {
        msg.innerHTML = "I will be graduating " + Math.abs(diffYear) + " years after you.";
    } else {
        msg.innerHTML = "We are in the same graduating class! Let's get to know each other.";
    }
}
