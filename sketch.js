const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;

	//Create the Bodies Here.

	roof=new Ground(370,150,450,20);
	// roof2=new Ground(350,550,700,20);
	bobObject1=new Bob(500,420,30);
	bobObject2=new Bob(440,420,30);
	bobObject3=new Bob(380,420,30);
	bobObject4=new Bob(320,420,30);
	bobObject5=new Bob(260,420,30);

	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);

	
   


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
  //roof2.display();
  drawSprites();
 
}



