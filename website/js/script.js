console.log('Hello from script.js');
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function showPopup() {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("popupBox").style.display = "block";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupBox").style.display = "none";
    
    // Store the current timestamp when the popup is dismissed
    localStorage.setItem("popupDismissed", Date.now());
}

function checkPopup() {
    let lastDismissed = localStorage.getItem("popupDismissed");

    if (lastDismissed) {
        let timePassed = (Date.now() - lastDismissed) / (1000 * 60 * 60); // Convert to hours
        if (timePassed < 0.001) {
            return; // Less than 2 hours, don't show the popup
        }
    }

    // Show the popup if 2+ hours have passed
    showPopup();
}

// Show the promo carousel when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('promoCarousel');
    carousel.style.display = 'block'; // Ensure it’s visible after page load
});

// Show the promo carousel when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('promoCarousel');
    carousel.style.display = 'block'; // Ensure it’s visible after page load

    // Check and show the popup
    checkPopup();
});