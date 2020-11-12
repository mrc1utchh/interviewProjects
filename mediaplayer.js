const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEL = document.getElementById("duration");
const prevBtn = dovument.getElementById("prev");
const playBtn = dovument.getElementById("play");
const nextBtn = dovument.getElementById("next");

// Music
const songs = [
    {
        name: "jacinto-1",
        displayName: "Electric Chill Machine",
        artist: "Jacinto Design",
    }
    {
        name: "jacinto-2",
        displayName: "Seven Nation Army (Remix)",
        artist: "Jacinto Design",
    }
    {
        name: "jacinto-3",
        displayName: "Goodnight, Disco Queen",
        artist: "Jacinto Design",
    }
    {
        name: "metric-1",
        displayName: "Front Row (Remix)",
        artist: "Metric/Jacinto Design",
    }
];

// check if playing 
let isPlaying = false;


// play 
function playSong(){
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    music.play();
}

// pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
    music.pause();
}

// add play/pause event listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// current song
let songIndex = 0;

// previous song
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// next song
function nextSong(){
    songIndex++;
    if(songIndex > - 1){
        songIndex - 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// on load - select first song
loadSong(songs[3]);

// update progress bar & time
function updateProgresBar(e){
    if (isPlaying){
        const { duration, currentTime } = e.srcElement;
        // update progress bar width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        durationEL.textCpntent = `${durationMinutes} : ${durationSeconds}`;
        // delay switching duration element to avoid NaN
        if (durationSeconds){
            durationEL.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        //calculate display for duration
        const currentnMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(duration % 60);
        if (currentSeconds < 10){
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
}

// Set Progress Bar
function setProgressBar(e){
    console.log(e);
    const width = this.clientWidth;
    console.log("width", width);
    const clickX = e.offsetX;
    console.log("clickX", clickX);
    const { duration } = music;
    console.log(clickX / width);
    console.log((clickX / width) * duration);
    music.currentTime = (clickX / width) * duration;
}

//event listeners 
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
music.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgressBar);
