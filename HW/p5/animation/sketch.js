var xPos = 0;
var yPos = 0;
var ballSize = 20;

var speed = 5;

//to change the Y direction when hit the border
var trigger = false;

/*the second trigger is to make it like a ball bouncing in the box
and change the X direction*/
var trigger2 = false;

function setup() {
  // put setup code here
  createCanvas(700,500);
  xPos = width/2;


}

function draw() {
  // put drawing code here
  background("pink");
  ellipse(xPos, yPos, ballSize, ballSize);


  if (trigger == false){
    yPos+=speed ;
    // yPos = yPos + speed;

  }
  else{
    yPos= yPos - speed;

  }

if(trigger2 == false){
  xPos+=speed;
}else{
  xPos-=speed;

}



  if(yPos > height ){
    yPos=height;
     trigger= true;
  }

  if (yPos<0 ){
    yPos=0;

    trigger = false;
  }

  if (xPos > width){
    xPos = width;
    trigger2= true;
  }

  if (xPos < 0){
    xPos = 0;
    trigger2 = false;
  }


  //
  // if(yPos > height && xPos > width){
  //   yPos=height;
  //   xPos = width;
  //    trigger= true;
  // }
  //
  // if (yPos<0 && xPos<0){
  //   yPos=0;
  //   xPos = 0;
  //   trigger = false;
  // }


}


//end of code
