// Entry point for general initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    const images = document.querySelectorAll('.carousel-image');
    if (images.length > 0) {
        images[0].classList.add('active');
    }

    // Additional initialization can go here
});
