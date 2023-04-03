/*

Officer: 5871867
CaseNum: 401-3-74351272-5871867

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If either polonium goes above 0.66, cyanide goes above 0.38, or perhaps formaldehyde goes above 0.54, decrement chalk by 0.02
	- If Amanita_Mushrooms dips below 0.48 and nerve_gas goes above 0.74, whilst at the same time, arsenic goes above 0.69 or warfarin goes above 0.75, increment chalk by 0.04
	- If alcohol goes above 0.26 or formaldehyde dips below 0.55, whilst at the same time, cyanide goes above 0.54 or Amanita_Mushrooms goes above 0.35, try decreasing methylene by 0.01
	- When arsenic dips below 0.27, nerve_gas dips below 0.36, and also polonium dips below 0.67, increase methylene by 0.03
	- If formaldehyde dips below 0.37, warfarin dips below 0.68, Amanita_Mushrooms goes above 0.53, and also cyanide dips below 0.28, reduce Calcium_Gluconate by 0.05
	- If alcohol dips below 0.47 or arsenic dips below 0.37, whilst at the same time, polonium goes above 0.52 or nerve_gas dips below 0.51, try increasing Calcium_Gluconate by 0.02
	- If either formaldehyde dips below 0.59, nerve_gas goes above 0.36, or perhaps cyanide dips below 0.66, reduce antitoxin by 0.04
	- When polonium dips below 0.31, whilst at the same time, warfarin goes above 0.3 or Amanita_Mushrooms dips below 0.32, try increasing antitoxin by 0.03
	- If Amanita_Mushrooms goes above 0.33 or alcohol goes above 0.4, whilst at the same time, arsenic goes above 0.37 and formaldehyde goes above 0.72, try decreasing glucagon by 0.02
	- When cyanide dips below 0.54 and warfarin dips below 0.3, or on the other hand, polonium goes above 0.66 and nerve_gas dips below 0.31, try increasing glucagon by 0.01


Your conditional statements should consider the following poisons:

	- nerve_gas
	- alcohol
	- cyanide
	- polonium
	- warfarin
	- arsenic
	- formaldehyde
	- Amanita_Mushrooms


Your conditional statements should modify the following antidotes:

	- chalk
	- methylene
	- Calcium_Gluconate
	- antitoxin
	- glucagon


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var nerve_gas;
var alcohol;
var cyanide;
var polonium;
var warfarin;
var arsenic;
var formaldehyde;
var Amanita_Mushrooms;


//Declare the antidote variables
var chalk;
var methylene;
var Calcium_Gluconate;
var antitoxin;
var glucagon;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	nerve_gas = 0.5;
	alcohol = 0.5;
	cyanide = 0.5;
	polonium = 0.5;
	warfarin = 0.5;
	arsenic = 0.5;
	formaldehyde = 0.5;
	Amanita_Mushrooms = 0.5;
	chalk = 0.5;
	methylene = 0.5;
	Calcium_Gluconate = 0.5;
	antitoxin = 0.5;
	glucagon = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

  // If either polonium goes above 0.66, cyanide goes above 0.38, or perhaps formaldehyde goes above 0.54, decrement chalk by 0.02
  if (polonium > 0.66 || cyanide > 0.38 || formaldehyde > 0.54) {
    chalk -= 0.02;
  }

  // If Amanita_Mushrooms dips below 0.48 and nerve_gas goes above 0.74, whilst at the same time, arsenic goes above 0.69 or warfarin goes above 0.75, increment chalk by 0.04
  if (Amanita_Mushrooms < 0.48 && nerve_gas > 0.74 && (arsenic > 0.69 || warfarin > 0.75)) {
    chalk += 0.04;
  }

  // If alcohol goes above 0.26 or formaldehyde dips below 0.55, whilst at the same time, cyanide goes above 0.54 or Amanita_Mushrooms goes above 0.35, try decreasing methylene by 0.01
  if ((alcohol > 0.26 || formaldehyde < 0.55) && (cyanide > 0.54 || Amanita_Mushrooms > 0.35)) {
    methylene -= 0.01;
  }

  // When arsenic dips below 0.27, nerve_gas dips below 0.36, and also polonium dips below 0.67, increase methylene by 0.03
  if (arsenic < 0.27 && nerve_gas < 0.36 && polonium < 0.67) {
    methylene += 0.03;
  }

  // If formaldehyde dips below 0.37, warfarin dips below 0.68, Amanita_Mushrooms goes above 0.53, and also cyanide dips below 0.28, reduce Calcium_Gluconate by 0.05
  if (formaldehyde < 0.37 && warfarin < 0.68 && Amanita_Mushrooms > 0.53 && cyanide < 0.28) {
    Calcium_Gluconate -= 0.05;
  }

  // If alcohol dips below 0.47 or arsenic dips below 0.37, whilst at the same time, polonium goes above 0.52 or nerve_gas dips below 0.51, try increasing Calcium_Gluconate by 0.02
  if ((alcohol < 0.47 || arsenic < 0.37) && (polonium > 0.52 || nerve_gas < 0.51)) {
    Calcium_Gluconate += 0.02;
  }

  // If either formaldehyde dips below 0.59, nerve_gas goes above 0.36, or perhaps cyanide dips below 0.66, reduce antitoxin by 0.04
  if (formaldehyde < 0.59 || nerve_gas > 0.36 || cyanide < 0.66) {
    antitoxin -= 0.04;
  }
//   - When polonium dips below 0.31, whilst at the same time, warfarin goes above 0.3 or Amanita_Mushrooms dips below 0.32, try increasing antitoxin by 0.03

//   - If Amanita_Mushrooms goes above 0.33 or alcohol goes above 0.4, whilst at the same time, arsenic goes above 0.37 and formaldehyde goes above 0.72, try decreasing glucagon by 0.02

//   - When cyanide dips below 0.54 and warfarin dips below 0.3, or on the other hand, polonium goes above 0.66 and nerve_gas dips below 0.31, try increasing glucagon by 0.01

if ((polonium < 0.31) && ((warfarin > 0.3) || (Amanita_Mushrooms < 0.32))) {
	antitoxin += 0.03;
  }
  
  if ((Amanita_Mushrooms > 0.33 || alcohol > 0.4) && (arsenic > 0.37 && formaldehyde > 0.72)) {
	glucagon -= 0.02;
  }
  
  if (((cyanide < 0.54) && (warfarin < 0.3)) || ((polonium > 0.66) && (nerve_gas < 0.31))) {
	glucagon += 0.01;
  }
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	nerve_gas = nextValue(graphs[0],nerve_gas);
	alcohol = nextValue(graphs[1],alcohol);
	cyanide = nextValue(graphs[2],cyanide);
	polonium = nextValue(graphs[3],polonium);
	warfarin = nextValue(graphs[4],warfarin);
	arsenic = nextValue(graphs[5],arsenic);
	formaldehyde = nextValue(graphs[6],formaldehyde);
	Amanita_Mushrooms = nextValue(graphs[7],Amanita_Mushrooms);


	chalk = constrain(chalk, 0, 1);
	methylene = constrain(methylene, 0, 1);
	Calcium_Gluconate = constrain(Calcium_Gluconate, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
	glucagon = constrain(glucagon, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals

	var colors = [
		color(255, 0, 0),
		color(0, 255, 0),
		color(0, 0, 255),
		color(255, 0, 255),
		color(255, 255, 0),
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('nerve_gas: ' + nf(nerve_gas,1,2), 20,20);
	fill(colors[1]);
	text('alcohol: ' + nf(alcohol,1,2), 20,40);
	fill(colors[2]);
	text('cyanide: ' + nf(cyanide,1,2), 20,60);
	fill(colors[3]);
	text('polonium: ' + nf(polonium,1,2), 20,80);
	fill(colors[4]);
	text('warfarin: ' + nf(warfarin,1,2), 20,100);
	fill(colors[5]);
	text('arsenic: ' + nf(arsenic,1,2), 20,120);
	fill(colors[6]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,140);
	fill(colors[7]);
	text('Amanita_Mushrooms: ' + nf(Amanita_Mushrooms,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(chalk,50,'chalk');
	drawBar(methylene,200,'methylene');
	drawBar(Calcium_Gluconate,350,'Calcium_Gluconate');
	drawBar(antitoxin,500,'antitoxin');
	drawBar(glucagon,650,'glucagon');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
