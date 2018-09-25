var sun;
var moon;


var r = 255;
var g = 255;
var b = 255;

var cX = 50;
var cY = 50;
var cEdge = 20;

var rectX = 70;
var rectY = 70;
var rectSize = 100;


var sunShow = false;
var sunButton;

function preload(){
//a funcion goes before the project starts
//load the image into the memory
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');

}


function setup() {
  // put setup code here
  createCanvas(600,400);
  // create a clone button attached on the sun pic
  sunButton = creatButton("Press to show/hide sun");
  sunButton.position(500,100);
  sunButton.mousePressed(function(){

    if(sunShow == false){
      sunShow = ture ;
    }else{
      sunShow = false;
    }

  });

}

function draw() {
  //  createCanvas(width,height);
    background(255);
    fill(r,g,b);
    rect(rectX,rectY,rectSize,rectSize);
    //❗️to set the center of the image as the "anchor point"
    imageMode(CENTER);

    image(sun,cX,cY,sun.width/4,sun.height/4);
    image(sun,300,200);
  }



  function mousePressed(){
    if (mouseX > rectX && mouseX < rectX+rectSize && mouseY > rectY && mouseY < rectY+ rectSize ){
      r = random (0,255);
    g = random (0,255);
    b = random (0,255);}

    if (sunShow == true){
        image(sun, 300,200);
    }





  var sunDist = dist(mouseX,mouseY,cX,cY);
  console.log("sun Dist"+ sunDist);


  //single equal sets, double equals compare

  if (sunDist<40){
    //show/hide the image
    //never put "=" in a "if" statement
    if(sunShow == false){
        sunShow = true;
    } else {
      sunShow = false;
    }
    console.log=("sunShow" + sunShow);
  }
}
