var fixrect, movrect;


function setup() {
  createCanvas(400,400);
  
fixrect = createSprite(350,200,50,80);
fixrect.shapeColor =  "green";

movrect = createSprite(100,200,80,25);
movrect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movrect.x = World.mouseX;
  movrect.y = World.mouseY;

  if(movrect.x-fixrect.x<fixrect.width/2+movrect.width/2 && fixrect.x-movrect.x<fixrect.width/2+movrect.width/2 && 
    movrect.y-fixrect.y<movrect.height/2+fixrect.height/2 && fixrect.y-movrect.y<fixrect.height/2+movrect.height/2) {

    fixrect.shapeColor = "red";
    movrect.shapeColor = "red";
  } else {
    fixrect.shapeColor = "green";
    movrect.shapeColor = "green";
  }
  

  drawSprites();
}