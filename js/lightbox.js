let currentLightboxIndex = 0;

// Function to open the lightbox with the clicked image
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

// Function to navigate lightbox images
function changeLightboxImage(direction) {
    const images = document.querySelectorAll('.carousel-image');
    if (images.length === 0) return;

    // Update index and wrap around if necessary
    currentLightboxIndex = (currentLightboxIndex + direction + images.length) % images.length;

    // Update the lightbox image source
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[currentLightboxIndex].src;
}

// Function to close the lightbox
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none'; // Close lightbox when clicking outside
    }
});

// Preload images for smooth transitions
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    images.forEach(image => {
        const img = new Image();
        img.src = image.src;
    });
});
