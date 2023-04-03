/*

Officer: 5871867
CaseNum: 202-1-47018537-5871867

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Light Coral filled text with a Lime Green outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(592,438);
	textFont(letterFont);
	textSize(28);
}

function draw()
{
	background(255);

	fill(255,165,0);
	stroke(0,250,154);
	//text("Bob,", 93,28);
	fill(173,255,47);
	//text("My", 7,28);
	fill(240,230,140);
	stroke(50,205,50);
	//text("in", 533,147);
	fill(178,34,34);
	stroke(0,206,209);
	//text("?", 551,211);
	fill(0,0,139);
	stroke(128,0,128);
	//text("you.", 195,147);
	stroke(178,34,34);
	//text("ng,", 40,176);
	fill(0,100,0);
	stroke(255,0,0);
	//text("you", 135,176);
	fill(128,128,0);
	stroke(139,0,0);
	//text("in", 261,114);
	fill(218,165,32);
	stroke(46,139,87);
	//text("hold", 192,114);
	fill(173,255,47);
	stroke(178,34,34);
	//text("I", 45,84);
	fill(135,206,250);
	stroke(0,255,255);
	//text("l", 251,211);
	fill(255,140,0);
	stroke(0,128,0);
	//text("stare", 372,114);
	fill(176,224,230);
	stroke(139,0,139);
	//text("and", 10,147);
	fill(135,206,235);
	stroke(255,255,0);
	//text("do", 59,211);
	fill(255,127,80);
	stroke(0,191,255);
	//text("banking", 261,147);
	fill(148,0,211);
	stroke(148,0,211);
	//text("longer", 8,211);
	fill(0,0,255);
	stroke(210,105,30);
	//text("s.", 337,114);
	fill(240,230,140);
	stroke(255,255,0);
	//text("be", 433,211);
	fill(0,128,0);
	stroke(160,82,45);
	//text("Forever", 7,267);
	fill(0,206,209);
	stroke(178,34,34);
	//text("my", 279,114);
	fill(139,0,0);
	stroke(139,0,139);
	//text("When", 323,211);
	fill(0,0,128);
	stroke(160,82,45);
	//text("I", 357,114);
	fill(144,238,144);
	stroke(255,0,255);
	//text("arm", 308,114);
	fill(218,165,32);
	stroke(165,42,42);
	//text("night", 501,114);
	fill(138,43,226);
	stroke(127,255,0);
	//text("kissed", 45,114);
	fill(144,238,144);
	stroke(32,178,170);
	//text("long", 132,114);
	fill(255,127,80);
	stroke(0,139,139);
	//text("x", 56,323);
	fill(186,85,211);
	stroke(0,255,127);
	//text("will", 372,211);
	fill(240,230,140);
	stroke(210,105,30);
	//text("mon", 407,84);
	fill(165,42,42);
	stroke(50,205,50);
	//text("the", 551,147);
	fill(127,255,212);
	stroke(139,0,139);
	//text("we", 554,84);
	fill(0,206,209);
	stroke(154,205,50);
	//text("much", 539,176);
	fill(128,0,0);
	stroke(218,165,32);
	//text("this", 257,176);
	fill(107,142,35);
	stroke(0,191,255);
	//text("of", 171,147);
	fill(222,184,135);
	stroke(184,134,11);
	//text("yours,", 71,267);
	fill(233,150,122);
	stroke(255,140,0);
	//text("only", 135,147);
	fill(219,112,147);
	stroke(0,250,154);
	//text("without", 69,176);
	fill(100,149,237);
	stroke(46,139,87);
	//text("Da", 7,323);
	fill(123,104,238);
	stroke(0,100,0);
	//text("onging", 254,211);
	fill(186,85,211);
	stroke(0,128,0);
	//text("I'm", 230,147);
	fill(255,105,180);
	stroke(0,255,127);
	//text("feels", 383,176);
	fill(128,128,0);
	stroke(46,139,87);
	//text("last", 8,114);
	fill(139,0,0);
	stroke(210,105,30);
	//text("think", 91,147);
	fill(135,206,250);
	stroke(154,205,50);
	//text("my", 191,176);
	fill(244,164,96);
	stroke(0,0,139);
	//text("this", 214,211);
	fill(255,99,71);
	stroke(0,0,128);
	//text("desolate.", 427,176);
	fill(176,224,230);
	stroke(0,100,0);
	//text("you", 157,84);
	fill(244,164,96);
	stroke(220,20,60);
	//text("I", 84,211);
	fill(210,105,30);
	//text("ths", 437,84);
	fill(0,100,0);
	stroke(127,255,0);
	//text("How", 501,176);
	fill(100,149,237);
	stroke(255,165,0);
	//text("around", 189,84);
	fill(65,105,225);
	stroke(0,250,154);
	//text("the", 469,114);
	fill(72,209,204);
	stroke(32,178,170);
	//text("on", 322,147);
	fill(255,69,0);
	stroke(139,0,0);
	//text("since", 509,84);
	fill(139,0,139);
	stroke(0,250,154);
	//text("spri", 10,176);
	fill(0,255,127);
	stroke(139,0,139);
	//text("at", 167,176);
	fill(178,34,34);
	stroke(220,20,60);
	//text("we", 403,211);
	fill(219,112,147);
	stroke(128,0,0);
	//text("many", 361,84);
	fill(255,0,0);
	stroke(0,128,0);
	//text("return.", 436,147);
	stroke(255,0,255);
	//text("to", 141,211);
	fill(139,69,19);
	stroke(0,128,0);
	//text("?", 101,114);
	fill(0,100,0);
	stroke(0,191,255);
	//text("sky,", 545,114);
	fill(0,139,139);
	stroke(139,0,0);
	//text("to", 168,114);
	fill(255,127,80);
	stroke(255,0,0);
	//text("it", 491,84);
	fill(144,238,144);
	stroke(184,134,11);
	//text("small", 294,176);
	fill(72,209,204);
	stroke(255,0,255);
	//text("Even", 491,147);
	fill(255,105,180);
	stroke(255,215,0);
	//text("?", 307,211);
	fill(240,128,128);
	stroke(50,205,50);
	text("place", 277,84);
	text("side", 220,176);
	fill(160,82,45);
	stroke(0,0,139);
	//text("How", 323,84);
	fill(238,232,170);
	stroke(184,134,11);
	//text("How", 7,84);
	fill(128,0,128);
	stroke(34,139,34);
	//text("at", 445,114);
	fill(0,250,154);
	stroke(148,0,211);
	//text("darling", 38,28);
	fill(64,224,208);
	stroke(0,255,127);
	//text("isy", 27,323);
	fill(255,69,0);
	stroke(0,255,255);
	//text("you", 229,114);
	fill(139,69,19);
	stroke(46,139,87);
	//text("your", 346,147);
	fill(218,112,214);
	stroke(0,128,0);
	//text("I", 117,114);
	fill(165,42,42);
	stroke(0,191,255);
	//text("up", 421,114);
	fill(240,128,128);
	stroke(50,205,50);
	text("swift", 385,147);
	text("the", 245,84);
	fill(144,238,144);
	stroke(75,0,130);
	//text("town", 339,176);
	fill(138,43,226);
	stroke(184,134,11);
	//text("again", 506,211);
	fill(240,128,128);
	stroke(50,205,50);
	text("store", 165,211);
	fill(139,69,19);
	stroke(139,69,19);
	//text("I", 43,147);
	fill(144,238,144);
	stroke(184,134,11);
	//text("miss", 60,84);
	fill(240,128,128);
	stroke(50,205,50);
	text("is", 471,84);
	fill(138,43,226);
	stroke(199,21,133);
	//text("having", 103,84);
	fill(25,25,112);
	stroke(220,20,60);
	//text("have", 99,211);
	fill(147,112,219);
	//text("can", 58,147);
	fill(0,206,209);
	stroke(255,140,0);
	//text("united", 456,211);



}
