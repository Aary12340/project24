
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2,

}

function preload()
{
dustbin1=createSprite(width/2,height10,width200);
dustbin2=createSprite(height/2,height100,width20);
dustbin3=createSprite(height/2,height100,width20);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
if(keycode===UP_ARROW){
Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}


}


