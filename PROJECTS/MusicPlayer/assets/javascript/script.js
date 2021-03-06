var musicCont = document.querySelector ('.music-container');
var play = document.querySelector ('#play');
var prev = document.querySelector ('#previous');
var next = document.querySelector ('#next');
var cover = document.querySelector ('#cover');
var title = document.querySelector ('#titull');
var audio = document.querySelector ('#audio');
var progress = document.querySelector ('.progress');
var progressbcont = document.querySelector ('.progressbcont');

var songs = ['Aerosmith - Dream On', 'Billy Joel - Piano Man', 'Eric Clapton - Layla', 
'Phil Collins - In The Air Tonight', 'Pink Floyd - High Hopes', 'U2 - Ordinary Love'];
var listbtn = document.getElementById ('listabtn');

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `img/${song}.jpg`;
}

function playSong(){
    musicCont.classList.add('play');
    play.querySelector('i.fas').classList.remove('fa-play');
    play.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}
function pauseSong() {
    musicCont.classList.remove('play');
    play.querySelector('i.fas').classList.add('fa-play');
    play.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
  }

function prevSong(){
   songIndex--;
   if (songIndex<0){
       songIndex=songs.length - 1;
   } 
   loadSong(songs[songIndex]);
   playSong();
}
function nextSong(){
    songIndex++;
    if (songIndex>songs.length - 1){
        songIndex=0;
    } 
    loadSong(songs[songIndex]);
    playSong();
 }

 function updateProgress(e){
    var {duration, currentTime} = e.srcElement;
    var progressPerc =(currentTime / duration) * 100;
    progress.style.width = `${progressPerc}%`;

 } 
function setProgress(e){
    var width = this.clientWidth;
    var clickX = e.offsetX;
    var duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}
 function showlist(){
    musicCont.classList.toggle('show');
 }


//eventlistrener
play.addEventListener ('click', () => {
    const isPlaying = musicCont.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    }
    else {
        playSong();
    }
})

prev.addEventListener ('click' , prevSong);
next.addEventListener ('click' , nextSong);

//click progress
progressbcont.addEventListener('click',setProgress);

//timeupdate
audio.addEventListener('timeupdate',updateProgress);

//songend
audio.addEventListener('ended', nextSong)

listbtn.addEventListener ('click',showlist)





function ndrroSong(cila) {
  title.innerText = cila;
  audio.src = `music/${cila}.mp3`;
  cover.src = `img/${cila}.jpg`;
  
}

var list = document.querySelector('ul');

list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    // e.target.style.color = "orange";
    // e.target.classList.toggle('checked');
    var cila = (e.target.textContent);
    ndrroSong(cila);
    playSong();
  }
}, false);
