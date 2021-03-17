const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const con=Matter.Constraint;

var block1, block2, block3, block4, block5;

function preload(){

}


function setup(){
    createCanvas(1200,800)

    engine = Engine.create();
	world = engine.world;

    //bottom row of first tower
    block1= new Block(330,235,30,40)

    Engine.run(engine)
    
}


function draw(){
    
    block1.display();
}