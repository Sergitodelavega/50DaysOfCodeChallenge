const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;

// Set an interval to call the burring function every 30 milliseconds
let int = setInterval(burring, 30);

// Define the burring function
function burring(){
    load++;

    // If the load value is greater than 99, clear the interval
    if(load > 99){
        clearInterval(int);
    }

    // Update the loading text with the current load value
    loadText.innerHTML = `${load}%`;

    // Scale he opacity of the loading text and the blur value of the background based on the current load value
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30,  0)}px)`;
} 

//Define the scale function to map a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
