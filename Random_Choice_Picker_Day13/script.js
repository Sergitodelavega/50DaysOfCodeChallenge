const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// Set the focus on the textarea element
textarea.focus();

// Add a keyup event listener to the textarea element
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        // Call the randomSelect function
        randomSelect();
    }
});

// Define the randomSelect function
function randomSelect(){
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    // Clear the interval after a certain number of iterations
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)
    }, times * 100);
}

// Define the pickRandomTag function
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

// Define the highlightTag function
function highlightTag(tag){
    tag.classList.add('highlight');
}

// Define the unHighlightTag function
function unHighlightTag(tag){
    tag.classList.remove('highlight');
}

// Define the createTags function
function createTags(input){
    const tags = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

    tagsEl.innerHTML = '';
    
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;

        tagsEl.appendChild(tagEl);
    });
}