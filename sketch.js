
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var eng , wld;
var ground;
var basket1;
var paper;

function setup() {
  createCanvas(1200,800);
  eng=Engine.create();
  wld=eng.world;

  ground= new Ground(600,700,1200,30);
  basket1= new basket(1100,600);
  paper= new Paper(200,40,30);

  
}

function draw() {
  Engine.update(eng);
  background("white");  
  
  ground.display();
  basket1.display();
  paper.display();

  drawSprites();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    
   Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});
     
   }
 }
 