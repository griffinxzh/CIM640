function setup() {

  select ("body").style("background-color","pink");
  var container0 = createDiv();   //an empty shell
  container0.id("container0");
  select ("#container0").html("<h1>Your project title goes here ^_^</h1>");
  select ("#container0").style("width","900px");
  select ("#container0").style("margin","0 auto"); //a standard way to center thing within a container
//❗️0:top&bottom  ❗️auto:left&right(dis between the border of container and the screen edge)
// p5 defaultly create a canvas of 100*100 sit above the container0 if there's no "createCanvas" before
  select ("#container0").style("text-align","center");

var cnv = createCanvas(600,400);
cnv.id("myCanvas");  //name your myCanvas
cnv.parent(container0); //put the canvas inside the container

//it's a p5 independent canvas
}

function draw() {
  background(0);
  // put drawing code here
}
