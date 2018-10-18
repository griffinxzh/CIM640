//4 frames animation
// there are 4 pictures↓
var frameAmounts = 4;
var frameArray = [];
//start from 0↓
var currentFrame = 0;


var interval = 2000;
//means 2000 milliseconds
var prevMillis = 0;
//this var is to reset


var interval2 = 500;
var prevMillis2 =0;
var counter = 0;

//play/stop button[x,y,size,color]
var controls = {"play": [100,400,50,"green"],
                "stop": [160,400,50,"red"],
                "fwd": [240,400,50,"aqua"],
                "back": [300,400,50,"pink"]
                  };


var state = "stop";



function preload (){
  // var frameString = “assets/Thatwasclose0.jpg”;
  // frameArray = [0] = loadImage(frameString);
for (var frames = 0; frames< frameAmounts; frames ++){
  //display the picture below
  var frameString = "assets/Thatwasclose" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
    }
}


function setup() {
  createCanvas(500,500);
//  background(0)

//new type of array: index is word (instead of numbers)
  console.log(controls["play"]);
  console.log(controls["play"][3]); //green

  for(var keys in controls){
    console.log(keys + "values:" + controls[keys]);
  }


}

function draw() {
  //frameRate(1);
//console.log(millis());
  image(frameArray[currentFrame],0,0);

  if (millis() - prevMillis >  interval && state == "play"){
    currentFrame++;
    prevMillis = millis();

  }



    //console.log(currentFrame);
    if(currentFrame > frameAmounts - 1){
            currentFrame = 0;
            }

    // if(millis(0 -prevMillis2 > interval2)){
    //   counter++;
    //   prevMillis2 = millis();
    //
    // }
    //
    // if (counter>width){
    //   counter = 0;
    // }
    //
    // ellipse(counter, height/2, 20,20);

    ellipse(mouseX, mouseY, 10,10);


    //draw 4 buttons
    for(var keys in controls){
        fill(controls[keys][3]);
        rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2] );
        text(keys,controls[keys][0],controls[keys][1]);

        //change color when hover over
        if(mouseX > controls[keys][0] && mouseX< controls[keys][0] +
        controls[keys][2] && mouseY > controls[keys][1] && mouseY <
        controls[keys][1] + controls[keys][2]){
            fill(127,127);
            rect(controls[keys][0],controls[keys][1],controls[keys][2],
            controls[keys][2]);
        }
    }


}

function mousePressed(){
  for(var keys in controls){

          if(mouseX > controls[keys][0] && mouseX< controls[keys][0] +
          controls[keys][2] && mouseY > controls[keys][1] && mouseY <
          controls[keys][1] + controls[keys][2]){

            state = keys;


            console.log(state);
            if (state=="fwd"){
              currentFrame++;
              /*you need to check whether you've reached
              the end of the array, it needs to be reset*/
              if (currentFrame >= frameArray.length){
                currentFrame=0;
              }
            }
            else if (state=="back"){
              currentFrame--;
              if (currentFrame <0){
                currentFrame = frameArray.length-1;
              }
            }

          }

        }


}
