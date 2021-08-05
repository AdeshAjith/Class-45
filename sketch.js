var hero,heroImage
var invader

function preload(){
  earthimg = loadImage("images/Earth.png")
}

function setup() {

  createCanvas(1200,600);
  hero = new Hero(600,480)
  invader = new Invader(0,-400)

  earth = createSprite(600,590)
  earth.addImage(earthimg)

}

function draw() {
  background("black"); 
  hero.velocityX = 0
  hero.velocityY = 0

  if(keyDown(RIGHT_ARROW)){
    hero.velocityX = 5
  }

  if(keyDown(LEFT_ARROW)){
    hero.velocityX = -5
  }
  
  hero.display() 
  invader.display()
  drawSprites();
}