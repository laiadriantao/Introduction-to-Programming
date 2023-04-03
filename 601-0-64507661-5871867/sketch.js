/*
Officer: 5871867
CaseNum: 601-0-64507661-5871867

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Maroon stroke ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var Absconder_Data_position_x = [127, 156, 179, 200, 220, 228, 249, 269, 292, 321, 354, 390, 396, 429, 456, 467, 483, 531, 547, 571, 589, 637];
var Absconder_Data_position_y = [175, 158, 192, 154, 133, 168, 149, 139, 168, 133, 159, 144, 225, 228, 230, 277, 267, 291, 278, 274, 318, 280];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{

	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();

	image(countyMap, 0,0);

	//add your code below here

  	// Traverse the sightings array and draw a Maroon stroke ellipse at each location
	stroke(128, 0, 0); // set stroke color to Maroon
	strokeWeight(2); // set stroke weight to 2 pixels
  	for (var i = 0; i < Absconder_Data_position_x.length; i++) {
		var x = Absconder_Data_position_x[i];
		var y = Absconder_Data_position_y[i];
		ellipse(x, y, 10, 10); // draw an ellipse at (x, y) with a width and height of 10 pixels
  	}


}

//We are not using the draw function this time
