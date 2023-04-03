/*
The case of the Python Syndicate
Stage 1

Officer: 5871867
CaseNum: 301-0-18841571-5871867

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var bonesKarpinskiImg;
var robbieKrayImg;
var pawelKarpinskiImg;
var cecilKarpinskiImg;
var adaLovelaceImg;
var countessHamiltonImg;



//declare your new variables below
var cecilKarpinskiCoordX = 115;
var cecilKarpinskiCoordY = 309;

var bonesKarpinskiCoordX = 115;
var bonesKarpinskiCoordY = 40;

var robbieKrayCoordX = 408;
var robbieKrayCoordY = 40;

var pawelKarpinskiCoordX = 701;
var pawelKarpinskiCoordY = 40;

var adaLovelaceCoordX = 408;
var adaLovelaceCoordY = 309;

var countessHamiltonCoordX = 701;
var countessHamiltonCoordY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	adaLovelaceImg = loadImage("ada.png");
	countessHamiltonImg = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImg, cecilKarpinskiCoordX, cecilKarpinskiCoordY);

	image(bonesKarpinskiImg, bonesKarpinskiCoordX, bonesKarpinskiCoordY);

	image(robbieKrayImg, robbieKrayCoordX, robbieKrayCoordY);

	image(pawelKarpinskiImg, pawelKarpinskiCoordX, pawelKarpinskiCoordY);

	image(adaLovelaceImg, adaLovelaceCoordX, adaLovelaceCoordY);

	image(countessHamiltonImg, countessHamiltonCoordX, countessHamiltonCoordY);

}