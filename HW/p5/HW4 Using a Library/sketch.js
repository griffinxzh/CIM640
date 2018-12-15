var mic, vEllipse;
var vE_posX, vE_posY;
var ellipseNum;
// var roundNum;



var blossomArray = []; //posX, posY, radius, color

function setup(){

  createCanvas(1300,700);
  background(255);
  mic = new p5.AudioIn();
  mic.start();



}


function draw(){

  background(255);
  micLevel = mic.getLevel();//visualize
  // frameRate(10);

  vE_posX = micLevel*5000;
  vE_posY = micLevel*3000;
  vEllipse = new interfaces(vE_posX, vE_posY, 50, "red");//the "original ellipse" always exists

    fill(0);
    text("Make a sound.",500,200);
    textSize(30);

  //central ellipse
  fill(0);
  ellipse(200,200,micLevel*3000,micLevel*3000);



  //top left corner ellipse
  fill("blue");
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 50, 50);
  strokeWeight(0);

  //draw the original red ellipse
  vEllipse.display();

  ellipseNum = micLevel * 500;




}


class interfaces{
  constructor(tempX,tempY,tempR, tempC){ //"tempC: color" might not be useful
    this.x = tempX;
    this.y = tempY;
    this.radius = tempR;
    this.color = tempC;

  }


  display(){

    fill(this.color);
    ellipse(this.x, this.y, this.radius, this.radius);
  }


  }
