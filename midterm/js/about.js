// Create var for message
let msg = document.getElementById('message');

// Create Date Object for today and set min, sec, ms to 0
let today = new Date();
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);

// Function Called by HTML file
function calculateDifference(inputDate) {
    event.preventDefault();

    // Clear Anything in Message Div
    msg.innerHTML = '';

    // Create Date Object for user input
    let userDate = new Date(inputDate);

    if (validateDate(userDate)) {
        let userYear = userDate.getFullYear();
        let diffYear = userYear - 2007;

        let diffMillisecond = userDate - new Date(2007, 6, 22);
        let diffDay = Math.round(diffMillisecond / (1000 * 60 * 60 * 24));

        let comparison = document.createElement('p');
        comparison.innerHTML = 'An error occurred.'

        if (diffDay > 0) {
            comparison.innerHTML = "You are " + diffYear + " years or " + diffDay + " days younger than Kai!";
        } else if (diffDay < 0) {
            comparison.innerHTML = "You are " + Math.abs(diffYear) + " years or " + Math.abs(diffDay) + " days older than Kai!";
        } else {
            comparison.innerHTML = "You were born on the same day as Kai!";
        }

        msg.appendChild(comparison);
    }
}

// Helper function for validating date
function validateDate(userDate) {
    if (userDate.getTime() > today.getTime()) {
        let error = document.createElement('p');
        error.innerHTML = "You can't be born in the future! Try again.";

        // Add error message to message div
        msg.appendChild(error);
        return false;
    }
    return true;
}
