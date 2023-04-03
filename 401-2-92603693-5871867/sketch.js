/*

Officer: 5871867
CaseNum: 401-2-92603693-5871867

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When botulinium dips below 0.47 and novichok dips below 0.26, or on the other hand, arsenic dips below 0.66, try decreasing CalciumGluconate by 0.01
	- If Amanita_Mushrooms dips below 0.4, methanol dips below 0.42, and also Snake_Venom goes above 0.57, increase CalciumGluconate by 0.03
	- When methanol dips below 0.6 and Amanita_Mushrooms dips below 0.37, reduce betaBlocker by 0.01
	- If Snake_Venom dips below 0.63 and novichok dips below 0.54, increment betaBlocker by 0.02
	- When either botulinium dips below 0.39, novichok goes above 0.63, or perhaps Amanita_Mushrooms goes above 0.57, try decreasing opioids by 0.02
	- If arsenic goes above 0.41, methanol goes above 0.55, and also Snake_Venom dips below 0.33, raise opioids by 0.05
	- If arsenic dips below 0.33, or on the other hand, Snake_Venom goes above 0.72 and Amanita_Mushrooms dips below 0.32, decrement antitoxin by 0.03
	- When methanol goes above 0.54 and botulinium goes above 0.62, raise antitoxin by 0.04


Your conditional statements should consider the following poisons:

	- methanol
	- arsenic
	- novichok
	- botulinium
	- Snake_Venom
	- Amanita_Mushrooms


Your conditional statements should modify the following antidotes:

	- CalciumGluconate
	- betaBlocker
	- opioids
	- antitoxin


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
var methanol;
var arsenic;
var novichok;
var botulinium;
var Snake_Venom;
var Amanita_Mushrooms;


//Declare the antidote variables
var CalciumGluconate;
var betaBlocker;
var opioids;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	arsenic = 0.5;
	novichok = 0.5;
	botulinium = 0.5;
	Snake_Venom = 0.5;
	Amanita_Mushrooms = 0.5;
	CalciumGluconate = 0.5;
	betaBlocker = 0.5;
	opioids = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

	if((botulinium < 0.47 && novichok < 0.26) || (arsenic < 0.66)){
		CalciumGluconate -= 0.01;
	  }
	
	  if(Amanita_Mushrooms < 0.4 && methanol < 0.42 && Snake_Venom > 0.57){
		CalciumGluconate += 0.03;
	  }
	
	  if(methanol < 0.6 && Amanita_Mushrooms < 0.37){
		betaBlocker -= 0.01;
	  }
	
	  if(Snake_Venom < 0.63 && novichok < 0.54){
		betaBlocker += 0.02;
	  }
	
	  if(botulinium < 0.39 || novichok > 0.63 || Amanita_Mushrooms > 0.57){
		opioids -= 0.02;
	  }
	
	  if(arsenic > 0.41 && methanol > 0.55 && Snake_Venom < 0.33){
		opioids += 0.05;
	  }
	
	  if(arsenic < 0.33 || (Snake_Venom > 0.72 && Amanita_Mushrooms < 0.32)){
		antitoxin -= 0.03;
	  }
	
	  if(methanol > 0.54 && botulinium > 0.62){
		antitoxin += 0.04;
	  }
	


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	arsenic = nextValue(graphs[1],arsenic);
	novichok = nextValue(graphs[2],novichok);
	botulinium = nextValue(graphs[3],botulinium);
	Snake_Venom = nextValue(graphs[4],Snake_Venom);
	Amanita_Mushrooms = nextValue(graphs[5],Amanita_Mushrooms);


	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	betaBlocker = constrain(betaBlocker, 0, 1);
	opioids = constrain(opioids, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


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
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('novichok: ' + nf(novichok,1,2), 20,60);
	fill(colors[3]);
	text('botulinium: ' + nf(botulinium,1,2), 20,80);
	fill(colors[4]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,100);
	fill(colors[5]);
	text('Amanita_Mushrooms: ' + nf(Amanita_Mushrooms,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(CalciumGluconate,50,'CalciumGluconate');
	drawBar(betaBlocker,200,'betaBlocker');
	drawBar(opioids,350,'opioids');
	drawBar(antitoxin,500,'antitoxin');


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
