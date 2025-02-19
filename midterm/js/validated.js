function showOnScroll() {
    let backToTop = document.getElementById("backToTop");

    if (window.scrollY > 40) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

window.addEventListener('scroll', showOnScroll);