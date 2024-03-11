const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Loop through each sound in the sounds array
sounds.forEach(sound => {
    const btn = document.createElement('button');

    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        // Call the stopSongs function to stop any currently playing songs
        stopSongs();

        document.getElementById(sound).play();
    });

    document.getElementById('buttons')
    .appendChild(btn);

});

// Define the stopSongs function
function stopSongs(){
    sounds.forEach(sound => {
        song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}