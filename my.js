let checkPlay = false;
let songsImg = document.querySelector(".card_container");
let mainSongpage = document.querySelector(".first-card");
let nextSong = document.querySelector("#next");
let audioSong = document.querySelector(".audioElement");
let shuffleThesong = document.querySelector(".shuffleSongs");
let shuffleActive = false;
// let songId = document.querySelector("audioSong");


let songs = [
    { songName: "Salaar (2023)", filePath: "./Salaar.mp3", coverPath: "./1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "./2.mp3", coverPath: "./2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "./3.mp3", coverPath: "./3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "./4.mp3", coverPath: "./4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "./5.mp3", coverPath: "./5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "./6.mp3", coverPath: "./6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "./7.mp3", coverPath: "./7.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "./8.mp3", coverPath: "./9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "./9.mp3", coverPath: "./10.jpg" },
]



// object first method   e.coverPath
// song from array

songs.forEach((e, index) => {

    let cardComponent =
        ` <div class="card-1 h-[220px] ">
       <img onclick="myFunction(${index})" src=${e.coverPath} class="rounded-xl w-[230px]">
     </div>`
    songsImg.innerHTML += cardComponent;

})


function myFunction(songId) {
    // console.log("song Id" + songId)
    playSong(songId);
    checkPlay = false;
}

// music on click main page
function playSong(songId = 0) {
    let singleSong = songs[songId] || songs[0];

    console.log(singleSong.filePath);
    console.log(singleSong.duration);

    let firstCard = `
<div>
<img src="${singleSong.coverPath}" class="w-[500px]  rounded-3xl">
<h3 class="text-2xl text-white py-5">${singleSong.songName}</h3>
<audio class="audioElement" >
<source src="${singleSong.filePath}" type="audio/mp3" class="audioSong"></audio>
<div class="flex justify-between item-center">    
<div class="">
        <button><i class="fas fa-2x fa-step-backward text-white" id="previous" onclick="playPrevSong(${songId})"></i></button>
        <i class="far fa-2x fa-play-circle text-white" id="masterPlay" onclick="songHanler()"></i>
        <i class="fas fa-2x fa-step-forward text-white" id="next" onclick="playNextSong(${songId})"></i>
    </div> 
    <div>
        <i class="text-white text-3xl fa fa-random" class="shuffle" onclick="shuffleSongs()"></i>
        <i class="ps-2 text-white text-3xl fa fa-repeat"></i>
    </div>
</div>
</div>`;
    mainSongpage.innerHTML = firstCard;
}
playSong();







// Play and pause music

function songHanler() {

    let playIcon = document.querySelector("#masterPlay")
    audioSong = document.querySelector(".audioElement");
    //using classList.contain()
    // checkPlay = false;

    if (!checkPlay) {
        playIcon.classList.remove("fa-play-circle");
        playIcon.classList.add("fa-pause-circle");
        audioSong.play();
        checkPlay = true;
    }
    else {
        playIcon.classList.remove("fa-pause-circle");
        playIcon.classList.add("fa-play-circle");
        audioSong.pause();
        checkPlay = false;
    }
}

///how to build next and previes button functionality

///create playNextSong() function
//need to use parmater
//increntmetn 
//store the value 
// return 
//show

//sf
//use playsong();

function getVal() {
    console.log("Hello World");
    playSong(5);

    let m = 6 - 5;
    return m;
}

function playNextSong(id) {


    if (shuffleActive == true) {
        nextSongonShuffle = Math.floor(Math.random() * songs.length);
        // console.log("hello")
        playSong(nextSongonShuffle);
        checkPlay = false;


    } else {
        let playSongId = id;
        playSongId++;

        // console.log("playSongId" + playSongId);
        playSong(playSongId)
        checkPlay = false;
    }
}
function playPrevSong(idPrev) {
    if (shuffleActive == true) {
        nextSongonShuffle = Math.floor(Math.random() * songs.length);
        // console.log("hello1")
        playSong(nextSongonShuffle);
        checkPlay = false;


    } else {
        let playSongId = idPrev;
        playSongId--;
        // console.log("playSongId" + playSongId);
        playSong(playSongId)
        checkPlay = false;
    }
}

// 

function shuffleSongs() {
    shuffleActive = true;
    console.log(shuffleActive);

}



