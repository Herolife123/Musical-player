console.log("Welcome to My Music")

//Initialise the variables (event listener)
let songIndex=0;
let audioElement = new Audio('Krishna flute.mp3');  // see this line again
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));


let songs = [
    {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logo2.jpg"},
    {songName:"K thank you flute", filepath:"/K thank you flute.mp3", coverpath:"logos1.jpg"},
    {songName:"Tumse Hi - Instrument", filepath:"/Tumse Hi - Instrument.mp3", coverpath:"logo2.jpg"},
    {songName:"Om mantra", filepath:"/Om mantra.mp3", coverpath:"logos1.jpg"},
    {songName:"Khairiyat-pucho", filepath:"/Khairiyat-pucho.m[3", coverpath:"logo2.jpg"},
    {songName:"Doremon", filepath:"/Doremon.mp3", coverpath:"logos1.jpg"},
    {songName:"Gurbani", filepath:"/Gurbani.mp3", coverpath:"logo2.jpg"},
    {songName:"Gayatri mantra", filepath:"/Gayatri mantra.mp3", coverpath:"logos1.jpg"},
    {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logo2.jpg"},
    {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logos1.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logo2.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logos1.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logo2.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logos1.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logo2.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logos1.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logo2.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logos1.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logo2.jpg"},
    // {songName:"krishn Flute", filepath:"/Krishna flute.mp3", coverpath:"logos1.jpg"}
]

// for list name and its tag image
songItems.forEach((element, i)=>{
    // console.log(Element, i);
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle paly/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }
})

// listen to event
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt(audioElement.currentTime/audioElement.duration)*100;
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{  //nOT WORKING
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =()=>{  //not working
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{ 
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{  //not working
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays(); 
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/$(songIndex+1).mp3';   
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = 'songs/$(songIndex+1).mp3';  
    masterSongName.innerText = songs[songIndex].songName;  
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = 'songs/$(songIndex+1).mp3';   
    masterSongName.innerText = songs[songIndex].songName; 
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})