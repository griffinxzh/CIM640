function preload(){
  //remember to preload images before insert them
 bg1 = loadImage ('assets/bg1.png');
 bg2 = loadImage ('assets/bg2.png');
 orange1 = loadImage ('assets/orange1.png');
}

var r=50;
var x=-r;
var canvasWidth=600;
var canvasHeight=400;
var bgColor = "pink";
var bgColor2= "blue";
var startStop = false;

function setup() {
  // put setup code here
  createCanvas(canvasWidth,canvasHeight);
  background(bgColor);
}

function draw() {
  // put drawing code here
  createCanvas(canvasWidth,canvasHeight);
  background(bgColor);
  image(bg1，300，200)；
  image(orange1,0,200);


  if(startStop == false){
    if (x<600+r){x+=5};
    if (x>=600+r){x=-r};
  }


  if (mouseY > canvasHeight/2){
    console.log(bgColor);
    background(bg1);
  };

  if (mouseY < canvasHeight/2){
    console.log(bgColor2);
    background(bg2);
  };
  ellipse(x,400-mouseY,r,r);
};

function mousePressed(){
  //if(x>-r){x=0;}
  console.log("flipflop: " + startStop);
  if(startStop == false){
    startStop = true;
  }else{
    startStop = false;
  }


}
