/*

Officer: 5871867
CaseNum: 403-3-28448767-5871867

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Mullenweg Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 63 meters from 

Jerry's Wine Bar
 
then alert local police by drawing a Navy circle around it with a radius of 63 pixels.
- if Shiffman is in 

Algol fish whole-salers

then the neighbourhood watch must be notified by drawing a MediumOrchid rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a DeepSkyBlue rectangle covering the area between 

Turing Place,

Ada Avenue,

Mullenweg Street and 

Adele Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...

    // check if Shiffman is within 63 meters of Jerry's Wine Bar
    if (dist(mouseX, mouseY, 2101, 810) < 63) {
    // alert local police
      
      fill(0, 0, 128); // Navy color
      strokeWeight(4);
      ellipse(2101, 810, 126, 126); // Navy circle with radius 63 pixels
    }

    // check if Shiffman is in Algol fish whole-salers

    else if (mouseX > 1872 && mouseX < 2001 && mouseY > 838 && mouseY < 932) {

    // alert neighbourhood watch
      
      fill(186, 85, 211); // MediumOrchid color
      strokeWeight(4);
      rect(1872, 838, 2001-1872, 932-838); // MediumOrchid rectangle
    }

    // otherwise, issue global alert
    else {
        
        fill(0, 191, 255); // DeepSkyBlue color
        strokeWeight(4);
        rect(392, 333, 1492-392, 940-333); // DeepSkyBlue rectangle covering the area between Turing Place, Ada Avenue, Mullenweg Street and Adele Street
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);

}
