// Function and Event listener to clear dots
function clearDots(e) {
    // Get all dot elements
    var dots = document.getElementsByClassName("dot");

    // Going backwards through a for loop, remove each one
    for (var i = dots.length - 1; i >= 0; i--) {
        dots[i].parentNode.removeChild(dots[i]);
    }

    //Stop the propagation of events
    e.stopPropagation();
}

var clear = document.getElementById("clear");
clear.addEventListener("click", function (e) {
    clearDots(e);
});


// Function and Event Listener to add a dot
document.addEventListener("click", function(e) {
    // Store the control panel into a variable
    var controlPanel = document.getElementById("controls");

    // First, see if either the target coordinate is in the control panel or if the control
    // panel contains the target coordinate. Then, if not, proceed to add a dot.
    if (!controlPanel.contains(e.target)) {
        var dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = (e.clientX - 4) + "px";
        dot.style.top = (e.clientY - 4) + "px";
        document.body.appendChild(dot);
    }
});


// Event listener to prevent the dots from being clicked inside the control panel
var controlPanel = document.getElementById("controls");
controlPanel.addEventListener("click", function(e) {
    e.stopPropagation();
});

// Event Listener and Function to give functionality to the form
var form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    // Prevents the form from reloading the page
    e.preventDefault();

    // Create variables for dots, color, and size
    var dots = document.getElementsByClassName("dot");
    var color = e.target.color.value;
    var size = e.target.size.value;

    // Loop through all dots to apply the new styles
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.background = color;
        if (size === "small") {
            dots[i].style.height = "8px";
            dots[i].style.width = "8px";
            dots[i].style.borderRadius = "4px";
        } else if (size === "medium") {
            dots[i].style.height = "16px";
            dots[i].style.width = "16px";
            dots[i].style.borderRadius = "8px";
        } else {
            dots[i].style.height = "32px";
            dots[i].style.width = "32px";
            dots[i].style.borderRadius = "16px";
        }
    }
});
