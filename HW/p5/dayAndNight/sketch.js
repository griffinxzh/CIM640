var sun;
var moon;
var Width=400;
var Height=400;

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
  // interface
  background(255);
  textSize(18);
  text("Move over each area to reveal a surprise!!",20,20);

  line(Width/2,0,Width/2,Height);
  text("Day",20,360);
  text("Night",300,360);

//interaction


/*  if (true){execute this code}

*/

  if (mouseX > Width/2){
//  ⚠️⚠️console is to debug
//  console.log("Night Side");
  image(moon,mouseX,mouseY);

  }

  if (mouseX < Width/2){
  //  console.log("Day Side");
    image(sun,mouseX, mouseY);
  }

}
