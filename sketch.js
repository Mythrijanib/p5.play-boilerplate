//we will create our own algorithm for istouching that is if one rectangle is touchiing 
//the other rectangle then both the rectangle color should change
//algorithm is step by step process
//create one fixedrect and movingrect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200,50, 100);   //frw/2=80/2=40
  fixedRect.shapeColor="red";
  movingRect=createSprite(600, 200, 100, 50);   //movingrectwidth/2=80/2=40
  movingRect.shapeColor="red";                 //fixedrectwidth/2+movingrectwidth/2=40+40=80
}

function draw() {
  background("yellow"); 
  console.log(movingRect.x-fixedRect.x);
  movingRect.x=mouseX;  //5-3=2      3-5=-2
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
     fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
     movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
     fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green"; 
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  drawSprites();
}