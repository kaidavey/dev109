function showOnScroll() {
    let backToTop = document.getElementById("backToTop");

    if (window.scrollY > 40) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', showOnScroll);

document.getElementById("backToTop").addEventListener("click", scrollToTop);