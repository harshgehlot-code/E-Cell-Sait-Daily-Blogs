document.addEventListener('DOMContentLoaded', () => {
    console.log('E-Cell SAIT Blog JavaScript loaded!');

    // Example: Dynamically set the current year in the footer
    const currentYearSpan = document.querySelector('footer p');
    if (currentYearSpan) {
        currentYearSpan.innerHTML = `&copy; ${new Date().getFullYear()} E-Cell SAIT. All rights reserved.`;
    }

    // Example: Smooth scroll for the "Explore Latest Posts" button
    const exploreBtn = document.querySelector('.hero .btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Add other interactive elements here as needed.
});