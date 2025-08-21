// main.js

fetch('header.html')
  .then(response => {
    if (!response.ok) throw new Error('Header not found');
    return response.text();
  })
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  })
  .catch(error => console.error(error));

  document.querySelector('.left-side').addEventListener('click', () => {
  window.location.href = 'uiux.html';
});

document.querySelector('.right-side').addEventListener('click', () => {
window.location.href = 'illustration.html';
});
