const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

   ground = new Ground(300,390,600,15)

   box1 = new Box(200,300,50,50);
   box2 = new Box(240,100,50,100);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
}