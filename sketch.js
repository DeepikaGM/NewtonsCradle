const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;

var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var bobDiameter = 40;
	roof=new Roof(300,200,200,30);
	bobObject1=new Bob(220,500,20);
	bobObject2=new Bob(260,500,20);
	bobObject3=new Bob(300,500,20);
	bobObject4=new Bob(340,500,20);
	bobObject5=new Bob(380,500,20);

	rope1=new rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2=new rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3=new rope(bobObject3.body,roof.body,0,0);
	rope4=new rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5=new rope(bobObject5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



