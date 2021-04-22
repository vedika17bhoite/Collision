var fixedRect, movingRect;
var obj3 , obj4 ; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
   movingRect.velocityX = 2 
obj3 = createSprite(400,500,40,60)
obj4 = createSprite(600,500,60,80)

obj3.velocityX = 1
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 if(collision(obj3, obj4)){
   obj3.shapeColor= 'blue'
   obj4.shapeColor="green"
   
   obj3.velocityX= 0 
   text ("STOP!",400,400)

  }

bounceoff(movingRect , fixedRect)

  drawSprites();
}

