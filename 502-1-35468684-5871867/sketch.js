/*

Officer: 5871867
CaseNum: 502-1-35468684-5871867

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var AListing = [
	{redactedWord0: "succeed", redactedWord1: "play", redactedWord2: "fence"}, 
	{redactedWord0: "consider", redactedWord1: "COBOL", redactedWord2: "plug"}, 
	{redactedWord0: "bake", redactedWord1: "bake", redactedWord2: "bake"}, 
	{redactedWord0: "sneeze", redactedWord1: "bake", redactedWord2: "radiate"}, 
	{redactedWord0: "protect", redactedWord1: "fence", redactedWord2: "fence"}, 
	{redactedWord0: "sneeze", redactedWord1: "a donation", redactedWord2: "sneeze"}, 
	{redactedWord0: "tug", redactedWord1: "clip", redactedWord2: "stuff"}, 
	{redactedWord0: "meddle", redactedWord1: "start", redactedWord2: "bake"}, 
	{redactedWord0: "charge", redactedWord1: "mend", redactedWord2: "plug"}, 
	{redactedWord0: "meddle", redactedWord1: "mend", redactedWord2: "protect"}
];

var BListing = [
	{redactedWord0: "clip", redactedWord1: "smile", redactedWord2: "tug"}, 
	{redactedWord0: "rejoice", redactedWord1: "she has", redactedWord2: "syndicate"}, 
	{redactedWord0: "start", redactedWord1: "Governor Zuckerberg", redactedWord2: "consider"}, 
	{redactedWord0: "delicate", redactedWord1: "consider", redactedWord2: "bake"}, 
	{redactedWord0: "rejoice", redactedWord1: "mend", redactedWord2: "smile"}, 
	{redactedWord0: "hurry", redactedWord1: "hurry", redactedWord2: "sneeze"}, 
	{redactedWord0: "rejoice", redactedWord1: "radiate", redactedWord2: "Hopper’s"}, 
	{redactedWord0: "romantic", redactedWord1: "bake", redactedWord2: "sail"}, 
	{redactedWord0: "Edsger", redactedWord1: "radiate", redactedWord2: "sneeze"}, 
	{redactedWord0: "capital", redactedWord1: "fence", redactedWord2: "start"}
];

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
  redactedText = "My dearest" +BListing[8].redactedWord0+", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " +BListing[6].redactedWord2+" intervention.  I suspect that " +BListing[1].redactedWord1+" a " +BListing[7].redactedWord0+" interest at the " +AListing[1].redactedWord1+". I and the " +BListing[1].redactedWord2+" appreciate your many contributions over the years. However, this is a most " +BListing[3].redactedWord0+" matter which would require significant " +BListing[9].redactedWord0+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " +AListing[5].redactedWord1+" to my forthcoming campaign would help.  Yours sincerely, " +BListing[2].redactedWord1;

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
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
