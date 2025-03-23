// First store variables for the figures and timer text and div
var imgs = document.getElementsByTagName("figure");
var timer = document.getElementById("timer");
var bubble = document.getElementById("bubble");
// Initially hide the timer and containing div
bubble.style.visibility = "hidden";
// Establish an index for the image and set a timer var and intervals
var currImg = 0;
var currTime = 4;
// Initially set autoplay to false
var autoplay = false;
var interval;
var countdown;
// When the script first runs, set change the image to be the first one
changeImg(currImg);

// Function to turn autoplay on and off
function toggleAutoplay() {
    // If autoplay is on already, turn it off
    if (autoplay) {
        // Hide the countdown
        bubble.style.visibility = "hidden";
        clearInterval(interval);
        clearInterval(countdown);
        toggleButton.textContent = "Resume Autoplay";
    } else {
        // Show the countdown
        bubble.style.visibility = "visible";
        // Reset the interval
        resetInterval();
        toggleButton.textContent = "Pause Autoplay";
    }
    // Switch the boolean to be opposite of what it was
    autoplay = !autoplay;
}

// Function to change the image to the wanted index
function changeImg(index) {
    // Set the display of all images to none first
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    // THen set the wanted image to block
    imgs[index].style.display = "block";
    currImg = index;
    // Reset the timer after switching the image
    resetTimer();
}

// Function to subtract one second from the timer
function updateTimer() {
    if (currTime > 0) {
        currTime--;
    }
    timer.textContent = currTime;
}

// Set the timer back to 4 seconds
function resetTimer() {
    currTime = 4;
    timer.textContent = currTime;
}

// Makes sure the next image spawns exactly 4 seconds later
// Also makes sure the timer is synced
// Called whenever next image of previous image is clicked
function resetInterval() {
    clearInterval(interval);
    clearInterval(countdown);
    interval = setInterval(nextImage, 4000);
    countdown = setInterval(updateTimer, 1000);
}

// Called whenever Previous Button is clicked
function previousImage() {
    if (currImg === 0) {
        changeImg(imgs.length - 1);
    } else {
        changeImg(currImg - 1);
    }

    // Reset the interval if autoplay is turned on
    if (autoplay) {
        resetInterval();
    }
}

// Called whenever the Next Button is clicked
function nextImage() {
    if (currImg === imgs.length - 1) {
        changeImg(0);
    } else {
        changeImg(currImg + 1);
    }

    // Reset the interval if autoplay is turned on
    if (autoplay) {
        resetInterval();
    }
}

// Add event listeners to the buttons for their respective functions

var prevButton = document.getElementById("prev");
prevButton.addEventListener("click", previousImage);

var nextButton = document.getElementById("next");
nextButton.addEventListener("click", nextImage);

var toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", toggleAutoplay);