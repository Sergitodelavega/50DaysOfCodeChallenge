// Select all elements with the class 'panel'
const panels = document.querySelectorAll('.panel');

// Add a click event listener to each panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // When a panel is clicked, remove the 'active' class from all panels
        removeActiveClasses();
        // And add the 'active' class to the clicked panel
        panel.classList.add('active');
    });
});

// Function to remove the 'active' class from all panels
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

function addActiveClasses(){
    
}
