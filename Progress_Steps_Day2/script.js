const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Add a click event listener to the 'next' button
next.addEventListener('click', () => {
    currentActive++;
    
    // If the user has reached the last step, prevent them from going further
    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    // Update the UI based on the current step
    update();
});

// Add a click event listener to the 'prev' button
prev.addEventListener('click', () => {
    currentActive--;

    // If the user has reached the first step, prevent them from going back
    if(currentActive < 1){
        currentActive = 1;
    }

    // Update the UI based on the current step
    update();
});

// Function to update the UI based on the current step
function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Select all the circles with the 'active' class
    const actives = document.querySelectorAll('.active');

    // Update the width of the progress element based on the number of completed steps
    progress.style.width = ((actives.length-1) / (circles.length-1))*100 + '%';

    // Enable or disable the 'prev' and 'next' buttons based on the current step
    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        next.disabled = false;
        prev.disabled = false;
    }
}

