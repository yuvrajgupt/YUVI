
var fixedRect, movingRect;
var gameObject1, gameObject2;
var car , wall;
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
 car=createSprite(300,300,30,30);
 car.shapeColor="green";
 car.velocityX=8
 wall=createSprite(800,300,80,80);
 wall.shapeColor="blue";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching()){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 
collide(car,wall)
//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}
function collide(Object1,Object2){
  if (Object1.x- Object2.x < Object2.width/2 + Object1.width/2
    && Object2.x - Object1.x < Object2.width/2 + Object1.width/2
    && Object1.y - Object2.y < Object2.height/2 + Object1.height/2
    && Object2.y - Object2.y < Object2.height/2 + Object1.height/2) {
Object1.setVelocity(0,0)}



}





























