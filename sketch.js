//add the matter.js  like these shortnames is called as name spacing 
const Engine=Matter.Engine;     //world will by the engine
const World=Matter.World;     //add the bird to world
const Bodies=Matter.Bodies;   //bird

var object;
var ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create()   //creating engine
  world=engine.world;     //adding world to engine
  
  var options={
    restitution:0.3,
  }
  object=Bodies.rectangle(250,250,50,50,options);   //object is the body
  World.add(world,object);    //adding the object body to the world

  var options1={
    isStatic:true,
  }
  ground= Bodies.rectangle(200,380,800,30,options1);
  World.add(world,ground);
  console.log(object);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  rect(object.position.x,object.position.y,50,50);

  rect(ground.position.x,ground.position.y, 600,20);
}