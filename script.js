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
let playPause = document.getElementById('playPauseBtn');
let currentSong = 0;

const playMusic = () => {
  music.play();
  playBtn.classList.remove('fa-pause');
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
  let song = allSongsList[i];

  songImage.src = song.img;
  music.src = song.path;
  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
};

setMusic(2);

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
