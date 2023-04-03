/*

Officer: 5871867
CaseNum: 502-2-87519616-5871867

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;


// arrays to be referenced in redactedText
var DocumentA = {
	Word0: [ "mend", "succeed", "sneeze"], 
	Word1: [ "clip", "meddle", "plug"], 
	Word2: [ "hit", "charge", "rejoice"], 
	Word3: [ "meddle", "bake", "radiate"], 
	Word4: [ "tug", "syndicate", "rejoice"], 
	Word5: [ "charge", "play", "meddle"], 
	Word6: [ "tug", "clip", "tug"], 
	Word7: [ "sneeze", "fence", "clip"], 
	Word8: [ "a donation", "protect", "radiate"], 
	Word9: [ "clip", "plug", "Edsger"]
};

var DocumentB = {
	Word0: [ "clip", "plug", "fence"], 
	Word1: [ "smile", "fence", "play"], 
	Word2: [ "tug", "Governor Zuckerberg", "campaign"], 
	Word3: [ "charge", "succeed", "sneeze"], 
	Word4: [ "start", "succeed", "mend"], 
	Word5: [ "$200,000", "succeed", "clip"], 
	Word6: [ "start", "charge", "smile"], 
	Word7: [ "smile", "sail", "rejoice"], 
	Word8: [ "mend", "Hopper", "smile"], 
	Word9: [ "mend", "ALGOL", "plug"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "Dear "+DocumentB.Word2[1]+", I am sure that something could be worked out in terms of "+DocumentA.Word8[0]+" for your "+DocumentB.Word2[2]+". How does "+DocumentB.Word5[0]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+DocumentB.Word8[1]+" needs to be out of the picture. She’s caused enough trouble. Get the "+DocumentA.Word4[1]+" to organise the "+DocumentA.Word2[0]+" but I’d prefer it you don’t mention me or "+DocumentB.Word9[1]+". I owe them enough favours already. Your old friend, "+DocumentA.Word9[2];

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
