/*

Officer: 5871867
CaseNum: 701-1-71990999-5871867

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. By the look of them they were younger than 45. I'll never forget their green eyes. I distinctly remember that they were wearing a fur vest, I remember thinking that was quite unusual. I remember they had a big arrow tattoo. I'm not quite sure. They were carrying a plastic box. It's hard to say. I would say they were shorter than 185 cm. Can I go home now Sir? 

*/

var suspectList = [
	{ 
		"name": "BRAD MYRLE",
		"tattoo": "big arrow",
		"item": "fur vest",
		"accessory": "plastic box",
		"age": 42,
		"height": 175
	},
	{ 
		"name": "ERMELINDA SYMMES",
		"tattoo": "jellyfish",
		"item": "red necktie",
		"accessory": "brown paper bag",
		"age": 45,
		"height": 165
	},
	{ 
		"name": "MAJORIE PEGORD",
		"tattoo": "ox",
		"item": "dotted necktie",
		"accessory": "glass bottle",
		"age": 47,
		"height": 155
	},
	{ 
		"name": "LAVERNE WILLMAR",
		"tattoo": "dark black",
		"item": "orange socks",
		"accessory": "laptop bag",
		"age": 72,
		"height": 190
	},
	{ 
		"name": "JENIFFER JENI",
		"tattoo": "facial",
		"item": "pair of leather trousers",
		"accessory": "metal briefcase",
		"age": 45,
		"height": 171
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
function matchProperties(suspectObj){
if(suspectObj.age < 45 && suspectObj.item === "fur vest" && suspectObj.tattoo === "big arrow" && suspectObj.accessory === "plastic box" && suspectObj.height < 185){
return true;
}else{
return false;
}
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    if(matchProperties(suspectList[i]) == true){
      fill(255,0,0);
      text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectList[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
