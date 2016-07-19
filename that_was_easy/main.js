var playing = false;
var thatWasEasy= new Audio("awe.mp3");
// var numclicks = 0;
// var currentTime = 0;


// function sayThatWasEasy() {
//     numclicks++;
//     if (numclicks % 2 == 0) {
//         thatWasEasy.pause();
//         thatWasEasy.addEventListener('timeupdate', function() {
//             currentTime = thatWasEasy.currentTime * 1000;
//             console.log(currentTime);
//         }, false);
//     }
//     else {
//         thatWasEasy = new Audio("awe.mp3");
//         thatWasEasy.play();

//         thatWasEasy.addEventListener('canplaythrough', function() {
//             this.currentTime = currentTime;
//             console.log(currentTime);

//             this.play();
//         });
//     }


//     playing = true;

// }
// function paused() {

//     
//     console.log("hi");
//     playing=false;


// }
// $("#easy").on("click", sayThatWasEasy);
// if(playing=true) {
//     $("#easy").on("click", paused);
//     playing=false;

// }

// $(document).keypress(delegateKeypress);

// function delegateKeypress(event) {
//     if (event.charCode == 32) {
//         //   var  thatWasEasy = new Audio("awe.mp3");
//         thatWasEasy.play();
//         $("#easy").trigger("click")
//     }
// }




$("#easy").on("click", playy)

function playy(){
    if (playing==false){
    thatWasEasy.play();
    playing= true;
    } else if (playing){
    thatWasEasy.pause();
    playing=false;
    }
}
