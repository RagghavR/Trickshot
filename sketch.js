
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var floor,wall1,wall2,wall3,wall4,wall5

function preload()
{
	
}

function setup() {
	createCanvas(800,300);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	ellipseMode(RADIUS);
	//Create the Bodies Here.

	Engine.run(engine);

	var rest = {
		restitution: 0.5
		, isStatic :false
	}

	ball = Bodies.circle(100,200,20,rest)
	floor = new ground(400,255,800,10);
	wall1 = new ground(500,225,10,70);
	wall2 = new ground(600,210,10,100);
	wall3 = new ground(400,-5,800,10);
	wall4 = new ground(805,150,10,300);
	wall5 = new ground(-5,150,10,300);
	World.add(world,ball)
	button = createImg("button.png")
	button.position(10,10)
	button.size(45,45)
	button.mouseClicked(function(){
		Matter.Body.applyForce(ball,ball.position,{x:0.04,y:-0.05})
	})
	reload = createImg("reload.png")
	reload.position(60,10)
	reload.size(45,45)
	reload.mouseClicked(function(){
		location.reload()
	})
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("black");
  ellipse(ball.position.x,ball.position.y,20)
  floor.show()
  wall1.show()
  wall2.show()
  wall3.show()
  wall4.show()
  wall5.show()
  drawSprites();
  Engine.update(engine);
 
}



