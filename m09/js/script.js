// Global Dot Variables
// These are used to create new dots. So when a user changes their dot settings,
// it doesn't change for all the dots on the page, just the new ones they create.
var dotColor = "seagreen";
var dotSize = "8px";
var dotBorderRadius = "4px";

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
        dot.style.backgroundColor = dotColor;
        dot.style.width = dotSize;
        dot.style.height = dotSize;
        dot.style.borderRadius = dotBorderRadius;
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

    // Establish dot color from form input and create var for input size
    dotColor = e.target.color.value;
    var size = e.target.size.value;

    // Check which size the user inputted, then set according global variables
    if (size === "small") {
        dotSize = "8px";
        dotBorderRadius = "4px";
    } else if (size === "medium") {
        dotSize = "16px";
        dotBorderRadius = "8px";
    } else {
        dotSize = "32px";
        dotBorderRadius = "16px";
    }
});
