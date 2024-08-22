// app.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Pet Sitter Website Loaded');

    // Simple script to handle navigation, if needed
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to clicked link
            e.target.classList.add('active');
        });
    });
});
