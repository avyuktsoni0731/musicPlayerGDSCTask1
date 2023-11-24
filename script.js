let allSongsList = [
  {
    name: 'Standing Next to You',
    img: './images/jungkook.jpg',
    artist: 'Jungkook',
    path: './media/standing_next_to_you.mp3',
  },
  {
    name: 'Into Your Arms',
    img: './images/into_your_arms.jpeg',
    artist: 'Witt Lowry feat. Ava Max',
    path: './media/into_your_arms.mp3',
  },
  {
    name: 'Takeaway',
    img: './images/takeaway.jpg',
    artist: 'The Chainsmokers feat. Lennon Stella, Illenium',
    path: './media/takeaway.mp3',
  },
  {
    name: 'Ghost',
    img: './images/jb.jpeg',
    artist: 'Justin Bieber',
    path: './media/ghost.mp3',
  },
  {
    name: 'Lovers in the Night',
    img: './images/seori.jpg',
    artist: 'Seori',
    path: './media/lovers_in_the_night.mp3',
  },
];

let music = document.querySelector('#audio');
let songName = document.querySelector('.music-name');
let artistName = document.querySelector('.artist-name');
let songImage = document.querySelector('.song-image');
let playBtn = document.querySelector('.fa-play');
let forwardBtn = document.querySelector('.fa-forward');
let backwardBtn = document.querySelector('.fa-backward');
let timeSpan = document.querySelector('#time-span');
let playerDesign = document.querySelector('.player');
let containerDesign = document.querySelector('.container');
let playPause = document.getElementById('playPauseBtn');
let currentSong = Math.trunc(Math.random() * 5) + 1;

let mainMenu = document.querySelector('.mainMenu');
let closeMenu = document.querySelector('.closeMenu');
let openMenu = document.querySelector('.openMenu');
let song0 = document.getElementById('song0');
let song1 = document.getElementById('song1');
let song2 = document.getElementById('song2');
let song3 = document.getElementById('song3');
let song4 = document.getElementById('song4');

song0.addEventListener('click', () => {
  setMusic(0);
  mainMenu.style.top = '-100%';
  playMusic();
});
song1.addEventListener('click', () => {
  setMusic(1);
  mainMenu.style.top = '-100%';
  playMusic();
});
song2.addEventListener('click', () => {
  setMusic(2);
  mainMenu.style.top = '-100%';
  playMusic();
});
song3.addEventListener('click', () => {
  setMusic(3);
  mainMenu.style.top = '-100%';
  playMusic();
});
song4.addEventListener('click', () => {
  setMusic(4);
  mainMenu.style.top = '-100%';
  playMusic();
});

openMenu.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
});
closeMenu.addEventListener('click', () => {
  mainMenu.style.top = '-100%';
});

document.querySelector('.playPauseIcon').addEventListener('click', () => {
  playPause.click();
});

document.querySelector('.fwdBtn').addEventListener('click', () => {
  forwardBtn.click();
});

document.querySelector('.bwdBtn').addEventListener('click', () => {
  backwardBtn.click();
});

const playMusic = () => {
  music.play();
  playBtn.classList.remove('fa-play');
  playPause.classList.add('fa-pause');
};

playBtn.addEventListener('click', () => {
  if (playBtn.classList.contains('fa-play')) {
    music.play();
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
  } else {
    music.pause();
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
  }
});

const setMusic = (i) => {
  currentSong = i;
  playerDesign.className = '';
  playerDesign.className = 'player';
  playerDesign.classList.add(`player${i}`);
  containerDesign.className = '';
  containerDesign.className = 'container';
  containerDesign.classList.add(`container${i}`);

  let song = allSongsList[i];

  songImage.src = song.img;
  music.src = song.path;
  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
};

forwardBtn.addEventListener('click', () => {
  if (currentSong >= allSongsList.length - 1) {
    currentSong = 0;
  } else {
    currentSong++;
  }
  setMusic(currentSong);
  playMusic();
  if (playBtn.classList.contains('fa-play')) {
    music.play();
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
  }
});

backwardBtn.addEventListener('click', () => {
  if (currentSong <= 0) {
    currentSong = song.length - 1;
  } else {
    currentSong--;
  }
  setMusic(currentSong);
  playMusic();
  if (playBtn.classList.contains('fa-play')) {
    music.play();
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
  }
});

music.onloadedmetadata = function () {
  timeSpan.max = music.duration;
  timeSpan.value = music.currentTime;
};

if (music.play()) {
  setInterval(() => {
    timeSpan.value = music.currentTime;
    if (Math.floor(music.currentTime) == Math.floor(timeSpan.max)) {
      forwardBtn.click();
    }
  }, 500);
}

timeSpan.onchange = function () {
  music.play();
  music.currentTime = timeSpan.value;
  playBtn.classList.remove('fa-play');
  playBtn.classList.add('fa-pause');
};

setMusic(currentSong);
