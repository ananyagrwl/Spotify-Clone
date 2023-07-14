// console.log("hii")

var songIndex = 0;
var audio = new Audio("songs/1.mp3");
var songName = document.getElementsByClassName("songname")
var songitem = Array.from(document.getElementsByClassName("songitem"))
var songplay = Array.from(document.getElementsByClassName("songplay"))

var songs = [
    { songname: "Yeh Ratein Ye Mausam", filepath: "song/1.mp3", coverimg: "images/s1.jpg" },
    { songname: "Mere Sapno Ki Rani", filepath: "song/2.mp3", coverimg: "images/s2.jpg" },
    { songname: "Gulabi Aakhein", filepath: "song/3.mp3", coverimg: "images/s3.jpg" },
    { songname: "O Mere Dil Ke Chein", filepath: "song/4.mp3", coverimg: "images/s4.jpg" },
    { songname: "Mere Samne Wali Khidki", filepath: "song/5.mp3", coverimg: "images/s5.jpg" },
]

// play/pause song
playbtn.addEventListener("click", () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        playbtn.classList.remove("fa-play")
        playbtn.classList.add("fa-pause")
        gif.style.opacity = "1";
        // songplay[songIndex].target.classList.add("fa-pause")
        // songplay[songIndex].target.classList.remove("fa-play")

    }
    else if (audio.play || audio.currentTime >= 0) {
        audio.pause();
        playbtn.classList.add("fa-play")
        playbtn.classList.remove("fa-pause")
        gif.style.opacity = "0"
        // songplay[songIndex].target.classList.add("fa-play")
        // songplay[songIndex].target.classList.remove("fa-pause")
    }
})

// playbar
audio.addEventListener("timeupdate", () => {
    var progress = parseInt((audio.currentTime / audio.duration) * 100);
    playbar.value = progress;
})
playbar.addEventListener("change", () => {
    audio.currentTime = (playbar.value * audio.duration) / 100;
})

// change songlist
songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverimg;
    songName[i].innerHTML = songs[i].songname;
})

// show played song
const allplay = () => {
    songplay.forEach((i) => {
        i.classList.add("fa-play")
    })
}

songplay.forEach((i) => {
    i.addEventListener("click", (e) => {
        allplay();
        songIndex = parseInt(e.target.id);
        e.target.classList.add("fa-pause")
        e.target.classList.remove("fa-play")
        gif.style.opacity=0;
        audio.src = `songs/${songIndex}.mp3`;
        showsong.innerText = songs[songIndex - 1].songname;
        playedimg.src=songs[songIndex - 1].coverimg;
        audio.currentTime = 0;
        audio.play();
        gif.style.opacity = 1;  
        playbtn.classList.remove('fa-play');
        playbtn.classList.add('fa-pause');
    })
})

// next song
next.addEventListener("click", () => {
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audio.src = `songs/${songIndex}.mp3`;
    showsong.innerText = songs[songIndex - 1].songname;
    audio.currentTime = 0;
    audio.play();
})

// previous song
previous.addEventListener("click", () => {
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audio.src = `songs/${songIndex}.mp3`;
    showsong.innerText = songs[songIndex - 1].songname;
    audio.currentTime = 0;
    audio.play();
})