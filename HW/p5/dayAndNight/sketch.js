var sun;
var moon;
var Width=600;
var Height=400;

var r = 255;
var g = 255;
var b = 255;

var cX = 50;
var cY = 50;
var cEdge = 20;

var rectX = 70;
var rectY = 70;
var rectSize = 100;


function preload(){
//a funcion goes before the project starts
//load the image into the memory
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');

}


function setup() {
  // put setup code here
  createCanvas(Width,Height);
}

function draw() {
    frameRate(15);
    //make a slow party


  // interface
  background(r,g,b);
  fill (r,g,b);
  console.log("mouseX:" + mouseX + "mouseY" + mouseY);

  textSize(18);
  text("Move over each area to reveal a surprise!!",20,20);

  line(Width/2,0,Width/2,Height);
  text("Day",20,360);
  text("Night",300,360);



//📌interaction


/*  if (true){execute this code} */

//  if (mouseX > Width/2){
//  ⚠️console is to debug
//  console.log("Night Side");
//  image(moon,mouseX,mouseY); }

//  if (mouseX < Width/2){
  //  console.log("Day Side");
//    image(sun,mouseX, mouseY);  }

  if (mouseX > 0 && mouseX < width/2){
  // && means the first and the second condition has to be true

    console.log("Day side");
  image(sun,100,100);
};

  if(mouseX >= Width/2 && mouseX < Width){
    console.log("Night Side");
    image(moon,100,100);
  }

ellipse(cX,cY,cEdge,cEdge)
var cDist = dist(cX,cY,mouseX,mouseY);
//dist is the distance between two dots;
console.log("cDist:" + cDist);

   if (cDist < 10){
     r=255;
     g=0;
     b=0;
   }
   else {
    r=255;
    g=255;
    b=255;
}




  rect(rectX,rectY, rectSize, rectSize);

  // if (mouseX > rectX && mouseX < rectX + rectSize);
  //   if (mouseY > rectY && mouseY < rectY + rectSize);
  //     console.log("In here");


// the code below is to define the location of mouse inside the rec.
  if (mouseX > rectX && mouseX< rectX + rectSize && mouseY>rectY && mouseY< rectY + rectSize)
  {
    r=random(256);
    g=random(127,256);
    b=random(256);
  };






}
