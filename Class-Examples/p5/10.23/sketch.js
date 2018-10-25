var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";


function setup() {

  createCanvas(400,400);
}

function draw() {
  frameRate(15);
  background(255);
  // display(random(width),random(height),random(255),random(0,100));
  display(posX,posY,colors,rectSize);

  var box1 = check(mouseX,mouseY,posX, posY,rectSize);


  display(posX+100,posY+100,"red",rectSize);
  var box2 = check(mouseX,mouseY,posX+100, posY+100,rectSize);

  if (box1 == true){
    background("green");
  }
  if (box2 == true){
    background("red");
  }




}

//how the buttons look like
function display(tempX,tempY,tempC,tempS){ // x,y,color,size
  fill(tempC);
//  rect(posX,posY,rectSize,rectSize);
  rect(tempX,tempY,tempS,tempS);

}



//❗️create one hitzone rule to display many times
function check(mX, mY, locX, locY, tempRsize){//mouseX, ~Y, locationX, ~Y, tempRsize
  //the sequence of values matter
  if(mX > locX && mX < locX + tempRsize && mY > locY && mY < locY + tempRsize){
    console.log("in box" );
    return true;
  }else{
    return false;
  }
  //you can return anything: boolean, number, etc..

}
