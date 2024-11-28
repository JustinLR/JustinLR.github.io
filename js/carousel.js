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

// Lightbox Logic
let currentLightboxIndex = 0;

function enlargeImage(image) {
    const images = document.querySelectorAll('.carousel-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    // Get the index of the clicked image
    currentLightboxIndex = Array.from(images).indexOf(image);

    // Display the clicked image in the lightbox
    lightboxImage.src = image.src;
    lightbox.style.display = 'flex'; // Show the lightbox
}

function changeLightboxImage(direction) {
    const images = document.querySelectorAll('.carousel-image');
    if (images.length === 0) return;

    // Update the index and wrap around if necessary
    currentLightboxIndex = (currentLightboxIndex + direction + images.length) % images.length;

    // Update the lightbox image source
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[currentLightboxIndex].src;
}

// Close the lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none'; // Close lightbox
    }
});

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    if (images.length > 0) {
        images[0].classList.add('active'); // Set the first image as active
    }
});
