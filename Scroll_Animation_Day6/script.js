const boxes = document.querySelectorAll('.box');

// Add a scroll event listener to the window object
window.addEventListener('scroll', checkBoxes);

checkBoxes();

// Define the checkBoxes function
function checkBoxes(){
    // Calculate the trigger point for the boxes to become visible
    const triggerBottom = window.innerHeight / 5 * 4;
    console.log(triggerBottom);

    boxes.forEach(box => {
        // Get the top position of the current box relative to the viewport
        boxTop = box.getBoundingClientRect().top;
        
        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else
        {
            box.classList.remove('show');
        }
    });
}