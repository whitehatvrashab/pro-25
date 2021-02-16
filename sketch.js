const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload() {
	
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 690);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper=new Paper(100,630,10);
 
 
 ground=new Ground(400,650,800,10)

 
 dustbin1=new Dustbin(600,585,10,100);
 dustbin2=new Dustbin(655,640,100,10);
 dustbin3=new Dustbin(710,585,10,100);
}


function draw() {
 
  background(255);
  
  Engine.update(engine);

 
 paper.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
image(dustbinImg,590,500,140,150);
 

}


function keyPressed() {
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
    }
}