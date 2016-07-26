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
var highscore;
var gravity;
var enemy2Image;
var enemy3Image;
var enemy4Image;
var isGameWin;
var playing = false;
var playin = false;
var MLGSONGCUT = new Audio("360noscoop.mp3");
var SNIPER = new Audio("MW2.mp3")
var illuminati;
var doritos;
var lunette;
var mlglogo;
var fog;
var hit;
var join;
var faze;
var obey;
var cana;
var fogGif;

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
    enemy2.addImage(enemy2Image);
    enemy3.addImage(enemy3Image);
    enemy4.addImage(enemy4Image);
    enemy5.addImage(enemyImage);
    enemy6.addImage(enemyImage);
    score = 0;
    highscore = score;
    gravity = 0.8;
    
    fogGif = loadGif("FOG.gif")
    fogImage = loadImage("FOG.gif")
}

function draw() {
    background(backgroundImage);
    if (isGameOver) {
        gameOver();
    }
    else if (isGameWin) {
        makemlg();

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
            player.position.x = player.position.x + 10;
        }

        if (keyDown(LEFT_ARROW) && player.position.x > 25) {
            player.position.x = player.position.x - 10;
        }
        // if (keyDown(DOWN_ARROW) && player.position.y < (height - 25)) {
        //     player.position.y = player.position.y + 10;
        // }

        // if (keyDown(UP_ARROW) && player.position.y > 25) {
        //     player.position.y = player.position.y - 10;
        // }

        jump();

        enemy.position.y = enemy.position.y + 7;
        enemy2.position.y = enemy2.position.y + 6;
        enemy3.position.y = enemy3.position.y + 9;
        enemy4.position.y = enemy4.position.y + 10;
        enemy5.position.y = enemy5.position.y + 5;
        enemy6.position.y = enemy6.position.y + 5;

        drawSprites();

        if (enemy.position.y > height) {
            score = score + 1;
            if (score == 10) {
                winGame();
            }
            enemy.position.y = 0,
                enemy.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy2.position.y > height) {
            score = score + 1;
            if (score == 10) {
                winGame();
            }
            enemy2.position.y = 0,
                enemy2.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy3.position.y > height) {
            score = score + 1;
            if (score == 10) {
                winGame();
            }
            enemy3.position.y = 0,
                enemy3.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy4.position.y > height) {
            score = score + 1;
            if (score == 10) {
                winGame();
            }
            enemy4.position.y = 0,
                enemy4.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy5.position.y > height) {
            score = score + 1;
            if (score == 10) {
                winGame();
            }
            enemy5.position.y = 0,
                enemy5.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy6.position.y > height) {
            score = score + 1;
            if (score == 10) {
                winGame();
            }
            enemy6.position.y = 0,
                enemy6.position.x = Math.floor((Math.random() * 1300));
        }
        if (enemy.overlap(player)) {
            gameOver();
            if (score > highscore) {
                highscore = score;
            }

        }
        if (enemy2.overlap(player)) {
            gameOver();
            if (score > highscore) {
                highscore = score;
            }
        }
        if (enemy3.overlap(player)) {
            gameOver();
            if (score > highscore) {
                highscore = score;
            }
        }
        if (enemy4.overlap(player)) {
            gameOver();
            if (score > highscore) {
                highscore = score;
            }
        }
        if (enemy5.overlap(player)) {
            gameOver();
            if (score > highscore) {
                highscore = score;
            }
        }
        if (enemy6.overlap(player)) {
            gameOver();
            if (score > highscore) {
                highscore = score;
            }
        }
        console.log(score);
        fill(255, 0, 0);
        textFont(specialfont);
        textSize(40)
        text("Score:" + score, 0, 30);


    }


}

function gameOver() {
    background(backgroundImage);
    textAlign(CENTER);
    fill("#FF0000");
    textSize(50);
    textFont(specialfont);
    text("GAME OVER !", width / 2, height / 2);
    text("CLICK FOR TRY AGAIN!", width / 2, 3 * height / 4);
    textFont(specialfont);
    textSize(30)
    text("Score:" + score, 70, 30);
    text("High score:" + highscore, width / 2, height / 4);

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
    playerImage = loadImage("PLAYER3.png");
    backgroundImage = loadImage("BACK2.png");
    specialfont = loadFont("font.ttf");
    enemyImage = loadImage("BOSS_02.png");
    enemy2Image = loadImage("ENEMY2.png");
    enemy3Image = loadImage("ENEMY3.png");
    enemy4Image = loadImage("ENEMY4.png");
    backgroundMLGImage = loadImage("BKGDMLG.jpg")
    illuminatiImage = loadImage("ILLU.png")
    doritosImage = loadImage("MLGDORITOS.png")
    mlglogoImage = loadImage("MLGLOGO.png")
    lunetteImage = loadImage("MLGLUNET.png")
    fogImage = loadImage("FOG.png")
    hitImage = loadImage("HIT.png")
    joinImage = loadImage("JOIN.png")
    fazeImage = loadImage("FAZE.png")
    obeyImage = loadImage("OBEY.png")
    canaImage = loadImage("CANA.png")
}

function jump() {
    if (keyIsDown(32) && player.velocity.y === 0) {
        player.velocity.y = -20;
    }
    if (player.velocity.y != 0) {
        player.velocity.y = player.velocity.y + gravity;
    }
    if (player.position.y > height - (player.height / 2)) {
        player.velocity.y = 0;
        player.position.y = height - (player.height / 2);
    }
}

function winGame() {
    // Removes game sprites so they're not drawn on the win screen
    player.remove();
    enemy.remove();
    enemy2.remove();
    enemy3.remove();
    enemy4.remove();
    enemy5.remove();
    enemy6.remove();

    // Set up sprites for the makemlg() function
    illuminati = createSprite(width / 2, height / 2, 0, 0);
    illuminati.addImage(illuminatiImage);
    illuminati.rotationSpeed = 2.0;
    doritos = createSprite(width / 2, height / 2, 0, 0);
    doritos.addImage(doritosImage);
    doritos.rotationSpeed = 4.0;
    mlglogo = createSprite(80, 80, 0, 0);
    mlglogo.addImage(mlglogoImage);
    mlglogo.rotationSpeed = 4.0;
    lunette = createSprite(width / 2, height / 2, 0, 0);
    lunette.addImage(lunetteImage);
    lunette.rotationSpeed = 4.0;
    fog = createSprite(width / 2, height / 2, 0, 0);
    fog.addImage(fogGif);
    hit = createSprite(width / 2, height / 2, 0, 0);
    hit.addImage(hitImage);
    hit.rotationSpeed = 4.0;
    join = createSprite(width / 2, height / 2, 0, 0);
    join.addImage(joinImage);
    join.rotationSpeed = 4.0;
    faze = createSprite(width / 2, height / 2, 0, 0);
    faze.addImage(fazeImage);
    faze.rotationSpeed = 4.0;
    obey = createSprite(width / 2, height / 2, 0, 0);
    obey.addImage(obeyImage);
    obey.rotationSpeed = 4.0;
    cana = createSprite(width / 2, height / 2, 0, 0);
    cana.addImage(canaImage);
    cana.rotationSpeed = 4.0;
    // Save that we won the game so draw() knows to call makemlg() instead of
    // the regular game logic
    isGameWin = true;
}

var cqke = 3

function makemlg() {
    background(backgroundMLGImage);
    textAlign(CENTER);
    fill("#FF0000");
    textSize(50);
    textFont(specialfont);
    text("YOU HAVE WIN!", width / 2, height / 2);
    if (playing == false) {
        MLGSONGCUT.play();
        playing = true;
    }
    if (playin == false) {
        SNIPER.play();
        playing = true;

    }

    // illuminati.x = illuminati.x - 1;

    // illuminati.draw();

    // doritos = createSprite(width / 2, height / 2, 0, 0);
    // doritos.addImage(doritosImage);
    // doritos.draw();

    // mlglogo = createSprite(80, 80, 0, 0);
    // mlglogo.addImage(mlglogoImage);
    // mlglogo.draw();

    // lunette = createSprite(width / 2, height / 2, 0, 0);
    // lunette.addImage(lunetteImage);
    // lunette.draw();

    // illuminati.position.y = illuminati.position.y + 1;
    // illuminati.position.x = illuminati.position.x + 0.5;
    // doritos.position.y = doritos.position.y + 0.5;
    // mlglogo.position.y = mlglogo.position.y + 0.5;
    // mlglogo.position.x = mlglogo.position.x + 0.5;
    // lunette.position.x = lunette.position.x + 1;
    // fog.position.x = fog.position.x + 2;
    // fog.position.y= fog.position.y + 1;
    // hit.position.y = hit.position.y + 0.5;
    // hit.position.x = hit.position.x + -1;
    // join.position.y = join.position.y + 0.5;
    // join.position.x = join.position.x + 1;
    // faze.position.y = faze.position.y + -0.5;
    // faze.position.x = faze.position.x + 2;
    // cana.position.y = cana.position.y + -0.5;
    // cana.position.x = cana.position.x + 1;
    // obey.position.x = obey.position.x + -2;
    // obey.position.y = obey.position.y + -0.5;
    bounce(illuminati, 2, 3);
    bounce(doritos, 3, 2);
    bounce(mlglogo, 2, 2);
    bounce(lunette, -2, 3);
    bounce(cana, -1, 3);
    bounce(obey, 1, 4);
    bounce(faze, -2, 5);
    bounce(join, 1, 3);
    bounce(hit, -2, 2);

    drawSprites()

}

function bounce(kh, x, y) {
    
     if (kh.velocity.x == 0) {
        kh.velocity.x = x;
    }

    if (kh.position.x > width || kh.position.x < 0) {
        kh.velocity.x *= -1;

    }
        if (kh.velocity.y == 0) {
        kh.velocity.y = y;
    }

    if (kh.position.y > height || kh.position.y < 0) {
        kh.velocity.y *= -1;

    }


}