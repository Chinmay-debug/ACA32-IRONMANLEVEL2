0
var stoneGroup, bg, backgroundImg , ironImg , iron , ground ,stoneImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg = loadImage("images/iron.png");
  stoneImg=loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale =3;

  iron = createSprite(200,505,20,50);
  iron.addImage(ironmanImg);
  iron.scale=0.3;
  iron.debug=true;
 

  stoneGroup= new Group ();

  ground = createSprite(500,585,1000,10 );
  ground.visible = false;

 
}

function draw() {
  bg.velocityY = 4;
  if(bg.y > 600){
    bg.y = 300;
  } 

  if (bg.y > 600){
    bg.y=bg.width/4;
  }
  if(iron.y<200){
    iron.y=200;
  }




if(keyDown("up")){
  iron.y=iron.y-16;
}

if(keyDown("down")){
  iron.y=iron.y+3;
}

if(keyDown("left")){
  iron.x=iron.x-3;
}

if(keyDown("right")){
  iron.x=iron.x+3;
}

generateStones();
for(var i=0; i<(stoneGroup).length;i++){
  var temp = (stoneGroup).get(i);

  if (temp.isTouching(iron)){
    iron.collide(temp);
  }
}

iron.velocityY = iron.velocityY+0.5;
iron.collide(ground);
    
    drawSprites();
   
}

function generateStones(){
  if(frameCount%30===0) {
    var stone = createSprite(500,120,40,10);
    stone.x = random(50,900);
    stone.y = random(50,600);
    stone.addImage(stoneImg);
    stone.scale=0.5;
    stone.velocityY=-3;

    stone.lifetime=250;
    stoneGroup.add(stone)
  }
}