/*

Officer: 5871867
CaseNum: 303-2-82336588-5871867

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Make Restricted_Safe_Combination_a equal to the value of mouseY
	- Use the 'constrain' function to prevent Restricted_Safe_Combination_a 
	from falling below 2 and going above 12

	When any key is pressed:
	- Decrement Restricted_Safe_Combination_b by 2
	- Use the 'constrain' function to prevent Restricted_Safe_Combination_b 
	from falling below 2 and going above 15

	When the mouse button is released:
	- Make Restricted_Safe_Combination_c equal to the value of mouseX
	- Use the 'max' function to prevent Restricted_Safe_Combination_c 
	from falling below 2

	Whilst the mouse is moving:
	- Increment Restricted_Safe_Combination_d by 3
	- Use the 'constrain' function to prevent Restricted_Safe_Combination_d 
	from falling below 2 and going above 9

	Whilst the mouse is moving:
	- Make Restricted_Safe_Combination_e equal to the value of mouseY
	- Use the 'constrain' function to prevent Restricted_Safe_Combination_e 
	from falling below 16 and going above 76



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Restricted_Safe_Combination_a;
var Restricted_Safe_Combination_b;
var Restricted_Safe_Combination_c;
var Restricted_Safe_Combination_d;
var Restricted_Safe_Combination_e;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Restricted_Safe_Combination_a = 0;
	Restricted_Safe_Combination_b = 0;
	Restricted_Safe_Combination_c = 0;
	Restricted_Safe_Combination_d = 0;
	Restricted_Safe_Combination_e = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

// Whilst the mouse is being dragged:
// - Make Restricted_Safe_Combination_a equal to the value of mouseY
// - Use the 'constrain' function to prevent Restricted_Safe_Combination_a 
// from falling below 2 and going above 12
function mouseDragged(){
	Restricted_Safe_Combination_a = constrain(mouseY,2,12);

}

// When any key is pressed:
// - Decrement Restricted_Safe_Combination_b by 2
// - Use the 'constrain' function to prevent Restricted_Safe_Combination_b 
// from falling below 2 and going above 15
function keyPressed(){
	Restricted_Safe_Combination_b = Restricted_Safe_Combination_b - 2;
	Restricted_Safe_Combination_b = constrain(Restricted_Safe_Combination_b,2,15);

}

// When the mouse button is released:
// - Make Restricted_Safe_Combination_c equal to the value of mouseX
// - Use the 'max' function to prevent Restricted_Safe_Combination_c 
// from falling below 2
function mouseReleased(){
	Restricted_Safe_Combination_c = mouseX;
	Restricted_Safe_Combination_c = max(2,Restricted_Safe_Combination_c);

}

// Whilst the mouse is moving:
// - Increment Restricted_Safe_Combination_d by 3
// - Use the 'constrain' function to prevent Restricted_Safe_Combination_d 
// from falling below 2 and going above 9
function mouseMoved(){
	Restricted_Safe_Combination_d = Restricted_Safe_Combination_d+3;
	Restricted_Safe_Combination_d = constrain(Restricted_Safe_Combination_d,2,9);

	Restricted_Safe_Combination_e = mouseY;
	Restricted_Safe_Combination_e = constrain(Restricted_Safe_Combination_e,16,76);
}

// Whilst the mouse is moving:
// - Make Restricted_Safe_Combination_e equal to the value of mouseY
// - Use the 'constrain' function to prevent Restricted_Safe_Combination_e 
// from falling below 16 and going above 76



///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Restricted_Safe_Combination_a, 16);
	pop();

	push();
	translate(120,380);
	drawDial(140,Restricted_Safe_Combination_b, 19);
	pop();

	push();
	translate(280,170);
	drawDial(140,Restricted_Safe_Combination_c, 13);
	pop();

	push();
	translate(280,380);
	drawDial(140,Restricted_Safe_Combination_d, 13);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Restricted_Safe_Combination_e);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
