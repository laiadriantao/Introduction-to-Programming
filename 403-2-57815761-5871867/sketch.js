/*

Officer: 5871867
CaseNum: 403-2-57815761-5871867

Case 403 - Cornered - stage 3

We have Shiffman cornered at City Narrows and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside City Narrows

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of City Narrows.
Draw a MediumAquamarine rectangle covering City Narrows for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  fill()  - Use r,g,b values between 0 and 255.
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
    // define the bounds of City Narrows
    var northBound = 90;
    var southBound = 237;
    var eastBound = 2792;
    var westBound = 2634;

    // check if Shiffman is within City Narrows bounds
    if(mouseX > westBound && mouseX < eastBound && mouseY > northBound && mouseY < southBound){
      // if Shiffman is inside City Narrows, draw the MediumAquamarine rectangle covering City Narrows
      fill(102, 205, 170); // MediumAquamarine
      noStroke();
      rect(westBound, northBound, eastBound-westBound, southBound-northBound);
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
