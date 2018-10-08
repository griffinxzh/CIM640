var curImage, sun, moon;
var selection, textInput, submitButton;


// [] is to create an array
 var posX = [0,100,200,300];
 var posY = [0,70,140,210,280];







var numberOfImages = 0;

function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {

createCanvas(400,400);

//selection process
selection = createSelect();
selection. position(10, 10);
selection.option("sun");
selection.option("moon");
selection.changed(function(){

//console.log(selection.value());


});

textInput = createInput("# of Images");
textInput.position(10, 30);

submitButton = createButton("Create Pattern");
submitButton.position(10,50);

submitButton.mousePressed(function(){
  numberOfImages = textInput.value();
  console.log(numberOfImages);



  if(selection.value() == "sun"){
    curImage = sun;
  } else if(selection.value() == "moon"){
    curImage = moon;
  }


  posX = [];
  posY = [];
  // a better way is to clear up the old arrays and make a new one
  //without cleaning up the old ones, it may eat up your memory




  for (var a = 0; a < numberOfImages; a++){
    posX[a] = random(width);
    posY[a] = random(height);
    console.log("x: " + posX[a] + "y:" + posY[a]);
  }

});

curImage = sun;

//console.log(posX[0]);

}

function draw() {
//  frameRate(5);

background(255);
// for(var i = 0; i < numberOfImages; i++){
//   console.log(i);
// image(curImage, random(width), random(height), curImage.width/random(1,5), curImage.height/random(1,5));
//  }


  //                 //posX.length will tell how many places are there in the array
  //                 //in posX we have 3
  // for(var i=0; i<posX.length; i++ ){
  //     image(curImage,posX[i],posY[i],curImage.width/4, curImage.height/4);



      for(var i=0; i<numberOfImages; i++ ){
          image(curImage,posX[i],posY[i],curImage.width/4, curImage.height/4);

  }
}
