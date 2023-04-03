/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 5871867
CaseNum: 802-3-24747737-5871867

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 2 and 69.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cutHere object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called deckCut and call it from setup.
- This should search for card matching cutHere inside deck.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the deck array in the deck_upto_cut array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in deck_upto_cut so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/

var deck = [ { type: 'Spades', v: 'A'} , { type: 'Spades', v: '2'} , { type: 'Spades', v: '3'} , { type: 'Spades', v: '4'} , { type: 'Spades', v: '5'} , { type: 'Spades', v: '6'} , { type: 'Spades', v: '7'} , { type: 'Spades', v: '8'} , { type: 'Spades', v: '9'} , { type: 'Spades', v: '10'} , { type: 'Spades', v: 'J'} , { type: 'Spades', v: 'Q'} , { type: 'Spades', v: 'K'} , { type: 'Clubs', v: 'A'} , { type: 'Clubs', v: '2'} , { type: 'Clubs', v: '3'} , { type: 'Clubs', v: '4'} , { type: 'Clubs', v: '5'} , { type: 'Clubs', v: '6'} , { type: 'Clubs', v: '7'} , { type: 'Clubs', v: '8'} , { type: 'Clubs', v: '9'} , { type: 'Clubs', v: '10'} , { type: 'Clubs', v: 'J'} , { type: 'Clubs', v: 'Q'} , { type: 'Clubs', v: 'K'} , { type: 'Hearts', v: 'A'} , { type: 'Hearts', v: '2'} , { type: 'Hearts', v: '3'} , { type: 'Hearts', v: '4'} , { type: 'Hearts', v: '5'} , { type: 'Hearts', v: '6'} , { type: 'Hearts', v: '7'} , { type: 'Hearts', v: '8'} , { type: 'Hearts', v: '9'} , { type: 'Hearts', v: '10'} , { type: 'Hearts', v: 'J'} , { type: 'Hearts', v: 'Q'} , { type: 'Hearts', v: 'K'} , { type: 'Diamonds', v: 'A'} , { type: 'Diamonds', v: '2'} , { type: 'Diamonds', v: '3'} , { type: 'Diamonds', v: '4'} , { type: 'Diamonds', v: '5'} , { type: 'Diamonds', v: '6'} , { type: 'Diamonds', v: '7'} , { type: 'Diamonds', v: '8'} , { type: 'Diamonds', v: '9'} , { type: 'Diamonds', v: '10'} , { type: 'Diamonds', v: 'J'} , { type: 'Diamonds', v: 'Q'} , { type: 'Diamonds', v: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var cutHere = { card_suit: 'Hearts', value: '4'} ;
var deck_upto_cut = [];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.

	//call your deckCut function here
	let shuffleSeedArr = shuffleSeed();
	shuffleDeck(shuffleSeedArr);
	deckCut();
}

//write your deckCut function here
function deckCut() {
	let cutIndex = -1;
	for (let i = 0; i < deck.length; i++) {
		if (deck[i].type == cutHere.card_suit && deck[i].v == cutHere.value) {
			cutIndex = i;
			break;
		}
	}
	if (cutIndex != -1) {
		deck_upto_cut = deck.splice(cutIndex);
		for (let i = 0; i < deck_upto_cut.length / 2; i++) {
			const temp = deck_upto_cut[i];
			deck_upto_cut[i] = deck_upto_cut[deck_upto_cut.length - i - 1];
			deck_upto_cut[deck_upto_cut.length - i - 1] = temp;
		}
	}
}
//write your shuffleSeed() function here.
function shuffleSeed(){
	let arr = [];
	for(let i=0; i<52; i++){
		arr.push(Math.round(random(2,69)));
	}
	return arr;
}
/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < deck.length; j++)
	   {
		  var tempCard = deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if(i < deck_upto_cut.length)
		{
			drawCard(deck_upto_cut[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.v == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
