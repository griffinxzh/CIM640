var mic, vEllipse;
var vE_posX, vE_posY;
var ellipseNum;

var blossomArray = []; //posX, posY, radius, color
var bgArray = [];


var removeInterval = 10000;
var prevMillis = 0;

var setFade = false;


function preload(){
  bg1 = loadImage("assets/bg-01.jpg");
  bg2 = loadImage("assets/bg-02.jpg");
  bg3 = loadImage("assets/bg-03.jpg");
}

function setup(){

  var bgArray = [bg1, bg2, bg3];
  createCanvas(1300,700);
  // background(255);

  mic = new p5.AudioIn();
  mic.start();



}




function draw(){

  background(255);



  micLevel = mic.getLevel();//visualize
  frameRate(10); //❗️control the grow speed in every loop

  vE_posX = micLevel*5000;
  vE_posY = micLevel*3000;


  strokeWeight(0);

  ellipseNum = micLevel * 100;

//
if(setFade == false){
  for(var i = 0; i < ellipseNum; i++){
    image(bg1,0,0);
    blossomArray.push(new interfaces(random(width),random(height),random(micLevel*100, micLevel*300), millis()));
                                                                  //radius
  }
}



  for (var a = 0; a< blossomArray.length; a ++){
    if(setFade == true){
        blossomArray[a].fade = false;
    }
    blossomArray[a].display();

    if(blossomArray[a].destroy == true){
        blossomArray.shift();
    }

  }

  console.log(blossomArray.length);

  if(blossomArray.length == 0 && setFade == true){
    setFade = false;
    prevMillis = millis();
  }

//blossomArray =[];//❗️to remove it(accumulation) or not(real-time interaction)



var curMillis = millis();
var curTime = Math.floor(curMillis/1000);



  if(millis() - prevMillis >= removeInterval && setFade == false){
    for (var a = 0; a< blossomArray.length; a ++){
          blossomArray[a].fade = false;
          blossomArray[a].startTime = millis();
      }
      setFade = true;

  }

}


class interfaces{
  constructor(tempX,tempY,tempR, tempST){ //"tempC: color" might not be useful
    this.x = tempX;
    this.y = tempY;
    this.radius = tempR;
    //this.color = tempC;
    this.interval = 2000; //how long the process lasts
    this.startTime = tempST;
    this.fade = true;
    this.destroy = false;


  }


  display(){


        fill(255);//black

    var ellapsedTime = millis() - this.startTime;
    //fade in

    if(this.fade == true){
      if(ellapsedTime < this.interval){
        fill(0, 255 * ellapsedTime/ this.interval);
      }else{
        fill(0);
      }
    }else{
      // fade out
      if(ellapsedTime < this.interval){
        fill(0, 255 - (255 * ellapsedTime/ this.interval));
      }else{
        fill(255);
        this.destroy = true;
      }
    }

    ellipse(this.x, this.y, this.radius, this.radius);
    }
  }
