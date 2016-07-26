var explosionGif;
var isPlaying = false;
var audio = new Audio("EXP.mp3");

function setup() {
    createCanvas(1300,600);
    explosionGif = loadGif("EXP.gif")
    explosionImage = loadImage("EXP.gif")
     background(0);
}

function draw() {
    if(isPlaying){
    image(explosionGif, 600,300);
    }
//   explosion.playing();

}

function mouseClicked() {
    isPlaying = true;
    
console.log("hg");
    audio.play();
}



