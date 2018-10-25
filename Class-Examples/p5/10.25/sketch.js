var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";

var button1, button2; //create an empty var

var buttonArray = [];




function setup() {
  createCanvas(400,400);
  button1 = new interfaces(100,200,50,"red","Red Button"); //create a new button
  button2 = new interfaces(200,200,50,"green","Green Button");


  for(var i = 0; i <10; i++){
    var c = color(random(255),random(255),random(255));
    buttonArray[i] = new interfaces(random(width),random(height),50,c,i);
  }

}

function draw() {
  background(255);


  button1.display();
  if(button1.check(mouseX,mouseY)){
    console.log(button1.name);
  }


  button2.display();
  if(button2.check(mouseX,mouseY)){
    console.log(button2.name);
  }

  for( var i =0; i < buttonArray.length; i ++){
    buttonArray[i].display();
    if(buttonArray[i].check(mouseX,mouseY)){
      console.log(buttonArray[i].name);
      background(buttonArray[i].color);
    }
  }


}






//create an interface class
class interfaces{
  //constructor: characteristics for your object
  constructor(tempX, tempY, tempS, tempC, tempName){// not limit of num of premeters
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false; //
    // what inside the class won't affect what's outside the class
  }

  display(){//to draw 2 buttons




    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    text(this.name, this.x, this.y-10);

    if(this.overlay == true){
      fill(127,127);
      rect(this.x, this.y, this.size, this.size);
    }

  }

  check(mX,mY){
    if(mX > this.x && mX< this.x + this.size && mY >this.y && mY < this.y + this.size){
      this.overlay = true ;
      return true;
    }else {
      this.overlay = false ;
      return false;
    }
  }



}
