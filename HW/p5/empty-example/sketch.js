
//all the tags (code) can be found on the p5js website

//define variables:numbers, letters, words,...
var a= 3;
var b='b';
var num1='1';
var word1 = 'word';
var trueFalse=true;
var sentence="I'm a sentence";
// to differnt



function setup() {
  // put setup code here
  createCanvas(400,400);
  background(R=200,G=100,B=20);
  background("orange");
  background("#123456");

//A variable defined in the setup is only available at setup
 var setupVariable = 5;


  console.log(a + num1);
  console.log(a-num1);
  console.log(a+b);
  //error:not a number
  console.log(a*b);

}

function draw() {
  // put drawing code here (draw is sth that loops)
  stroke('black');
  //this "white" will make the shapes below with white stroke (rather than red)
  fill('orange');
  //the fill affects everything below
  ellipse(120,120,50,80);
  ellipse(200,120,50,80);
  rect(150,140,10,60);  //nose
  rect(120,240,130,10); //mouth

  stroke('red');
  strokeWeight(1);
  point(width/2,height/2);
  /*point is about ratio, is useful (for example), you don't have to change
  the point when the size of the canvas changes */

  line(120,245,240,245);

  arc(100,330,100,100,QUARTER_PI,TWO_PI-QUARTER_PI);


  triangle();
  quad();
  //a shape with four sides

}
