/*

Officer: 5871867
CaseNum: 702-0-67764756-5871867

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuthPIVehicleObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle()
{
	/*
	This function should do the following: 
	 - increment sleuthPIVehicleObject's distanceAmount property by its gasAmount property 
	 - add a random amount between -0.03 and 0.03 to sleuthPIVehicleObject's shudderValue property
	 - use the constrain function to constrain sleuthPIVehicleObject's shudderValue property to values between 0.07 and 0.75
	 - call the Turnover_Motor function passing sleuthPIVehicleObject as an argument
	*/

    sleuthPIVehicleObject.distanceAmount += sleuthPIVehicleObject.gasAmount;
    sleuthPIVehicleObject.shudderValue += random(-0.03, 0.03);
    sleuthPIVehicleObject.shudderValue = constrain(sleuthPIVehicleObject.shudderValue, 0.07, 0.75);
    Turnover_Motor(sleuthPIVehicleObject);

}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPIVehicleObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	sleuthPIVehicleObject = 
	{
		coordX: roadLeftEdge + roadWidth/4,
		coordY: 300,
		distanceAmount: 0,
		gasAmount: 3,
		shudderValue: 0,
		carCategory: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	Drive_Vehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPIVehicleObject.distanceAmount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPIVehicleObject.distanceAmount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthPIVehicleObject);
	image
	(
		carImages["detective"],
		sleuthPIVehicleObject.coordX - carImages["detective"].width/2 + random(-sleuthPIVehicleObject.shudderValue, sleuthPIVehicleObject.shudderValue),
		sleuthPIVehicleObject.coordY + random(-sleuthPIVehicleObject.shudderValue, sleuthPIVehicleObject.shudderValue)
	);

}

function Turnover_Motor(car)
{

	car.exhaust.push({size: 2, x: car.coordX, y: car.coordY + carImages[car.carCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasAmount/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
