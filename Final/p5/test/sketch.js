
var imgNum = Math.floor(100.3);

// var now=new Date();
//
//     var number = now.getSeconds()%43;

function preload(){
  bg1 = loadImage("assets/bg-01.jpg");
  bg2 = loadImage("assets/bg-02.jpg");
  bg3 = loadImage("assets/bg-03.jpg");
}

function setup(){
createCanvas(1300,700);

fill(0);



}

function draw(){


background(255);
var bgImg = [bg1, bg2, bg3];


// var myPix = new Array(bg1, bg2, bg3);
//    var randomNum = Math.floor((Math.random() * myPix.length));
//    document.getElementById("myPicture").src = myPix[randomNum];
// // source: https://blog.csdn.net/fighterna/article/details/53097093

image(bgImg[imgNum],0,0);

console.log(imgNum);

}
