var imgs = document.getElementsByTagName("figure");
var timer = document.getElementById("timer");
var currImg = 0;
var currTime = 4;
var interval = setInterval(nextImage, 4000);
var countdown = setInterval(updateTimer, 1000);
changeImg(currImg);

function changeImg(index) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[index].style.display = "block";
    currImg = index;
    resetTimer();
}

function updateTimer() {
    if (currTime > 0) {
        currTime--;
    }
    timer.textContent = currTime;
}

function resetTimer() {
    currTime = 4;
    timer.textContent = currTime;
}

function resetInterval() {
    clearInterval(interval);
    clearInterval(countdown);
    interval = setInterval(nextImage, 4000);
    countdown = setInterval(updateTimer, 1000);
}

function previousImage() {
    if (currImg === 0) {
        changeImg(imgs.length - 1);
        resetInterval();
    } else {
        changeImg(currImg - 1);
        resetInterval();
    }
}

function nextImage() {
    if (currImg === imgs.length - 1) {
        changeImg(0);
        resetInterval();
    } else {
        changeImg(currImg + 1);
        resetInterval();
    }
}

var prevButton = document.getElementById("prev");
prevButton.addEventListener("click", previousImage);

var nextButton = document.getElementById("next");
nextButton.addEventListener("click", nextImage);