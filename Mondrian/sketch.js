function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);

	//draw white rectangles

	fill(255,255,255);
	strokeWeight(12);
	rect(100, 540, 500, 110);
	rect(100, 540, 70, 110);
	rect(600, 50, 100, 600);
	rect(600, 300, 100, 240);
	rect(600, 50, 100, 240);

	//draw blue rectangle

	fill(0,0,255);
	strokeWeight(12);
	rect(600, 540, 100, 110);

	//draw gold rectangle 	rgb(255,215,0)

	fill(255,215,0);
	strokeWeight(12);
	rect(100, 590, 70, 60);

}