/*

Officer: 5871867
CaseNum: 701-3-36003286-5871867

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from louise courtwood.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. 
It's so hard to remember right now. They were fairly tall, I think between a height of 148 and 190 cm. 
It was very dark and I could barely see, They were wearing a red parka. 
I'll never forget their brown eyes. It was so scary! They seemed to be between the age of 36 and 48 years old. 
The person I saw was female. I distinctly remember that they were wearing a red necktie,
 I remember thinking that was quite unusual. They had long white hair. 
 They brobably weigh between 78 and 87 kg. They wore thin metallic glasses. Can I go home now Sir? 

*/

var suspectList = [
	{ 
		"name": "JACQUELINE ZETLAND",
		"item": "purple hat",
		"glasses": "very thick",
		"coat": "green jacket",
		"gender": "male",
		"age": 54,
		"height": 180,
		"weight": 77
	},
	{ 
		"name": "DARBY BROADVIEW",
		"item": "net weave shirt",
		"glasses": "cheap plastic",
		"coat": "black hoodie",
		"gender": "male",
		"age": 20,
		"height": 156,
		"weight": 78
	},
	{ 
		"name": "DRUSILLA NIEMELA",
		"item": "orange socks",
		"glasses": "red",
		"coat": "yellow poncho",
		"gender": "male",
		"age": 39,
		"height": 168,
		"weight": 97
	},
	{ 
		"name": "JESSIA DEAUVILLE",
		"item": "pink scarf",
		"glasses": "light tan",
		"coat": "black overcoat",
		"gender": "male",
		"age": 56,
		"height": 169,
		"weight": 70
	},
	{ 
		"name": "LINETTE DORCEY",
		"item": "fur vest",
		"glasses": "blue",
		"coat": "green army coat",
		"gender": "female",
		"age": 38,
		"height": 166,
		"weight": 66
	},
	{ 
		"name": "JAUNITA CASIMERE",
		"item": "red necktie",
		"glasses": "thin metallic",
		"coat": "red parka",
		"gender": "female",
		"age": 43,
		"height": 149,
		"weight": 80
	},
	{ 
		"name": "LESLEY SILVEIRA",
		"item": "pair of leather trousers",
		"glasses": "dark brown",
		"coat": "white fur coat",
		"gender": "female",
		"age": 40,
		"height": 168,
		"weight": 72
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare both your functions here

function testProperties(suspectObj) {

	let matches = 0;
	
	if(suspectObj.height >= 148 && suspectObj.height <= 190) {
		matches++;
	}

	if(suspectObj.coat === "red parka") {
		matches++;
	}
	
	if(suspectObj.age >= 36 && suspectObj.age <= 48) {
		matches++;
	}
	
	if(suspectObj.item === "red necktie") {
		matches++;
	}
	
	if(suspectObj.glasses === "thin metallic") {
		matches++;
	}
	
	if(suspectObj.weight >= 78 && suspectObj.weight <= 87) {
		matches++;
	}

	if(suspectObj.gender === "female"){
		matches++;
	}
	
	return matches;
}
	
function traverseSuspects() {

	let guiltySuspect = {};

	for(let i = 0; i < suspectList.length; i++) {

		if(testProperties(suspectList[i]) === 7) {
			guiltySuspect = suspectList[i];
			break;
		}
	}
		return guiltySuspect;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(traverseSuspects().name + " is guilty!", 60, 80);
}
