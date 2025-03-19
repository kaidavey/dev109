var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    var isValid = true;
    var name = e.target.name.value;
    var email = e.target.email.value;
    var comment = e.target.comment.value;

    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("commentErr").innerHTML = "";

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

    if (!isValid) {
        e.preventDefault();
    }
})