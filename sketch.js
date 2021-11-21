var bg, bg_img;
var play_btn, play_img,rules,rules_img;
var gameState = "start";
var player, player_animation;

function preload(){
    bg_img = loadImage("images/bg.jpeg");
    play_img = loadImage("images/play.png");
    rules_img = loadImage("images/rules.png");

    player_animation = loadAnimation("player.gif");
}

function setup(){
    createCanvas(1200,800);

    bg = createSprite(600,400,1200,800);
    bg.addImage(bg_img);
    bg.scale = 1.3;

    play_btn = createSprite(600,625,50,20);
    play_btn.addImage(play_img);
    play_btn.scale = 1.2;

    rules = createSprite(1090,100,50,20);
    rules.addImage(rules_img);
    rules.scale = 0.9;

    player = createSprite(600,400,50,50);
    player.addAnimation(player_animation);
}

function draw(){
    background("blue");

    if(gameState === "start"){
        play_btn.visible = true;
        rules.visible = true;
        if(mousePressedOver(play_btn)){
            gameState = "play";
        }
    }

    if(gameState === "play"){
        play_btn.visible = false;
        rules.visible = false;

        bg.velocityX = -4;

        if(bg.x < 0){
            bg.x = 600;
        }
    }

    if(gameState === "end"){
        play_btn.visible = false;
        rules.visible = false;
    }

    drawSprites();
}