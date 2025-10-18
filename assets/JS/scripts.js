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

//   const form = document.getElementById('contactForm');
//   const status = document.getElementById('form-status');

//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const data = new FormData(form);
//     status.textContent = "Sending...";
    
//     fetch(form.action, {
//       method: form.method,
//       body: data,
//       headers: { 'Accept': 'application/json' }
//     })
//     .then(response => {
//       if (response.ok) {
//         status.textContent = "✅ Message sent successfully!";
//         form.reset();
//       } else {
//         status.textContent = "❌ Failed to send message. Try again later.";
//       }
//     })
//     .catch(() => {
//       status.textContent = "⚠️ Network error. Please check your connection.";
//     });
//   });
