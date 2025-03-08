// Show the promo carousel when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('promoCarousel');
    carousel.style.display = 'block'; // Ensure it’s visible after page load

    // Check and show the popup
    checkPopup();
});
