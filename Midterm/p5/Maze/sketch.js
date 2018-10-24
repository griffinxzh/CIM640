/*❗️❗️unsolved problems:
  1. void funcition "mousePressed" after "win" or "lose"
✔️2. move the actorImage anchorpoint to the middle (rather than lefe top corner)/
  otherwise it will cross the wall-- can't do it b/c the imageMode of mazemap is at corner

 */



 //actor settings
  var bodyColor = "#ffa910";
  var leafColor = "#5a8e00";
  var glassesColor = "black";
  var bgColor = "#ffdede";
  var a = 60;
  var b = 54;
  var actorX = 50;
  var actorY = 350;

//demon settings
var demonX = [0,100,200,300,400,500];
var demonY = [0,100,200,300,400,500];

//4 direction buttons [x,y,radius,color]
var controls = {"up":[800,400,80,"black"],
                "down":[800,500,80,"black"],
                "left":[700,500,80,"black"],
                "right":[900,500,80,"black"]
                };
var state = "up";
var stepCounter= 26;



function preload (){
  mazeMap = loadImage('assets/mazeVer6.png');
  youWin = loadImage('assets/youWin.png');
  youLose = loadImage('assets/youLose.png');
  demon = loadImage('assets/demon.png');
  actor = loadImage('assets/actor.png');
}




function setup() {
  //the big screen size
  createCanvas(1100,600);
  background("white");

  //maze grid
  image(mazeMap,0,0);

}


function draw() {
  //draw counter
//  frameRate(24); //❗️
  fill(bodyColor);
  strokeWeight(0);
  rect(920,190,50,50);
  fill("black");
  textSize(26);
  text(stepCounter,935,225);

  textSize(28);
  text("The Maze Trick",700,100);
  fill("grey");
  textSize(16);
  text("1.Move the Orange by 4 direction buttons",700,140);
  text("2.There are some tricky tools on the maze map",700,180);
  text("3.Arrive the destination within               steps",700,220);
  text("4.Try not to engage the demon",700,260);
  text("5.Certain walls can be crossed",700,300);

//draw charactor
  fill(bodyColor);
  ellipse(actorX, actorY, a,b);

  fill(leafColor);
  rect(actorX, actorY - 45, 3, 21);
  arc(actorX+15,actorY-30,27,21,PI,TWO_PI);

  fill(glassesColor);
  arc(actorX-15,actorY-5,33,27,0, PI);
  arc(actorX+18,actorY-5,33,27,0, PI);

  fill("white");
  arc(actorX,actorY+13,18,15,0,PI);
  fill("black");
  rect(actorX-5,actorY+16,12,1);


        //draw 4 buttons
          for(var keys in controls){
            fill(controls[keys][3]);
            rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);


            //change color when hover over
            if(mouseX > controls[keys][0] &&
                mouseX < controls[keys][0] + controls[keys][2] &&
                mouseY > controls[keys][1] &&
                mouseY < controls[keys][1] + controls[keys][2]){
                fill("grey");
                rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);

            }
            fill("white");
            text(keys,controls[keys][0]+20,controls[keys][1]+40);
          }





}




function mousePressed(){
  for(var keys in controls){
        //define pressing button by cursor position
        if (mouseX > controls[keys][0] &&
            mouseX < controls[keys][0] + controls[keys][2] &&
            mouseY > controls[keys][1] &&
            mouseY < controls[keys][1] + controls[keys][2]){
              //actor's direction + position
              state = keys;
              console.log(state);




            //new pos:
            var actorY_up= actorY - 100; //  up
            var actorY_down= actorY + 100;// down
            var actorX_left = actorX - 100; //left
            var actorX_right = actorX + 100; //right

            var demonPosX = random(demonX);
            var demonPosY = random(demonY);
            //the demon shows up only after one button is pressed


if (state == "up"){
             //re-draw the maze
             image(mazeMap,0,0);

             image(demon,demonPosX,demonPosY);

             //move actor
             actorY = actorY -100;
             stepCounter--;

            /*✅to make the actor not cross the wall,
              define the new position in the "if"condition
              rather than comparing the distance to the wall*/

      //wall1 ⬆️
      if (actorX==50 && actorY_up==250){
          actorX=50;
          actorY = 350;
        }
      //wall4 ⬆️
      if (actorX == 150 && actorY_up==350){
          actorX = 150;
          actorY = 450;
        }
      //wall5 ⬆️
      if (actorX == 250 && actorY_up==350){
          actorX = 250;
          actorY = 450;
        }
      //wall11 ⬆️
      if (actorX == 350 && actorY_up==250){
          actorX = 350;
          actorY = 350;
        }
     //wall12 ⬆️
      if (actorX == 250 && actorY_up==250){
          actorX = 250;
          actorY = 350;
        }
      //wall19 ⬆️
      if (actorX == 450 && actorY_up==150){
          actorX = 450;
         actorY = 250;
       }
      //wall23 ⬆️
      if (actorX == 550 && actorY_up==50){
         actorX = 550;
         actorY = 150;
      }

      //transfer "star"
      if (actorX==50 && actorY_up==50){
          actorX=350;
          actorY=250;
      }

      //death cross
      if( actorX == 350 && actorY_up ==150){
        image(youLose,0,0);
      }

      //+1
      if (actorX==250 && actorY_up == 150){
        stepCounter=stepCounter+1;
      }

 }





if (state=="down"){
              //redraw the maze
              image(mazeMap,0,0);
              image(demon,demonPosX,demonPosY);
              actorY = actorY+100;
              stepCounter--;
      //wall1 ⬇️
      if (actorX==50 && actorY_down == 350){
          actorX=50;
          actorY = 250;
        }
      //wall4 ⬇️
      if (actorX == 150 && actorY_down == 450){
          actorX = 150;
          actorY = 350;
        }
      //wall5 ⬇️
      if (actorX == 250 && actorY_down == 450){
          actorX = 250;
          actorY = 350;
        }
      //wall11 ⬇️
      if (actorX == 350 && actorY_down == 350){
          actorX = 350;
          actorY = 250;
        }
      //wall12 ⬇️
      if (actorX == 250 && actorY_down == 350){
          actorX = 250;
          actorY = 250;
        }
      //wall19 ⬇️
      if (actorX ==450 && actorY_down == 250){
          actorX = 450;
          actorY = 150;
        }
      //wall23 ⬇️
      if (actorX ==550 && actorY_down == 150){
          actorX = 550;
          actorY = 50;
        }

        //death cross
        if( actorX == 350 && actorY_down ==150){
          image(youLose,0,0);
        }

        //+2
        if (actorX==250 && actorY_down == 550){
          stepCounter=stepCounter+2;
        }
        //+1
        if (actorX==250 && actorY_down == 150){
          stepCounter=stepCounter+1;
        }
}








if (state=="right"){

             //redraw the maze
             image(mazeMap,0,0);
             image(demon,demonPosX,demonPosY);
             actorX = actorX+100;
             stepCounter--;
      //wall2 ➡️
      if (actorY==350 && actorX_right ==150){
          actorY=350;
          actorX=50;
        }

      //wall3 ➡️
      if (actorY==450 && actorX_right ==150){
          actorY=450;
          actorX=50;
        }
      //wall6 ➡️
      if (actorY==550 && actorX_right ==250){
          actorY=550;
          actorX=150;
        }
      //wall7 ➡️
      if (actorY==550 && actorX_right ==350){
          actorY=550;
          actorX=250;
        }

      //wall8 ➡️
      if (actorY==550 && actorX_right ==450){
          actorY=550;
          actorX=350;
        }
      //wall9 ➡️
      if (actorY==450 && actorX_right ==450){
          actorY=450;
          actorX=350;
        }
      //wall10 ➡️
      if (actorY==350 && actorX_right ==450){
          actorY=350;
          actorX=350;
        }
      //wall13 ➡️
      if (actorY==250 && actorX_right ==250){
          actorY=250;
          actorX=150;
        }
      //wall14 ➡️
      if (actorY==150 && actorX_right ==250){
          actorY=150;
          actorX=150;
        }
      //wall15 ➡️
      if (actorY==150 && actorX_right ==150){
          actorY=150;
          actorX=50;
        }
      //wall16 ➡️
      if (actorY==50 && actorX_right ==150){
          actorY=50;
          actorX=50;
        }
      //wall17 ➡️
      if (actorY==50 && actorX_right ==350){
          actorY=50;
          actorX=250;
        }
      //wall18 ➡️
      if (actorY==150 && actorX_right ==450){
          actorY=150;
          actorX=350;
        }
      //wall20 ➡️
      if (actorY==250 && actorX_right ==550){
          actorY=250;
          actorX=450;
        }
        //wall21 ➡️
      if (actorY==350 && actorX_right ==550){
          actorY=350;
          actorX=450;
        }
      //wall22 ➡️
      if (actorY==450 && actorX_right ==550){
         actorY=450;
         actorX=450;
        }

      //transfer "star"
      if (actorY==250 && actorX_right ==350){
          actorX = 50;
          actorY = 50;
      }
      //win
      if (actorY == 50 && actorX_right == 550){
        image(youWin,0,0);
      }

      //death cross
      if( actorY == 150 && actorX_right ==350){
        image(youLose,0,0);
      }

}




if (state=="left"){

             //redraw the maze
             image(mazeMap,0,0);
             image(demon,demonPosX,demonPosY);
            actorX = actorX-100;
            stepCounter--;
      //wall2 ⬅️
      if (actorY==350 && actorX_left ==50){
          actorY=350;
          actorX=150;
        }

      //wall3 ⬅️
      if (actorY==450 && actorX_left ==50){
          actorY=450;
          actorX=150;
        }
      //wall6 ⬅️
      if (actorY==550 && actorX_left ==150){
          actorY=550;
          actorX=250;
        }
      //wall7 ⬅️
      if (actorY==550 && actorX_left ==250){
          actorY=550;
          actorX=350;
        }
      //wall8 ⬅️
      if (actorY==550 && actorX_left ==350){
          actorY=550;
          actorX=450;
        }
      //wall9 ⬅️
      if (actorY==450 && actorX_left ==350){
          actorY=450;
          actorX=450;
        }
      //wall10 ⬅️
      if (actorY==350 && actorX_left ==350){
          actorY=350;
          actorX=450;
        }
      //wall13 ⬅️
      if (actorY==250 && actorX_left ==150){
          actorY=250;
          actorX=250;
        }
      //wall14 ⬅️
      if (actorY==150 && actorX_left ==150){
          actorY=150;
          actorX=250;
        }
      //wall15 ⬅️
      if (actorY==150 && actorX_left ==50){
          actorY=150;
          actorX=150;
        }
      //wall16 ⬅️
      if (actorY==50 && actorX_left ==50){
          actorY=50;
          actorX=150;
        }
      //wall17 ⬅️
      if (actorY==50 && actorX_left ==250){
          actorY=50;
          actorX=350;
        }
      //wall18 ⬅️
      if (actorY==150 && actorX_left ==350){
          actorY=150;
          actorX=450;
        }
      //wall20 ⬅️
      if (actorY==250 && actorX_left ==450){
          actorY=250;
          actorX=550;
        }
        //wall21 ⬅️
      if (actorY==350 && actorX_left ==450){
          actorY=350;
          actorX=550;
        }
      //wall22 ⬅️
      if (actorY==450 && actorX_left ==450){
          actorY=450;
          actorX=550;
        }

        //transfer "star"
        if (actorY==250 && actorX_left ==350){
            actorX = 50;
            actorY = 50;
        }
}

              //mazeMap borders
              if (actorX<0){actorX = 50;}
              if (actorX>550){actorX = 550;}
              if (actorY<0){actorY = 50;}
              if (actorY>550){actorY = 550;}

              //if step counter ==0, you lose
              if (stepCounter<0)
              {image(youLose,0,0);
              }

              console.log("actorPos:"+actorX+","+actorY); //new position

              //lose if you met demon
              if (actorX==demonPosX +50 && actorY == demonPosY +50){
                image(youLose,0,0);
              }
              console.log("demon:"+demonPosX +","+ demonPosY);


        }



  }
}





function keyPressed() {
  if (keyCode === ESCAPE) {
    image(mazeMap,0,0);
    actorX = 50;
    actorY = 350;
    stepCounter= 26;
  }
}
