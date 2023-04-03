/*

Officer: 5871867
CaseNum: 701-0-73869484-5871867

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist tu monksford and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

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

It all started when I was exiting the store. That's when I noticed them. They were wearing a blue overcoat. It's hard to say. It's so hard to remember right now. Their expression seemed nerveous. The person I saw was male. That's all I know officer. 

*/

var suspectList = [
	{ 
		"name": "BRIDGET TINTLE",
		"expression": "sad",
		"gender": "male",
		"coat": "black overcoat"
	},
	{ 
		"name": "LAKESHA JENI",
		"expression": "nerveous",
		"gender": "male",
		"coat": "blue overcoat"
	},
	{ 
		"name": "TAMICA SILVEIRA",
		"expression": "angry",
		"gender": "male",
		"coat": "black hoodie"
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
	if(suspectObj.coat === "blue overcoat" && suspectObj.gender === "male" && suspectObj.expression === "nerveous"){
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
