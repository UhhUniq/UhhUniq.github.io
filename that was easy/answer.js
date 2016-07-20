var numClicks = 0;

function sayThatWasEasy() {
    numClicks++;
    if(numClicks % 2 ==0) {
        thatWasEasy.pause();
    } else {
        thatWasEasy = new Audio("awe.mp3");
        thatWasEasy.play();
        playing=true;
    }

}