/*

Officer: 5871867
CaseNum: 702-1-39329324-5871867

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

HINT: make sure you take a look at the initialisation of ChaseVehicleObject and the cars in
CarArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveCar()
{
	/*
	This function should do the following: 
	 - increment ChaseVehicleObject's DistAmnt property by its GasAmount property 
	 - add a random amount between -0.07 and 0.07 to ChaseVehicleObject's RumbleAmt property
	 - use the constrain function to constrain ChaseVehicleObject's RumbleAmt property to values between 0.02 and 1.14
	 - call the cycleCar_motor function passing ChaseVehicleObject as an argument
	*/


		ChaseVehicleObject.DistAmnt += ChaseVehicleObject.GasAmount;
		ChaseVehicleObject.RumbleAmt += random(-0.07, 0.07);
		ChaseVehicleObject.RumbleAmt = constrain(ChaseVehicleObject.RumbleAmt, 0.02, 1.14);
		cycleCar_motor(ChaseVehicleObject);
	  
}


function crossLanes(targetVehicle)
{
	/*
	This function should do the following: 
	 - move targetVehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_posA and Lane_posB to effect the change.
	 - finally you should return targetVehicle at the end of the function.
	 hint: You will need to modify the x property of targetVehicle.
	*/  
	if (targetVehicle.x == Lane_posA) {
		targetVehicle.x = Lane_posB;
	} else {
	  targetVehicle.x = Lane_posA;
	}
	return targetVehicle;

}


function carIsAhead( Target_carA, Target_carB )
{
	/*
	This function should do the following: 
	 - determine if Target_carA is in the same lane and less than 200px behind Target_carB.
	 - do this by comparing the two cars' DistAmnt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
	return Target_carA.DistAmnt >= Target_carB.DistAmnt - 200 && Target_carA.y == Target_carB.y;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var ChaseVehicleObject;

var roadWidth;
var roadLeftEdge;
var Lane_posA;
var Lane_posB;
var carImages = {};

var CarArray = [
{ x: 300, y: 0, DistAmnt: -200, VehicleClassification: 'whiteCar', NumberPlate: '15LDOW', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 200, VehicleClassification: 'blueCar', NumberPlate: 'B0J88G', GasAmount: 2, exhaust: [  ]} , { x: 300, y: 0, DistAmnt: 600, VehicleClassification: 'greenCar', NumberPlate: 'LHI5S7', GasAmount: 2, exhaust: [  ]} , { x: 300, y: 0, DistAmnt: 1000, VehicleClassification: 'greenCar', NumberPlate: 'HF1QVM', GasAmount: 2, exhaust: [  ]} , { x: 300, y: 0, DistAmnt: 1400, VehicleClassification: 'greenCar', NumberPlate: '68FHCV', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 1800, VehicleClassification: 'greenCar', NumberPlate: 'B8YCWG', GasAmount: 2, exhaust: [  ]} , { x: 300, y: 0, DistAmnt: 2200, VehicleClassification: 'whiteCar', NumberPlate: 'ZNVML7', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 2600, VehicleClassification: 'whiteCar', NumberPlate: 'W1DRSF', GasAmount: 2, exhaust: [  ]} , { x: 300, y: 0, DistAmnt: 3000, VehicleClassification: 'whiteCar', NumberPlate: 'Z7GA5E', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 3400, VehicleClassification: 'redCar', NumberPlate: 'M5N35E', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 3800, VehicleClassification: 'greenCar', NumberPlate: 'M7HKVN', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 4200, VehicleClassification: 'whiteCar', NumberPlate: 'H7XFQV', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 4600, VehicleClassification: 'blueCar', NumberPlate: 'EXYRP5', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 5000, VehicleClassification: 'redCar', NumberPlate: 'BHKGRF', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 5400, VehicleClassification: 'greenCar', NumberPlate: 'BXEAKS', GasAmount: 2, exhaust: [  ]} , { x: 300, y: 0, DistAmnt: 5800, VehicleClassification: 'greenCar', NumberPlate: 'YW02Q9', GasAmount: 2, exhaust: [  ]} , { x: 500, y: 0, DistAmnt: 6200, VehicleClassification: 'blueCar', NumberPlate: '9BFFN0', GasAmount: 2, exhaust: [  ]} , { x: 300, y: 0, DistAmnt: 6600, VehicleClassification: 'blueCar', NumberPlate: 'UVWL7R', GasAmount: 2, exhaust: [  ]} , { x: 300, y: 0, DistAmnt: 7000, VehicleClassification: 'greenCar', NumberPlate: '00N65J', GasAmount: 2, exhaust: [  ]} , { x: 300, y: 0, DistAmnt: 7400, VehicleClassification: 'greenCar', NumberPlate: 'GI75ZY', GasAmount: 2, exhaust: [  ]} 
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
	Lane_posA = 300;
	Lane_posB = 500;

	ChaseVehicleObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		DistAmnt: 0,
		GasAmount: 3,
		RumbleAmt: 0,
		VehicleClassification: 'detective',
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


	driveCar();
	for(var i = 0; i < CarArray.length; i++)
	{
var b2b = carIsAhead(ChaseVehicleObject, CarArray[i]);
		if(b2b)crossLanes(ChaseVehicleObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarArray.length; i++)
	{
		CarArray[i].DistAmnt += CarArray[i].GasAmount;
		CarArray[i].y = ChaseVehicleObject.y - CarArray[i].DistAmnt + ChaseVehicleObject.DistAmnt;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (ChaseVehicleObject.DistAmnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (ChaseVehicleObject.DistAmnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(ChaseVehicleObject);
	image
	(
		carImages["detective"],
		ChaseVehicleObject.x - carImages["detective"].width/2 + random(-ChaseVehicleObject.RumbleAmt, ChaseVehicleObject.RumbleAmt),
		ChaseVehicleObject.y + random(-ChaseVehicleObject.RumbleAmt, ChaseVehicleObject.RumbleAmt)
	);

	//draw all other cars

	for(var i = 0; i < CarArray.length; i ++)
	{
		if(CarArray[i].y < height && CarArray[i].y > -height/2)
		{
			image(
			carImages[CarArray[i].VehicleClassification],
			CarArray[i].x - carImages[CarArray[i].VehicleClassification].width/2,
			CarArray[i].y
			);
			cycleCar_motor(CarArray[i]);

			drawExhaust(CarArray[i]);
		}
	}

}

function cycleCar_motor(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.VehicleClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.GasAmount/3);
		if(car.VehicleClassification != "detective")car.exhaust[i].y += (ChaseVehicleObject.GasAmount - car.GasAmount);
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
