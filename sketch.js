var rec1,rec2;

function setup() {
createCanvas(1200,800)
  rec1=createSprite(600,400,50,80)
  rec1.shapeColor="green"
  rec2=createSprite(400,200,80,30)
  rec2.shapeColor="blue"
  
}
function draw() {
  background(255,255,255);  
  rec2.x=World.mouseX
  rec2.y=World.mouseY
  if (rec1.x-rec2.x<rec1.width/2+rec2.width/2&&rec2.x-rec1.x<rec1.width/2+rec2.width/2&&
  rec1.y-rec2.y<rec1.height/2+rec2.height/2&&rec2.y-rec1.y<rec1.height/2+rec2.height/2)
  {
rec1.shapeColor="red"
rec2.shapeColor="red"


  }
  else {
    rec1.shapeColor="green"
    rec2.shapeColor="blue"
  }
  drawSprites();
}