/*

Officer: 5871867
CaseNum: 701-2-84616665-5871867

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from louise daviswood. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They brobably weigh between 71 and 72 kg. It was very dark and I could barely see, They were fairly tall, I think between a height of 168 and 197 cm. They seemed to be between the age of 30 and 45 years old. I distinctly remember that they were wearing a dotted necktie, I remember thinking that was quite unusual. They were wearing a blue overcoat. It's hard to say. The person I saw was male. They were carrying a red backpack. I'll never forget their pale eyes. I hope I never have to go through that again. 

*/

var usualSuspects = [
	{ 
		"name": "JESUS DORCEY",
		"accessory": "black duffle bag",
		"coat": "black overcoat",
		"item": "pink scarf",
		"eyes": "pale",
		"height": 182,
		"weight": 90,
		"age": 51
	},
	{ 
		"name": "PIERRE CASIMERE",
		"accessory": "red backpack",
		"coat": "blue overcoat",
		"item": "dotted necktie",
		"eyes": "pale",
		"height": 191,
		"weight": 72,
		"age": 36
	},
	{ 
		"name": "BRIDGET MONKSFORD",
		"accessory": "metal briefcase",
		"coat": "red parka",
		"item": "fur vest",
		"eyes": "blue",
		"height": 161,
		"weight": 81,
		"age": 49
	},
	{ 
		"name": "ERMELINDA WILLMAR",
		"accessory": "laptop bag",
		"coat": "yellow poncho",
		"item": "orange socks",
		"eyes": "brown",
		"height": 153,
		"weight": 74,
		"age": 33
	},
	{ 
		"name": "TU WARMAN",
		"accessory": "plastic box",
		"coat": "white fur coat",
		"item": "pair of leather trousers",
		"eyes": "grey",
		"height": 177,
		"weight": 88,
		"age": 42
	},
	{ 
		"name": "SUMMER NIEMELA",
		"accessory": "orange tote bag",
		"coat": "green army coat",
		"item": "red necktie",
		"eyes": "brown",
		"height": 165,
		"weight": 74,
		"age": 43
	},
	{ 
		"name": "DRUSILLA PORTOS",
		"accessory": "glass bottle",
		"coat": "black hoodie",
		"item": "purple hat",
		"eyes": "blue",
		"height": 168,
		"weight": 77,
		"age": 28
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

// Declare your function here
function checkSuspect(suspectObj){
	let matchingProperties = 0;
	if(suspectObj.weight >= 71 && suspectObj.weight <= 72) matchingProperties++;
	if(suspectObj.height >= 168 && suspectObj.height <= 197) matchingProperties++;
	if(suspectObj.age >= 30 && suspectObj.age <= 45) matchingProperties++;
	if(suspectObj.item === "dotted necktie") matchingProperties++;
	if(suspectObj.coat === "blue overcoat") matchingProperties++;
	if(suspectObj.accessory === "red backpack") matchingProperties++;
	if(suspectObj.eyes === "pale") matchingProperties++;
	
	return matchingProperties;
	}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    let matchingProperties = checkSuspect(usualSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + usualSuspects[i].name, 60, 60 + i * 20);
  }
}
