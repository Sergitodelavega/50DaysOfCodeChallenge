btnEl = document.getElementById('toggle');
nav = document.getElementById('nav');

btnEl.addEventListener( 'click', () => {
    nav.classList.toggle('active');
})