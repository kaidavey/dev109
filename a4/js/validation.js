function isValid() {
    var valid = true;

    // Clear all warnings before checking again
    var warnings = document.getElementsByClassName("warning");
    for (var i = 0; i < warnings.length; i++) {
        warnings[i].innerHTML = "";
    }

    /* For each of the following if statements, isValid() calls the helper function.
    If it returns an error message, it gets displayed and valid is set to false.
    If not, the if statement does not run and the input is valid. */

    if (firstName().length > 0) {
        document.getElementById("fname-error").innerHTML = firstName();
        valid = false;
    }
    if (lastName().length > 0) {
        document.getElementById("lname-error").innerHTML = lastName();
        valid = false;
    }
    if (email().length > 0) {
        document.getElementById("email-error").innerHTML = email();
        valid = false;
    }
    if (phone().length > 0) {
        document.getElementById("phone-error").innerHTML = phone();
        valid = false;
    }
    if (username().length > 0) {
        document.getElementById("username-error").innerHTML = username();
        valid = false;
    }
    if (password().length > 0) {
        document.getElementById("password-error").innerHTML = password();
        valid = false;
    }
    if (address().length > 0) {
        document.getElementById("address-error").innerHTML = address();
        valid = false;
    }
    if (city().length > 0) {
        document.getElementById("city-error").innerHTML = city();
        valid = false;
    }
    if (zipcode().length > 0) {
        document.getElementById("zipcode-error").innerHTML = zipcode();
        valid = false;
    }

    // Check valid boolean at the end. If false, prevent page from reloading
    if (!valid) {
        document.getElementById("submit-error").innerHTML = "<strong>See errors above.</strong>";
        event.preventDefault();
    }
}

/* For the following helper functions, here is the basic structure:
First, variables are set at the beginning for the value the user
inputted, the error message, and any other necessary variables.
Second, the validation is run. This is different for every input.
Third, the error message is returned to isValid().*/

function firstName() {
    var firstname = document.getElementById("first-name").value;
    var errorMsg = "";
    if (firstname === "null" || firstname === "") {
        errorMsg += "<p>First name is required.</p>";
        console.log("Invalid first name: no input");
    } else if (firstname.length > 20 || firstname.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMsg += "<p>First name cannot be greater than 20 characters and accepts only valid characters (A-Z, a-z, and ,.'-).</p>";
        console.log("Invalid first name: bad character/length");
    } else {
        validLName = true;
        console.log("Valid first name");
    }
    return errorMsg;
}

function lastName() {
    var lastname = document.getElementById("last-name").value;
    var errorMsg = "";
    if (lastname === "null" || lastname === "") {
        errorMsg += "<p>Last name is required.</p>";
        console.log("Invalid last name: no input");
    } else if (lastname.length > 20 || lastname.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMsg += "<p>Last name cannot be greater than 20 characters and accepts only valid characters (A-Z, a-z, and ,.'-).</p>";
        console.log("Invalid last name: bad character/length");
    } else {
        console.log("Valid last name");
    }
    return errorMsg;
}

function email() {
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var errorMsg = "";
    if (email === "null" || email === "") {
        errorMsg += "<p>Email is required.</p>";
        console.log("Invalid email: no input");
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        errorMsg += "<p>Email is invalid.</p>";
        console.log("Invalid email: incorrectly formatted");
    } else {
        console.log("Valid email");
    }
    return errorMsg;
}

function phone() {
    var phone = document.getElementById("phone").value;
    var errorMsg = "";
    if (phone === null || phone === "") {
        errorMsg += "<p>Phone is required.</p>";
        console.log("Invalid phone number: no input");
    } else if (isNaN(phone) || phone.length > 15) {
        errorMsg += "<p>Phone number must be 15 digits or fewer (accepts 0-9).</p>";
        console.log("Invalid phone number: length/incorrectly formatted");
    } else {
        console.log("Valid phone number");
    }
    return errorMsg;
}

function username() {
    var username = document.getElementById("username").value;
    var errorMsg = "";
    if (username === null || username === "") {
        errorMsg += "<p>Username is required.</p>";
        console.log("Invalid username: no input");
    } else if (username.length > 12) {
        errorMsg += "<p>Username must be 12 characters or fewer.</p>";
        console.log("Invalid username: length");
    } else {
        console.log("Valid username");
    }
    return errorMsg;
}

function password() {
    var password = document.getElementById("password").value;
    var errorMsg = "";
    var regularExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (password === null || password === "") {
        errorMsg += "<p>Password is required.</p>";
        console.log("Invalid password: no input");
    } else if (password.length > 7) {
        errorMsg += "<p>Password must be 7 characters or fewer.</p>";
        console.log("Invalid password: length");
    } else if (!regularExp.test(password)) {
        errorMsg += "<p>Password requires at least 1 UPPER, 1 lower, 1 number, and 1 special character.</p>";
        console.log("Invalid password: special formatting");
    } else {
        console.log("Valid password");
    }
    return errorMsg;
}

function address() {
    var address = document.getElementById("address").value;
    var errorMsg = "";
    if (address === null || address === "") {
        errorMsg += "<p>Address is required.</p>";
        console.log("Invalid address: no input");
    } else {
        console.log("Valid address");
    }
    return errorMsg;
}

function city() {
    var city = document.getElementById("city").value;
    var errorMsg = "";
    if (city === null || city === "") {
        errorMsg += "<p>City is required.</p>";
        console.log("Invalid city: no input");
    } else {
        console.log("Valid city");
    }
    return errorMsg;
}

function state() {
    var state = document.getElementById("state").value;
    var errorMsg = "";
    if (state === null || state === "") {
        errorMsg += "<p>State is required.</p>";
        console.log("Invalid state: no input");
    } else {
        console.log("Valid state");
    }
    return errorMsg;
}

function country() {
    var country = document.getElementById("country").value;
    var errorMsg = "";
    if (country === null || country === "") {
        errorMsg += "<p>Country is required.</p>";
        console.log("Invalid country: no input");
    } else {
        console.log("Valid country");
    }
    return errorMsg;
}

function zipcode() {
    var zipcode = document.getElementById("zipcode").value;
    var country = document.getElementById("country").value;
    var errorMsg = "";
    if (country === "US") {
        if (zipcode === null || zipcode === "") {
            errorMsg += "<p>Zip Code is required.</p>";
            console.log("Invalid zip code: no input");
        } else if (zipcode.length > 5) {
            errorMsg += "<p>Zip Code must be 5 digits or fewer.</p>";
            console.log("Invalid zip code: length");
        } else {
            console.log("Valid zipcode");
        }
    } else {
        console.log("Valid zipcode");
    }
    return errorMsg;
}