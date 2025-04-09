// Get modal elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('fullImage');
const closeBtn = document.querySelector('.close');

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-pic');

// Add click event to each image
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Hamburger menu toggle (if not already in script.js)
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});