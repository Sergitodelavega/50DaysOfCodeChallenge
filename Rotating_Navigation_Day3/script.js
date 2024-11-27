const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// Add a click event listener to the 'open' button  
// Add the 'show-nav' class to the container element
open.addEventListener('click', () => container.classList.add('show-nav'));

// Add a click event listener to the 'close' button
// Remove the 'show-nav' class from the container element
close.addEventListener('click', () => container.classList.remove('show-nav'));

