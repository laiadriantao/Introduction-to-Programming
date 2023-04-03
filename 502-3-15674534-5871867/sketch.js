/*

Officer: 5871867
CaseNum: 502-3-15674534-5871867

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var Archive_A = [
{
	Fragment_0: {Detail_0: "plug", Detail_1: "sail", Detail_2: "consider", Detail_3: "sneeze"}, 
	Fragment_1: {Detail_0: "fence", Detail_1: "meddle", Detail_2: "protect", Detail_3: "fence"}, 
	Fragment_2: {Detail_0: "succeed", Detail_1: "meddle", Detail_2: "plug", Detail_3: "radiate"}
},
{
	Fragment_0: {Detail_0: "fence", Detail_1: "stuff", Detail_2: "tug", Detail_3: "play"}, 
	Fragment_1: {Detail_0: "fence", Detail_1: "protect", Detail_2: "smile", Detail_3: "start"}, 
	Fragment_2: {Detail_0: "stuff", Detail_1: "hurry", Detail_2: "radiate", Detail_3: "protect"}
},
{
	Fragment_0: {Detail_0: "mend", Detail_1: "sail", Detail_2: "protect", Detail_3: "tug"}, 
	Fragment_1: {Detail_0: "Governor Zuckerberg", Detail_1: "succeed", Detail_2: "stuff", Detail_3: "play"}, 
	Fragment_2: {Detail_0: "sail", Detail_1: "plug", Detail_2: "rejoice", Detail_3: "bake"}
},
{
	Fragment_0: {Detail_0: "fence", Detail_1: "tug", Detail_2: "sail", Detail_3: "radiate"}, 
	Fragment_1: {Detail_0: "syndicate", Detail_1: "you", Detail_2: "start", Detail_3: "mend"}, 
	Fragment_2: {Detail_0: "charge", Detail_1: "radiate", Detail_2: "consider", Detail_3: "plug"}
},
{
	Fragment_0: {Detail_0: "development", Detail_1: "succeed", Detail_2: "radiate", Detail_3: "rejoice"}, 
	Fragment_1: {Detail_0: "succeed", Detail_1: "protect", Detail_2: "charge", Detail_3: "succeed"}, 
	Fragment_2: {Detail_0: "mend", Detail_1: "Edsger", Detail_2: "plug", Detail_3: "succeed"}
}];

var Archive_B = [
{
	Fragment_0: {Detail_0: "hurry", Detail_1: "consider", Detail_2: "protect", Detail_3: "COBOL"}, 
	Fragment_1: {Detail_0: "fence", Detail_1: "bake", Detail_2: "smile", Detail_3: "bake"}, 
	Fragment_2: {Detail_0: "bake", Detail_1: "ALGOL fish wholesalers", Detail_2: "radiate", Detail_3: "smile"}
},
{
	Fragment_0: {Detail_0: "meddle", Detail_1: "smile", Detail_2: "succeed", Detail_3: "rejoice"}, 
	Fragment_1: {Detail_0: "protect", Detail_1: "plug", Detail_2: "sneeze", Detail_3: "start"}, 
	Fragment_2: {Detail_0: "$200,000", Detail_1: "consider", Detail_2: "stuff", Detail_3: "smile"}
},
{
	Fragment_0: {Detail_0: "sail", Detail_1: "meddle", Detail_2: "smile", Detail_3: "protect"}, 
	Fragment_1: {Detail_0: "sail", Detail_1: "donation", Detail_2: "play", Detail_3: "ALGOL"}, 
	Fragment_2: {Detail_0: "meddle", Detail_1: "start", Detail_2: "protect", Detail_3: "play"}
},
{
	Fragment_0: {Detail_0: "bake", Detail_1: "hurry", Detail_2: "sneeze", Detail_3: "protect"}, 
	Fragment_1: {Detail_0: "plug", Detail_1: "play", Detail_2: "sneeze", Detail_3: "succeed"}, 
	Fragment_2: {Detail_0: "charge", Detail_1: "mend", Detail_2: "fence", Detail_3: "protect"}
},
{
	Fragment_0: {Detail_0: "bake", Detail_1: "start", Detail_2: "charge", Detail_3: "clip"}, 
	Fragment_1: {Detail_0: "hurry", Detail_1: "stuff", Detail_2: "stuff", Detail_3: "play"}, 
	Fragment_2: {Detail_0: "fence", Detail_1: "mend", Detail_2: "fence", Detail_3: "sail"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest "+Archive_A[4].Fragment_2.Detail_1+", I have just received your very generous "+Archive_B[2].Fragment_1.Detail_1+" of "+Archive_B[1].Fragment_2.Detail_0+". Thank you. This will be invaluable to our campaign. "+Archive_B[2].Fragment_1.Detail_3+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+Archive_A[3].Fragment_1.Detail_1+" or "+Archive_B[0].Fragment_2.Detail_1+" to the "+Archive_A[3].Fragment_1.Detail_0+". Your new "+Archive_A[4].Fragment_0.Detail_0+" at the "+Archive_B[0].Fragment_0.Detail_3+" can now proceed without impediment. Yours sincerely, "+Archive_A[2].Fragment_1.Detail_0;

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
