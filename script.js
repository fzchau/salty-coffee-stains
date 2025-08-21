// main.js

// Load header dynamically
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;

    // Highlight active link automatically
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('#header-container nav a').forEach(link => {
      if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  })
  .catch(err => console.error('Failed to load header:', err));
