/*

Officer: 5871867
CaseNum: 702-1-45240830-5871867

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of DetectiveVehicleObject and the cars in
carObjectsList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveVehicle()
{
	/*
	This function should do the following: 
	 - increment DetectiveVehicleObject's KmsTravelled property by its AccelValue property 
	 - add a random amount between -0.04 and 0.04 to DetectiveVehicleObject's EngineVibrateAmount property
	 - use the constrain function to constrain DetectiveVehicleObject's EngineVibrateAmount property to values between 0.02 and 0.82
	 - call the TurnCarMotor function passing DetectiveVehicleObject as an argument
	*/
	DetectiveVehicleObject.KmsTravelled += DetectiveVehicleObject.AccelValue;
	DetectiveVehicleObject.EngineVibrateAmount += random(-0.04, 0.04);
	DetectiveVehicleObject.EngineVibrateAmount = constrain(DetectiveVehicleObject.EngineVibrateAmount, 0.02, 0.82);
	TurnCarMotor(DetectiveVehicleObject);
}


function MoveLanes(car_obj)
{
	/*
	This function should do the following: 
	 - move car_obj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_PositionA and Lane_PositionB to effect the change.
	 hint: You will need to modify the XPosition property of car_obj.
	*/
	if (car_obj.XPosition == Lane_PositionA) {
		car_obj.XPosition = Lane_PositionB;
	} else {
		car_obj.XPosition = Lane_PositionA;
	}
}


function SearchVehicleIsInfront( targetCarA, targetCarB )
{
	/*
	This function should do the following: 
	 - determine if targetCarA is in the same lane and less than 200px behind targetCarB.
	 - do this by comparing the two cars' KmsTravelled properties
	 - if these requirements are met then return the NumberPlate property for targetCarB. Otherwise return false.
	*/



		if (targetCarB.XPosition == targetCarA.XPosition && Math.abs(targetCarA.KmsTravelled - targetCarB.KmsTravelled) < 200) {		
			
			if(Math.abs(targetCarB.YPosition - targetCarA.YPosition) < 200){
				console.log(targetCarB.NumberPlate);
				return targetCarB.NumberPlate;	
			}
			
		} 	
			console.log(false);
			return false;

	



	// if (targetCarB.XPosition == targetCarA.XPosition && targetCarB.KmsTravelled - targetCarA.KmsTravelled < 200) {
	// 	return targetCarB.NumberPlate;
	// } else {
	// 	return false;
	// }

	// Oh......So basically Since the function mostly stays in the undefined state the outer if statement stays false untill it become  something. 
	// when it becomes false it just returns false but if it's true then the inner if statement is triggered and then the .nemberplate is checked

/* 	if (myFunc()) {
		if (myFunc().NumberPlate) {
		   return
		} else {
		   return false;
		  }
	 } */

	 
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var DetectiveVehicleObject;

var roadWidth;
var roadLeftEdge;
var Lane_PositionA;
var Lane_PositionB;
var carImages = {};

var carObjectsList = [
{ XPosition: 300, YPosition: 0, KmsTravelled: -200, CarType: 'blueCar', NumberPlate: '1HWOZ5', AccelValue: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, KmsTravelled: 200, CarType: 'redCar', NumberPlate: 'XZB9OP', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 600, CarType: 'whiteCar', NumberPlate: '5RB9YZ', AccelValue: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, KmsTravelled: 1000, CarType: 'blueCar', NumberPlate: 'M5Z8N6', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 1400, CarType: 'blueCar', NumberPlate: 'IOH7D2', AccelValue: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, KmsTravelled: 1800, CarType: 'blueCar', NumberPlate: 'LXGUIG', AccelValue: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, KmsTravelled: 2200, CarType: 'redCar', NumberPlate: 'UZKZFZ', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 2600, CarType: 'redCar', NumberPlate: '7ININ7', AccelValue: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, KmsTravelled: 3000, CarType: 'redCar', NumberPlate: '3MIB75', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 3400, CarType: 'greenCar', NumberPlate: '2QD28O', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 3800, CarType: 'blueCar', NumberPlate: 'CTSYI3', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 4200, CarType: 'greenCar', NumberPlate: 'ESHF8A', AccelValue: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, KmsTravelled: 4600, CarType: 'blueCar', NumberPlate: 'U9DFV9', AccelValue: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, KmsTravelled: 5000, CarType: 'whiteCar', NumberPlate: '23TBTW', AccelValue: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, KmsTravelled: 5400, CarType: 'blueCar', NumberPlate: 'MSSLSM', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 5800, CarType: 'whiteCar', NumberPlate: 'HW5158', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 6200, CarType: 'whiteCar', NumberPlate: 'VHERT4', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 6600, CarType: 'redCar', NumberPlate: '7KGFTT', AccelValue: 2, exhaust: [  ]} , { XPosition: 500, YPosition: 0, KmsTravelled: 7000, CarType: 'blueCar', NumberPlate: 'G4ZLRS', AccelValue: 2, exhaust: [  ]} , { XPosition: 300, YPosition: 0, KmsTravelled: 7400, CarType: 'whiteCar', NumberPlate: 'QRVFOF', AccelValue: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_PositionA = 300;
	Lane_PositionB = 500;

	DetectiveVehicleObject = 
	{
		XPosition: roadLeftEdge + roadWidth/4,
		YPosition: 550,
		KmsTravelled: 0,
		AccelValue: 3,
		EngineVibrateAmount: 0,
		CarType: 'detective',
		NumberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	MoveVehicle();
	for(var i = 0; i < carObjectsList.length; i++)
	{
var b2b = SearchVehicleIsInfront(DetectiveVehicleObject, carObjectsList[i]);
		if(b2b)MoveLanes(DetectiveVehicleObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObjectsList.length; i++)
	{
		carObjectsList[i].KmsTravelled += carObjectsList[i].AccelValue;
		carObjectsList[i].YPosition = DetectiveVehicleObject.YPosition - carObjectsList[i].KmsTravelled + DetectiveVehicleObject.KmsTravelled;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (DetectiveVehicleObject.KmsTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (DetectiveVehicleObject.KmsTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(DetectiveVehicleObject);
	image
	(
		carImages["detective"],
		DetectiveVehicleObject.XPosition - carImages["detective"].width/2 + random(-DetectiveVehicleObject.EngineVibrateAmount, DetectiveVehicleObject.EngineVibrateAmount),
		DetectiveVehicleObject.YPosition + random(-DetectiveVehicleObject.EngineVibrateAmount, DetectiveVehicleObject.EngineVibrateAmount)
	);

	//draw all other cars

	for(var i = 0; i < carObjectsList.length; i ++)
	{
		if(carObjectsList[i].YPosition < height && carObjectsList[i].YPosition > -height/2)
		{
			image(
			carImages[carObjectsList[i].CarType],
			carObjectsList[i].XPosition - carImages[carObjectsList[i].CarType].width/2,
			carObjectsList[i].YPosition
			);
			TurnCarMotor(carObjectsList[i]);

			drawExhaust(carObjectsList[i]);
		}
	}

}

function TurnCarMotor(car)
{

	car.exhaust.push({size: 2, x: car.XPosition, y: car.YPosition + carImages[car.CarType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.AccelValue/3);
		if(car.CarType != "detective")car.exhaust[i].y += (DetectiveVehicleObject.AccelValue - car.AccelValue);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
