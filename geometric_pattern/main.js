var NUM_CIRCLES = 40;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;
var img;
var sprite;

function setup() {
    createCanvas(1350, 620);
    img = loadImage("hollande+72.png");
    frameRate(5000);
    
    circleDiameter = width / NUM_CIRCLES;
    circleRadius = circleDiameter / 2;

    rVal = 225;
    gVal = 0;
    bVal = 0;
}
// function draw() {
//     ellipse(0,height/2,circleDiameter,circleDiameter);
//     ellipse(circleDiameter, height/2,circleDiameter,circleDiameter);
//     ellipse(2*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(3*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(4*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(5*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(6*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(7*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(8*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(9*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(10*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(11*circleDiameter,height/2,circleDiameter,circleDiameter);
//     ellipse(12*circleDiameter,height/2,circleDiameter,circleDiameter);
// }
function draw() {

    var isShifted = false

    var y = height;
    while (y >= 0) {

        var x;

        if (isShifted) {
            x = circleRadius;
        }
        else {
            x = 0;
        }
        while (x <= width / 3) {
            fill(color(0, 0, 255));
            stroke(color(0, 0, 255));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        while (x > width / 3 && x <= width * 2 / 3) {
            fill(color(255, 255, 255));
            stroke(color(255, 255, 255));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        while (x > width * 2 / 3 && x <= width) {
            fill(color(255, 0, 0));
            stroke(color(255, 0, 0));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        
        y = y - circleRadius;
        isShifted = !isShifted;

        // rVal = (rVal + 254) % 256;
        // gVal = (gVal + 7) % 256;
        // bVal = (bVal +3) %256;
    }
    drawSprites();
}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometricPattern', 'png')
    }
    return false;
}

function mouseClicked() {
    sprite=createSprite(700, 200, 50, 50);
    sprite.addImage(img);
    
    setTimeout(function() {
        sprite.remove(); 
        img.remove();
        console.log("hi") 
        }, 2000);
}