const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.constraint;

var engine, world;

var ground;
var divisionHeight = 300;
var divisionBase;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 780, 480, 40);
  divisionBase = new Divisions(240, 770, 480, 20);

  for (k = 0; k <= width; k += 80) {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }
  

  for (var j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 75));
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 15; j <= width - 10; j += 50) {
    plinkos.push(new Plinko(j, 175));
    plinkos.push(new Plinko(j, 375))
  }
}

function draw() {
  background("black");
  Engine.update(engine);
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
    
  }  
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}
  if (frameCount % 60 === 0) {
      particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
    }
 
  ground.display(); 
  divisionBase.display();
}