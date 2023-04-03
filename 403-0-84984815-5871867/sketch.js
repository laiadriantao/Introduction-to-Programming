/*

Officer: 5871867
CaseNum: 403-0-84984815-5871867

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman. 

- Our sources tell us that he is currently heading east on Reynolds Street. 
- I need you to sound the alarm if he crosses Romero Avenue.
- Shiffman's position is signified by the mouse. 
- To sound the alarm, draw a OliveDrab rectangle covering the remainder of the map from Romero Avenue to the east.

NB. all road coordinates are measured from their central axis.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  fill()  - Use r,g,b values between 0 and 255.
  rect()
  mouseX
  mouseY
  width
  height

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

  /*   We are on the lookout for the criminal mastermind known as Shiffman. 

    - Our sources tell us that he is currently heading east on Reynolds Street. 
    - I need you to sound the alarm if he crosses Romero Avenue.
    - Shiffman's position is signified by the mouse. 
    - To sound the alarm, draw a OliveDrab rectangle covering the remainder of the map from Romero Avenue to the east.

    NB. all road coordinates are measured from their central axis.

    Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical. */


    //Write your code below here ...
    // Check if Shiffman has crossed Romero Avenue and sound the alarm
    if (mouseX > 723) {
      fill(107,142,35); // OliveDrab color
      noStroke();
      rect(723, 0, width - 723, height);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);


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
