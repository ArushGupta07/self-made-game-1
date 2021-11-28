var bg, bg_img;
var play_btn, play_img,rules,rules_img;
var gameState = "start";
var player, player_animation;
var ground;
var bad_obstacle, bad_group, bad_img1, bad_img2, bad_img3;

function preload(){
    bg_img = loadImage("images/bg.jpeg");
    play_img = loadImage("images/play.png");
    rules_img = loadImage("images/rules.png");

    player_animation = loadImage("images/boy.png");

    bad_img1 = loadImage("images/banana.png")
    bad_img2 = loadImage("images/waterGarbage.png")
    bad_img3 = loadImage("images/trashcan.png")
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

    player = createSprite(250,500,50,50);
    player.addImage(player_animation);
    player.scale = 0.2;

    ground = createSprite(400, 625, 1200, 20);
    ground.visible = false;

    bad_group = createGroup()
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

        bg.velocityX = -7;

        if(bg.x < 0){
            bg.x = 800;
        }

        if(keyDown("space") && player.y >= 450 ){
            player.velocityY += -2 
        }
        player.velocityY += 0.5

        spawn_bad_obstacle()
    }

    if(gameState === "end"){
        play_btn.visible = false;
        rules.visible = false;
    }

    player.collide(ground);
    
    drawSprites();
}

function spawn_bad_obstacle(){
    if(frameCount % 130 === 0){
        bad_obstacle = createSprite(1200, 520, 30, 30);
        bad_obstacle.velocityX = -7;
        bad_obstacle.lifetime = 172;

        var rand = Math.round(random(1,3))

        switch(rand){
            case 1: bad_obstacle.addImage(bad_img1);
                    bad_obstacle.scale = 0.8; 
            break;
            case 2: bad_obstacle.addImage(bad_img2);
                    bad_obstacle.scale  = 0.3;
            break;
            case 3: bad_obstacle.addImage(bad_img3);
                    bad_obstacle.scale = 0.5;
            break;
            default: break;
        }
        bad_group.add(bad_obstacle);
    }
}

