const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObj;
var box1,box2,box3,box4;
var chain1;
var poly1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 gorundObj = new Ground(0,400,500,50);
 box1 = new Box1(250,500,10,50);
 box2 = new Box2(350,500,10,50);
 box3 = new Box3(450,500,10,50);
 box4 = new Box4(550,500,10,50);
 poly1= new Ball(100,200,20);

 
 chain1 = new Chain(poly1.body,{x:550,y:110});



 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  GroundObj.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  chain1.display();
  poly1.display();
  
  
  drawSprites();
 
}
function mouseDragged(){ 
  Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
  } 
  function mouseReleased(){
    chain1.fly();
     } 



