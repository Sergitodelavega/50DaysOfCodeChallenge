btnEl = document.getElementById('toggle');
nav = document.getElementById('nav');

// Add a click event listener to the btnEl
btnEl.addEventListener( 'click', () => {
    nav.classList.toggle('active');
})