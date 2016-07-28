var config = {
    apiKey: "AIzaSyAu_EwW6AaRIAKfC99j1hO_0VxoL4MI-aI",
    authDomain: "collaborative-sketch-92514.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-92514.firebaseio.com",
    storageBucket: "collaborative-sketch-92514.appspot.com",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();

var points = [];


function setup() {
    var canvas = createCanvas(800, 500);

    background(255);
    fill(0);
    pointsData.on("child_added", function(point) {
        points.push(point.val());
    });
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
    background(255);

    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        noStroke();
        fill(255, 62, 0);
        ellipse(point.x, point.y, 10, 10);
    }
}

function drawPoint() {
    pointsData.push({
        x: mouseX,
        y: mouseY
    });
}

function drawPointIfMousePressed() {
    if (mouseIsPressed) {
        drawPoint();
    }
}


$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}
$("#clearDrawing").on("click", clearDrawing);



pointsData.on("child_removed", function() {
    points = [];
});

function clearDrawing() {
    console.log("hi");
    pointsData.remove();
    points = [];
}
