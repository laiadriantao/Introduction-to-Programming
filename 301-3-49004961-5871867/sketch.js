/*
The case of the Python Syndicate
Stage 4

Officer: 5871867
CaseNum: 301-3-49004961-5871867

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var countess_hamilton_img;
var robbie_kray_img;
var anna_karpinski_img;
var rocky_kray_img;
var ada_lovelace_img;
var pawel_karpinski_img;

var ada_lovelace_obj;


//declare your new objects below


// var countess_hamilton_x_coord = 115;
// var countess_hamilton_y_coord = 40;
// var robbie_kray_x_coord = 408;
// var robbie_kray_y_coord = 40;
// var anna_karpinski_x_coord = 701;
// var anna_karpinski_y_coord = 40;
// var rocky_kray_x_coord = 115;
// var rocky_kray_y_coord = 309;
// var pawel_karpinski_x_coord = 701;
// var pawel_karpinski_y_coord = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_img = loadImage("countessHamilton.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	ada_lovelace_img = loadImage("ada.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	ada_lovelace_obj = {
		x: 408,
		y: 309,
		image: ada_lovelace_img
	};

	countess_hamilton_obj = {
		x: 115,
		y: 40,
		image: countess_hamilton_img
	};

	robbie_kray_obj = {
		x: 408,
		y: 40,
		image: robbie_kray_img
	};

	anna_karpinski_obj = {
		x: 701,
		y: 40,
		image: anna_karpinski_img
	};

	rocky_kray_obj = {
		x: 115,
		y: 309,
		image: rocky_kray_img
	};

	pawel_karpinski_obj = {
		x: 701,
		y: 309,
		image: pawel_karpinski_img
	};



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_img, countess_hamilton_obj.x, countess_hamilton_obj.y);
	image(robbie_kray_img, robbie_kray_obj.x, robbie_kray_obj.y);
	image(anna_karpinski_img, anna_karpinski_obj.x, anna_karpinski_obj.y);
	image(rocky_kray_img, rocky_kray_obj.x, rocky_kray_obj.y);
	image(ada_lovelace_obj.image, ada_lovelace_obj.x, ada_lovelace_obj.y);
	image(pawel_karpinski_img, pawel_karpinski_obj.x, pawel_karpinski_obj.y);


}