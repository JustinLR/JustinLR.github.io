// Carousel Logic
let currentImageIndex = 0;

function changeImage(direction) {
    const images = document.querySelectorAll('.carousel-image');
    if (images.length === 0) return;

    // Remove the active class from the current image
    images[currentImageIndex].classList.remove('active');

    // Update index and wrap around if necessary
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;

    // Add the active class to the new image
    images[currentImageIndex].classList.add('active');
}

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    if (images.length > 0) {
        images[0].classList.add('active'); // Set the first image as active
    }
});
