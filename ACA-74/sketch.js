const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground,striker,ball1,ball2;
var plank1,plank2,log1,log2,log3,log4;

function setup(){
    canvas = createCanvas(1600,900);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground1 = new Ground(1100,590,width/3.5,20);
    ground2 = new Ground(650,300,width/3.5,20);

    ball1 = new Ball(600,120,35);
    ball2 = new Ball(700,160,35);

    MiniLog1 = new MiniLog(1100, 400);
    MiniLog2 = new MiniLog(650, 220);
    MiniLog3 = new MiniLog(650,80);

    log1 = new Log(1100, 300, 300, PI/2);
    log2 =  new Log(650,180,300, PI/2);
    log3 = new Log(650,100,300, PI/2);
    log4 =new Log(1050,250,125,PI);
    log5 =new Log(1150,250,125,PI);
    log6 = new Log(1100, 220, 300, PI/2);
    log7= new Log(1050, 210, 150, PI/7);
    log8 =new Log(1150, 210, 150, -PI/7);

    square1 = new Square(1100,260);
    square2 =new Square(1100,240);    
    square3 = new Square(1100,210);

    mouse = new Mouse(100,100);
}

function draw(){
    background("#C0FEFC");
    Engine.update(engine);
    ground1.display();
    ground2.display();

    MiniLog1.display();
    MiniLog2.display();
    MiniLog3.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();

    ball1.display();
    ball2.display();

    square1.display();
    square2.display();
    square3.display();

    mouse.display();
}

