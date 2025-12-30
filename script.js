const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicControl");

if(localStorage.getItem("musicPlaying")==="true"){
  music.play();
  btn.innerHTML="🔊";
}

btn.addEventListener("click",()=>{
  if(music.paused){
    music.play();
    localStorage.setItem("musicPlaying","true");
    btn.innerHTML="🔊";
  }else{
    music.pause();
    localStorage.setItem("musicPlaying","false");
    btn.innerHTML="🔇";
  }
});

const postcard=document.getElementById("postcard");
if(postcard){
  postcard.addEventListener("click",()=>{
    postcard.classList.toggle("flip");
  });
}
