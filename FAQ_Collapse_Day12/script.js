const toggles = document.querySelectorAll('.faq-toggle');

// Loop through each toggle element and add a click event listener
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        
        // Toggle the 'active' class on the parent node of the toggle element
        toggle.parentNode.classList.toggle('active');
    });
});