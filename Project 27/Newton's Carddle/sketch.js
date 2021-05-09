
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   bob1=new Bob(100,300,5)
   bob2=new Bob(108,300,5)
   bob3=new Bob(113,300,5)
   bob4=new Bob(118,300,5)
   bob5=new Bob(123,300,5)
   roof=new Ground(100,100,10,140)
   rope1=new Rope(bob1,roof,-bobDiameter*2,0)
   rope2=new Rope(bob2,roof,-bobDiameter*2,0)
   rope3=new Rope(bob3,roof,-bobDiameter*2,0)
   rope4=new Rope(bob4,roof,-bobDiameter*2,0)
   rope5=new Rope(bob5,roof,-bobDiameter*2,0)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



