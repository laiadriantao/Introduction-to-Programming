/*
The case of the Python Syndicate
Stage 3


Officer: 5871867
CaseNum: 301-2-61197291-5871867

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Ada Lovelace has been declared and initialised
- Position each mugshot relative to Ada Lovelace
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Ada Lovelace object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Ada Lovelace 
- Do not add any additional commands

*/

var photoBoard;
var rockyKrayImg;
var annaKarpinskiImg;
var adaLovelaceImg;
var cecilKarpinskiImg;
var pawelKarpinskiImg;
var bonesKarpinskiImg;

var adaLovelaceObject;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImg = loadImage("krayBrothers1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	adaLovelaceImg = loadImage("ada.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	adaLovelaceObject = {
		x: 701,
		y: 40,
		image: adaLovelaceImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(adaLovelaceObject.image, adaLovelaceObject.x, adaLovelaceObject.y);

	image(rockyKrayImg, adaLovelaceObject.x - 586, adaLovelaceObject.y);
	image(annaKarpinskiImg, adaLovelaceObject.x - 293, adaLovelaceObject.y);
	image(cecilKarpinskiImg, adaLovelaceObject.x - 586, adaLovelaceObject.y + 269);
	image(pawelKarpinskiImg, adaLovelaceObject.x - 293, adaLovelaceObject.y + 269);
	image(bonesKarpinskiImg, adaLovelaceObject.x, adaLovelaceObject.y + 269);

}