var bg,bgImg,bg1Img,bg2Img,bg3Img;
var logo, logoImg;
var gbutton, gbuttonImg,levelbutton,levelbuttonImg;
var player,playerImg1;
var START = 0;
var PLAY = 1;
var END = 2;
var LEVEL1=3,LEVEL1to2 = 4,LEVEL2=5;
var gameState = START;
var ground,rock,woodground;
var enemy,enemyImg1,enemyImg2,enemyImg3,enemyImg4,enemyGroup;
var reward1,reward2,reward3,reward4,reward5, rewardImg1,rewardImg2,rewards,rewardsImg;
var edges,wall1,wall2,wall3,wall4;
var killer1,killerImg1,killerImg2;
var dboard,dboardImg,sboard,sboardImg,scoreboard,scoreboardImg;
var score=0, dcount = 0, scount = 5;
var gameover,gameoverImg,gamewin,gamewinImg,restart,restartImg;
var unicorn, unicornImg1,unicornImg2,unicornImg3, bow, bowImg1,bowImg2;
var timer =0;
var level1win,level1winImg;



function preload(){
  bgImg = loadImage('bg.jpg')
  logoImg = loadImage('logo.png')
  gbuttonImg = loadImage('gbutton.png')
  bg1Img = loadImage('bg2.png')
  bg2Img = loadImage('bg8.png')
  bg3Img = loadImage('bg9.png')
  levelbuttonImg = loadImage('Level1.png')
  playerImg1 = loadImage('png/Idle1.png')
  enemyImg1 = loadImage('enemy1.gif')
  enemyImg2 = loadImage('enemy2.gif')
  enemyImg3 = loadImage('enemy3.gif')
  enemyImg4 = loadImage('enemy4.gif')
  rewardImg1 = loadImage('reward1.gif')
  rewardImg2 = loadImage('reward2.gif')
  killerImg1 = loadImage('killer.png')
  killerImg2 = loadImage('killer2.png')
  rewardsImg = loadImage('rewards.gif')
  dboardImg = loadImage('diamondboard.png');
  sboardImg = loadImage('starboard.png');
  scoreboardImg = loadImage('scoreboard.png');
  gameoverImg = loadImage('gameover.png');
  restartImg = loadImage('restart.png');
  gamewinImg = loadImage('gamewin.png'); 
  unicornImg1 = loadImage('standingunicorn.gif');
  bowImg1 = loadImage('bowleft.png');
  unicornImg2 = loadImage('unicorn.gif');
  bowImg2 = loadImage('bowright.png');
  unicornImg3 = loadImage('unicornwalking.gif');
  level1winImg = loadImage('level1win.png');


}

function setup(){
  createCanvas(windowWidth, windowHeight);

  logo = createSprite(width/2,height/2);
  logo.addImage(logoImg);
  logo.scale = 0.59

  gbutton = createSprite(width/2,height/2+180);
  gbutton.addImage(gbuttonImg);
  gbutton.scale = 0.3

  levelbutton = createSprite(width/2,80);
  levelbutton.addImage(levelbuttonImg);
  levelbutton.scale = 0.15

  player = createSprite(150,height/2-10);
  player.addImage(playerImg1);
  player.scale = 0.3

  ground = createSprite(width/2,height,width,10);
  ground.visible = false;

  woodground = createSprite(width/2-60,height-190,width/2,10);
  woodground.visible = false;

  bridgeground = createSprite(width/2-60,height-150,width/2,10);
  bridgeground.visible = false;

  rock = createSprite(150,height/2+10,100,10);
  rock.visible = false;

  enemyGroup = new Group();

  reward1 = createSprite(150,height-60);
  reward1.addImage(rewardImg2);
  reward1.scale = 0.2;

  reward2 = createSprite(width/2-100,height-80);
  reward2.addImage(rewardImg1);
  reward2.scale = 0.5;

  reward3 = createSprite(width-280,height/2+20);
  reward3.addImage(rewardImg1);
  reward3.scale = 0.5;

  reward4 = createSprite(width-120,height-50);
  reward4.addImage(rewardImg2);
  reward4.scale = 0.2;

  reward5 = createSprite(width/2-250,100);
  reward5.addImage(rewardsImg);
  reward5.scale = 0.2;

  edges = createEdgeSprites();

  wall1 = createSprite(width/2-350,75,10,250);
  wall3 = createSprite(width/2-150,75,10,250);
  wall2 = createSprite(width/2-250,220,210,10);
  wall4 = createSprite(width/2-250,10,200,10);
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;


  killer1 = createSprite(width/2-350,35,10,250);
  killer1.addImage(killerImg2);
  killer1.scale = 0.3;
  killer1.velocityY = 1;
  killer1.visible = false;

  killer2 = createSprite(width/2-150,135,10,250);
  killer2.addImage(killerImg1);
  killer2.scale = 0.3;
  killer2.velocityY = -1;
  killer2.visible = false;

  killer3 = createSprite(width/2-250,185,10,250);
  killer3.addImage(enemyImg4);
  killer3.scale = 0.1;
  killer3.velocityX = 1;
  killer3.visible = false;

  reward1.visible = false;
  reward2.visible = false;
  reward3.visible = false;
  reward4.visible = false;
  reward5.visible = false;

  dboard = createSprite(width-110,55,10,250);
  dboard.addImage(dboardImg);
  dboard.scale = 0.12;
  dboard.visible = false;

  reward2.debug = true;

  sboard = createSprite(width-310,55,10,250);
  sboard.addImage(sboardImg);
  sboard.scale = 0.12;
  sboard.visible = false;

  reward2.setCollider("circle",0,0,40);

  gameover = createSprite(width/2,height-230,10,250);
  gameover.addImage(gameoverImg);
  gameover.scale = 0.27;
  gameover.visible = false;

  restart = createSprite(width/2+5,height-145,10,250);
  restart.addImage(restartImg);
  restart.scale = 0.07;
  restart.visible = false;

  gamewin = createSprite(width/2,130,10,250);
  gamewin.addImage(gamewinImg);
  gamewin.scale = 0.3;
  gamewin.visible = false;

  unicorn = createSprite(width/2,height-200,10,250);
  unicorn.addImage(unicornImg1);
  unicorn.scale = 1.6;
  unicorn.visible = false;

  bow = createSprite(width/2-40,height-220,10,250);
  bow.addImage(bowImg1);
  bow.scale = 0.3;
  bow.visible = false;

  level1win = createSprite(width/2,height/2,10,250);
  level1win.addImage(level1winImg);
  level1win.scale = 0.35;
  level1win.visible =false;

}

function draw() {
  background(bgImg);
  console.log(gameState);

  if(gameState === START){
    logo.visible = true;
    gbutton.visible = true;
    levelbutton.visible = false;
    player.visible = false;

    if(mousePressedOver(gbutton))
    {
      gameState = LEVEL1;
    }
  }
  else if(gameState === LEVEL1)
  {
    background(bg1Img);
    logo.visible = false;
    gbutton.visible = false;
    levelbutton.visible = true;
    player.visible = true;
    killer1.visible = true;
    killer2.visible = true;
    killer3.visible = true;
    reward1.visible = true;
    reward2.visible = true;
    reward3.visible = true;
    reward4.visible = true;
    reward5.visible = true;
    sboard.visible = true;
    dboard.visible = true;


   

    spawnenemy();

    


    player.collide(rock);
    player.collide(woodground);

    if(player.isTouching(reward2))
    {
      reward2.velocityX = 10;
      reward2.velocityY = -9;
    }

    if(reward2.isTouching(dboard))
    {
      reward2.destroy();
      dcount++;
    }

    if(player.isTouching(enemyGroup))
    {
      enemyGroup.destroyEach();
     gameover.visible = true;
     restart.visible = true;

    }

    if(player.isTouching(reward5))
    {
      enemyGroup.destroyEach();
     gamewin.visible = true;

    }

    if(mousePressedOver(gamewin))
    {
      enemyGroup.destroyEach();
     gamewin.visible = false;
     restart.visible = false;
     gameState = PLAY;

    }



  }

  else if(gameState===PLAY)
  {
    background(bg2Img);
    levelbutton.visible = false;
    killer1.visible = false;
    killer2.visible = false;
    killer3.visible = false;
    reward1.visible = false;
    reward2.visible = false;
    reward3.visible = false;
    reward4.visible = false;
    reward5.visible = false;
    dboard.visible = false;
    sboard.visible = false;
    unicorn.visible = true;
    bow.visible = true;
    timer++;

    if(timer >=50)
    {
      unicorn.addImage(unicornImg2);
      bow.y = height - 210;
    }

    if(player.isTouching(bow))
    {
      bow.addImage(bowImg2);
      unicorn.addImage(unicornImg3);
      unicorn.velocityX = 3;
      bow.x = player.x;
      bow.y = player.y;
      level1win.visible = true;
    }
    if(mousePressedOver(level1win))
    {
     level1win.visible = false;
    // gameState = LEVEL2;

    }
    player.collide(bridgeground);

  }
 
  if(keyDown("right_arrow"))
  {
    player.x = player.x + 5;
  }

  if(keyDown("left_arrow"))
  {
    player.x = player.x - 5;
  }

  if(keyDown("space"))
  {
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY + 1;

killer1.bounceOff(wall2);
killer1.bounceOff(wall4);
killer2.bounceOff(wall2);
killer2.bounceOff(wall4);
killer3.bounceOff(wall1);
killer3.bounceOff(wall3);
player.collide(ground);

  drawSprites();

  if(gameState===LEVEL1)
  {
  textSize(32);
  fill("yellow");
  textFont('Georgia');
  text(scount,width-320,65);
  text(dcount,width-120,65);
  }

}

function spawnenemy()
{
  if(frameCount%100===0)
  {
    enemy = createSprite(width+20,200);
    enemy.velocityX = -3;
    var rand = Math.round(random(1,4));
    switch(rand)
    {
      case 1: enemy.addImage(enemyImg1);
      enemy.y = Math.round(random(height/2,200));
      enemy.scale = 0.05;
      break;

      case 2: enemy.addImage(enemyImg2);
      enemy.y = Math.round(random(height/2,200));
      enemy.scale = 0.1;
      break;

      case 3: enemy.addImage(enemyImg3);
      enemy.y = Math.round(random(height/2+150,height-20));
      enemy.scale = 0.5;
      break;

      case 4: enemy.addImage(enemyImg4);
      enemy.y = Math.round(random(height/2+150,height-20));
      enemy.scale = 0.1;
      break;

      default: break;

    }
    enemyGroup.add(enemy);
  }
}