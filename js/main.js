// Entry point for general initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    const images = document.querySelectorAll('.carousel-image');
    if (images.length > 0) {
        images[0].classList.add('active');
    }

    // Additional initialization can go here
});

function showCategory(categoryId) {
    const categories = document.querySelectorAll('.project-category');
    categories.forEach(category => category.classList.remove('active'));
    document.getElementById(categoryId).classList.add('active');
}
