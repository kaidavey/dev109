// First store variables for the figures and timer text
var imgs = document.getElementsByTagName("figure");
var timer = document.getElementById("timer");
// Establish an index for the image and set a timer var and intervals
var currImg = 0;
var currTime = 4;
var interval = setInterval(nextImage, 4000);
var countdown = setInterval(updateTimer, 1000);
// When the script first runs, set change the image to be the first one
changeImg(currImg);

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
        resetInterval();
    } else {
        changeImg(currImg - 1);
        resetInterval();
    }
}

// Called whenever the Next Button is clicked
function nextImage() {
    if (currImg === imgs.length - 1) {
        changeImg(0);
        resetInterval();
    } else {
        changeImg(currImg + 1);
        resetInterval();
    }
}

// Add event listeners to the buttons for their respective functions

var prevButton = document.getElementById("prev");
prevButton.addEventListener("click", previousImage);

var nextButton = document.getElementById("next");
nextButton.addEventListener("click", nextImage);