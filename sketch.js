var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bird, person, car, score, ground, carsGroup, birdsGroup;


var birdImg, personImg, carImg, backgroundImg;

function preload(){
  birdImg = loadImage("bird1.png");
  carImg = loadImage("car.png");
  personImg = loadImage("person1.png","person2.png");
  backgroundImg = loadImage("background.jpg")
}
function setup(){
  createCanvas(600,600);
  person = createSprite(50,500,20, 50)
  person.scale =0.3
  person.addImage(personImg);
  ground = createSprite(300,510,600,10)
  ground.visible = false;
  
 carsGroup = new Group();
 birdsGroup = new Group();
}

function draw(){
background(backgroundImg);
if( gameState === PLAY){
  spawnCars();
  spawnBirds();
  if(carsGroup.isTouching(person)){
    gameState = END
    }
}else if(gameState === END){
  birdsGroup.setVelocityXEach(0);
  carsGroup.setVelocityXEach(0);
  
}



drawSprites();

}

function spawnCars(){
  if(frameCount% 120 === 0){
    var car = createSprite(600, 550, 10, 40);
    car.velocityX = -3;
    car.addImage(carImg);
    car.scale = 0.1
    carsGroup.add(car)
  }
  
}


function spawnBirds(){
  if(frameCount% 200 === 0){
    var bird = createSprite(600, 120, 40, 10);
    bird.y = Math.round(random(80,120));
    bird.addImage(birdImg);
    bird.velocityX = -3;
    bird.scale = 0.1;
    birdsGroup.add(bird);
  }

}