const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// Add a 'mouseenter' and 'mouseleave event listener to the left element
// Add and remove the 'hover-left' class to the container element
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));


// Add a 'mouseenter' and 'mouseleave event listener to the right element
// Add and remove the 'hover-right' class to the container element
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

