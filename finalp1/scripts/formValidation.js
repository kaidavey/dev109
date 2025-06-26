// Store a variable for the form
var form = document.getElementById("form");

// Add an event listener to the form to detect when the user clicks submit
form.addEventListener("submit", function (e) {
    var isValid = true;
    // Create variables for the inputted values.
    var name = e.target['entry.1231670306'].value;
    var email = e.target['entry.1292670517'].value;
    var comment = e.target['entry.805226640'].value;

    // Clear any preexisting error messages
    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("commentErr").innerHTML = "";

    // If the length of any input is less than 1, add an error message and set isValid to false
    if (name.length < 1) {
        document.getElementById("nameErr").innerHTML = "<p class='err'>Please enter a valid name.</p>";
        isValid = false;
    }
    if (email.length < 1) {
        document.getElementById("emailErr").innerHTML = "<p class='err'>Please enter a valid email.</p>";
        isValid = false;
    }
    if (comment.length < 1) {
        document.getElementById("commentErr").innerHTML = "<p class='err'>Please enter a valid comment.</p>";
        isValid = false;
    }

    // If the form is not valid, prevent form from submitting
    if (isValid) {
        // Alert the user that the form was submitted successfully
        alert("Thanks! Your message was sent.");

        // Reset the form after submission
        setTimeout(() => {
            document.getElementById('form').reset();
        }, 1000);
    } else {
        alert('Please complete all fields before submitting.');
        e.preventDefault();
        return false;
    }
})
