/*
The case of the Python Syndicate
Stage 2


Officer: 5871867
CaseNum: 301-1-14951807-5871867

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Bones Karpinski

- The variables for Bones Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Bones Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Bones Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Bones Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var rockyKrayImage;
var robbieKrayImage;
var annaKarpinskiImage;
var bonesKarpinskiImage;
var adaLovelaceImage;
var countessHamiltonImage;


var bonesKarpinskiXLocation = 115;
var bonesKarpinskiYLocation = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImage = loadImage("krayBrothers1.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	adaLovelaceImage = loadImage("ada.png");
	countessHamiltonImage = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiImage, bonesKarpinskiXLocation, bonesKarpinskiYLocation);

	image(rockyKrayImage, bonesKarpinskiXLocation, bonesKarpinskiYLocation-269);
	image(robbieKrayImage, bonesKarpinskiXLocation + 293, bonesKarpinskiYLocation-269);
	image(annaKarpinskiImage, bonesKarpinskiXLocation + 586, bonesKarpinskiYLocation-269);
	image(adaLovelaceImage, bonesKarpinskiXLocation + 293, bonesKarpinskiYLocation);
	image(countessHamiltonImage, bonesKarpinskiXLocation + 586 , bonesKarpinskiYLocation);

}