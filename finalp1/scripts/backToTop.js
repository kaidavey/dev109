function showOnScroll() {
    // Store Button in a variable
    var backToTop = document.getElementById("backToTop");
    // If the user has scrolled more than 40px, show the button, else, hide it
    if (window.scrollY > 40) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

function scrollToTop() {
    // Scroll to the Top automatically
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add an event listener to the window to detect when the user scrolls
window.addEventListener('scroll', showOnScroll);

// Add an event listener to the button when the user clicks. Automate scrolling to the top
document.getElementById("backToTop").addEventListener("click", scrollToTop);