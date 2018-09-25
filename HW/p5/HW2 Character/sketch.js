var bodyColor = "#ffa910";
var leafColor = "#5a8e00";
var glassesColor = "black";
var bgColor = "#ffdede";
var a = 200;
var b = 180;
var bodyPostionX = 300;
var bodyPositionY = 200;



function setup() {
  // put setup code here
  createCanvas(600,400);
  background(bgColor);

}

function draw() {
  // put drawing code here
  strokeWeight(0);

  //body
  fill(bodyColor);
  ellipse(bodyPostionX, bodyPositionY, a, b);

  //leaf+stem
  fill(leafColor);
  rect(bodyPostionX, bodyPositionY - 150, 10, 70);
  arc(bodyPostionX+50,bodyPositionY-100,90,70,PI,TWO_PI);

  //glasses
  fill(glassesColor);
  arc(240,190,110,90,0, PI);
  arc(350,190,110,90,0, PI);

  //mouth
  fill("white");
  arc(300,250,60,40,0,PI);
  fill("black")
  rect(280,260,40,2);




}
