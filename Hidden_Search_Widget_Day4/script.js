const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const search = document.querySelector('.search');

// Add a click event listener to the button 
btn.addEventListener('click', () => {
    // Toggle the 'active' class on the search element
    search.classList.toggle('active');

    // Set the focus on the input element
    input.focus();
})