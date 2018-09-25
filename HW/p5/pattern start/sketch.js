var curImage,sun,moon;

var selection,textImput, submitButton;

var numberOfImages = 0;


function preload (){
    sun= loadImage("assets/sun.png");
    moon = loadImage("assets/moon.png");
}


function setup() {


  // put setup code here
  createCanvas(400,400);

  //create a selection and a basic dropdown
  selection = createSelect();
  selection.position(10,10);
  //list options below
  selection.option("sun");
  selection.option("moon");

  //changed is like the mousePressed function
  selection.changed(function(){

    //  console.log(selection.value());

  });

  textImput = createInput("# of Images");
  textImput.position(10,30);

  submitButton = createButton("Create Pattern");
  submitButton.position(10,50);
  submitButton.mousePressed(function(){
      numberOfImages = textImput.value();
  //    console.log(numberOfImages);

      if (selection.value()== "sun"){
        curImage = sun ;
      }
      else if (selection.value() == "moon"){
        curImage = moon ;

      }



  });


  //give "curImage" a value at the beginning,
  //or the program won't know what to do
    curImage = sun;
}




function draw() {

//  fill("red");
  frameRate(5);
  background(255);
  // put drawing code here

  for(var i =0; i<10; i++){
    //++ means plus by one
  //  console.log(i);
    image(curImage,random(width),random(height),
          curImage.width/random(1,5),curImage.height/random(1,5));

  }
 // image(curImage,10,10);

}
