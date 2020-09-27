const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
 world = engine.world;

 ground = new Ground(600,height,1200,20);
 divisions= new Division(400,400,1200,40);

 pinko= new Plinko(200,200,10);
 pinko.velocityX=3;
 pinko.velocityY=2;
 
 pinko1=new Plinko(250,200,10);
 pinko2=new Plinko(300,200,10);

 box1=new Box(170,380,1300,10);
 box2=new Box(200,320,10,200);
 box3=new Box(300,320,10,200);
 box4=new Box(400,320,10,200);
 box5=new Box(500,320,10,200);
 
}

function draw() {
  background(255,255,255);  

  ground.display();
  pinko.display();
  pinko1.display();
  pinko2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  
  drawSprites();
}