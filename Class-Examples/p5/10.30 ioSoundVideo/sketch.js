var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";

var button1, button2;

var buttonArray = [];

function preload(){
  soundFile = loadSound ('assets/CowMoo.mp3');
  vid = createVideo('assets/cow.mp4'); //create a html video tag in HTML document

}




function setup() {
  // put setup code here
  createCanvas(400,400);
<<<<<<< HEAD
  button1 = new interfac(100,200,50,"red", "Red Button");
  /*事实证明"interface"⬆️不是预设syntax，故意错拼成interfac也一样能用，只要下面的class也写成interfac即可*/
  button2 = new interfac(200,200, 50, "green", "Green Button");

  for(var i =0; i < 10; i++){
    var c = color(random(255),random(255),random(255));
    buttonArray[i] = new interfac(random(width), random(height), 50, c,i);
  }

  vid.hide();
  //initial state: hide video,❗️ better not to hide in the preload b/c it's to "preload" files
}


class interfac{
  //class整段也可以放在mousePress代码最后面
  //class里面的constructor,display,chec顺序不分先后


  //constructor: define parameters,几个参数和new里面的位置关系一一对应
  constructor(tempX,tempY,tempS,tempC,tempName){
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false;
  }

    //display: draw buttons
  display(){
    fill(this.color);
    rect(this.x,this.y,this.size,this.size);
    text(this.name, this.x, this.y-10);

    if(this.overlay == true){
      fill(127,127);
      rect(this.x,this.y,this.size,this.size);
    }
  }

    //chec: cursor area
  chec(mX,mY){
    if(mX > this.x && mX < this.x + this.size && mY > this.y && mY < this.y + this.size){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }
=======
  button1 = new interfaces(100,200,50,"red", "Red Button");
  button2 = new interfaces(200,200, 50, "green", "Green Button");

  for(var i =0; i < 10; i++){
    var c = color(random(255),random(255),random(255));
    buttonArray[i] = new interfaces(random(width), random(height), 50, c,i);
  }

  vid.hide();
  //initial state: hide video,❗️ better not to hide in the preload b/c it's for "preload" files
>>>>>>> 1662f9eccca31c94ba617ccc96eaaef0955f3a5f


}

<<<<<<< HEAD



=======
>>>>>>> 1662f9eccca31c94ba617ccc96eaaef0955f3a5f
function draw() {

   //display();
   background(255);
   button1.display();
<<<<<<< HEAD
   if(button1.chec(mouseX,mouseY)){
     console.log(button1.name);
   }

   button2.display();
   button2.chec(mouseX,mouseY);
   if (button2.chec(mouseX,mouseY)){
     console.log(button2.name);
   }
=======
   if(button1.check(mouseX,mouseY)){
     console.log(button1.name);
   }
   button2.display();
   button2.check(mouseX,mouseY);
>>>>>>> 1662f9eccca31c94ba617ccc96eaaef0955f3a5f

   // for(var i = 0; i < buttonArray.length; i++){
   //   buttonArray[i].display();
   //   if(buttonArray[i].check(mouseX,mouseY)){
   //     console.log(buttonArray[i].name);
   //     background(buttonArray[i].color);
   //   }
   // }

}



<<<<<<< HEAD

=======
>>>>>>> 1662f9eccca31c94ba617ccc96eaaef0955f3a5f
function mousePressed (){
  // for(var i = 0; i < buttonArray.length; i ++ ){
  //   if(buttonArray[i].check(mouseX, mouseY)){
  //     if (i == 0 || buttonArray[1].name == "1"){
  //       // ❗️one way to check "which button is pressed" is by "location"
  //       //"i = 0" is over the red button
  //     } else if (i == 1){
  //       // over the green buttonArray
  //     }
  //   }
  // }

<<<<<<< HEAD
  if (button1.chec(mouseX, mouseY)){
=======
  if (button1.check(mouseX, mouseY)){
>>>>>>> 1662f9eccca31c94ba617ccc96eaaef0955f3a5f
    //button1 is red button
    soundFile.stop();
    vid.stop();
    vid.hide();//❗️stop when hide
  }

<<<<<<< HEAD
  if (button2.chec(mouseX,mouseY)){
=======
  if (button2.check(mouseX,mouseY)){
>>>>>>> 1662f9eccca31c94ba617ccc96eaaef0955f3a5f
    //green button
    //❗️play the sound
    soundFile.play();
    vid.play();
    vid.show();//❗️play when show
  }


}




<<<<<<< HEAD
=======
class interfaces{
  constructor(tempX,tempY,tempS,tempC,tempName){
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false;
  }

  display(){

    fill(this.color);
    rect(this.x,this.y,this.size,this.size);
    text(this.name, this.x, this.y-10);

    if(this.overlay == true){
      fill(127,127);
      rect(this.x,this.y,this.size,this.size);
    }
  }

  check(mX,mY){
    if(mX > this.x && mX < this.x + this.size && mY > this.y && mY < this.y + this.size){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }


}
>>>>>>> 1662f9eccca31c94ba617ccc96eaaef0955f3a5f













//end of code
