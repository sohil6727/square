 var fixedrect,movingrect

 
 function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200,200,50,80);
  fixedrect.shapecolor = "red";
  movingrect = createSprite(400,200,80,30);
  movingrect.shapecolor = "red";
}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mousex;
  movingrect.y = World.mousey;

  drawSprites();
}