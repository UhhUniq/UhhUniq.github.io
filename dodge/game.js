var player;
var playerImage;
var enemy;
var enemyImage;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var playerenemy;
var isGameOver;
var background;
var backgroundImage;
var score;

function setup() {
    createCanvas(1300, 600);
    player = createSprite(width / 2, height - playerImage.height / 2, 50, 50);
    player.addImage(playerImage);
    isGameOver = false;
    enemy = createSprite(Math.floor((Math.random() * 1300)), height - 25, 50, 50);
    enemy2 = createSprite(Math.floor((Math.random() * 1300)), height - 25, 50, 50);
    enemy3 = createSprite(Math.floor((Math.random() * 1300)), height - 25, 50, 50);
    enemy4 = createSprite(Math.floor((Math.random() * 1300)), height - 25, 50, 50);
    enemy5 = createSprite(Math.floor((Math.random() * 1300)), height - 25, 50, 50);
    enemy6 = createSprite(Math.floor((Math.random() * 1300)), height - 25, 50, 50);
    enemy.addImage(enemyImage);
    enemy2.addImage(enemyImage);
    enemy3.addImage(enemyImage);
    enemy4.addImage(enemyImage);
    enemy5.addImage(enemyImage);
    enemy6.addImage(enemyImage);
    score = 0;
}

function draw() {
    background(backgroundImage);
    if (isGameOver) {
        gameOver();
    }
    else {
        if (enemy.overlap(player))
            isGameOver = true
        if (enemy2.overlap(player))
            isGameOver = true
        if (enemy3.overlap(player))
            isGameOver = true
        if (enemy4.overlap(player))
            isGameOver = true
        if (enemy5.overlap(player))
            isGameOver = true
        if (enemy6.overlap(player))
            isGameOver = true


        if (keyDown(RIGHT_ARROW) && player.position.x < (width - 25)) {
            player.position.x = player.position.x + 4;
        }

        if (keyDown(LEFT_ARROW) && player.position.x > 25) {
            player.position.x = player.position.x - 4;
        }
        if (keyDown(DOWN_ARROW) && player.position.y < (height - 25)) {
            player.position.y = player.position.y + 2;
        }

        if (keyDown(UP_ARROW) && player.position.y > 25) {
            player.position.y = player.position.y - 2;
        }

        enemy.position.y = enemy.position.y + 7;
        enemy2.position.y = enemy2.position.y + 6;
        enemy3.position.y = enemy3.position.y + 9;
        enemy4.position.y = enemy4.position.y + 10;
        enemy5.position.y = enemy5.position.y + 5;
        enemy6.position.y = enemy6.position.y + 5;

        drawSprites();

        if (enemy.position.y > height) {
            score = score + 1;
            enemy.position.y = 0,
                enemy.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy2.position.y > height) {
            score = score + 1;
            enemy2.position.y = 0,
                enemy2.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy3.position.y > height) {
            score = score + 1;
            enemy3.position.y = 0,
                enemy3.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy4.position.y > height) {
            score = score + 1;
            enemy4.position.y = 0,
                enemy4.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy5.position.y > height) {
            score = score + 1;
            enemy5.position.y = 0,
                enemy5.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy6.position.y > height) {
            score = score + 1;
            enemy6.position.y = 0,
                enemy6.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy.overlap(player)) {
            gameOver();
        }
        if (enemy2.overlap(player)) {
            gameOver();
        }
        if (enemy3.overlap(player)) {
            gameOver();
        }
        if (enemy4.overlap(player)) {
            gameOver();
        }
        if (enemy5.overlap(player)) {
            gameOver();
        }
        if (enemy6.overlap(player)) {
            gameOver();
        }
         console.log(score);
    fill(255, 0, 0);
    textFont(specialfont);
    textSize(30)
    text("Score:" + score, 0, 30);


    }
   

}

function gameOver() {
    background(backgroundImage);
    textAlign(CENTER);
    fill("#FF0000");
    textSize(50);
    textFont(specialfont);
    text("Game Over!", width / 2, height / 2);
    text("Click anywhere to try again", width / 2, 3 * height / 4);
    textFont(specialfont);
    textSize(30)
    text("Score:" + score, 70, 30);

}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false; 
        score = 0;
        player.position.x = width / 2;
        player.position.y = height - playerImage.height / 2;
        enemy.position.x = Math.floor((Math.random() * 1300));
        enemy.position.y = 0;
        enemy2.position.x = Math.floor((Math.random() * 1300));
        enemy2.position.y = 0;
        enemy3.position.x = Math.floor((Math.random() * 1300));
        enemy3.position.y = 0;
        enemy4.position.x = Math.floor((Math.random() * 1300));
        enemy4.position.y = 0;
        enemy5.position.x = Math.floor((Math.random() * 1300));
        enemy5.position.y = 0;
        enemy6.position.x = Math.floor((Math.random() * 1300));
        enemy6.position.y = 0;
    }
}

function preload() {
    playerImage = loadImage("PLAYER 2.png");
    backgroundImage = loadImage("bkgd.png");
    specialfont = loadFont("font.ttf");
    enemyImage = loadImage("BOSS_02.png");
}
