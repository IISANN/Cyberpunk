var play = document.getElementById("play");
var play2 = document.getElementById("play2");
var sound = document.getElementById("sonido");


play.onclick = ()=> {
        sound.play();
        play2.classList.remove("show");
        play.classList.add("show");
}

play2.onclick = ()=> {
    sound.pause();
    play2.classList.add("show");
    play.classList.remove("show");
}



