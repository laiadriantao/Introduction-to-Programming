/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 5871867
CaseNum: 802-2-87660784-5871867

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! 
I’ve counted the cards and I know what you need to win. 
Make sure you deal yourself the hand in winningHand from the deck and store it in the hand array.

- Write a function called buildWinningHand and call it from setup.
- The function should take each card in winningHand and seacrh for a match in deck.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 1 and 56.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var deck = [ { cardSuit: 'Spades', n: 'A'} , { cardSuit: 'Spades', n: '2'} , { cardSuit: 'Spades', n: '3'} , { cardSuit: 'Spades', n: '4'} , { cardSuit: 'Spades', n: '5'} , { cardSuit: 'Spades', n: '6'} , { cardSuit: 'Spades', n: '7'} , { cardSuit: 'Spades', n: '8'} , { cardSuit: 'Spades', n: '9'} , { cardSuit: 'Spades', n: '10'} , { cardSuit: 'Spades', n: 'J'} , { cardSuit: 'Spades', n: 'Q'} , { cardSuit: 'Spades', n: 'K'} , { cardSuit: 'Clubs', n: 'A'} , { cardSuit: 'Clubs', n: '2'} , { cardSuit: 'Clubs', n: '3'} , { cardSuit: 'Clubs', n: '4'} , { cardSuit: 'Clubs', n: '5'} , { cardSuit: 'Clubs', n: '6'} , { cardSuit: 'Clubs', n: '7'} , { cardSuit: 'Clubs', n: '8'} , { cardSuit: 'Clubs', n: '9'} , { cardSuit: 'Clubs', n: '10'} , { cardSuit: 'Clubs', n: 'J'} , { cardSuit: 'Clubs', n: 'Q'} , { cardSuit: 'Clubs', n: 'K'} , { cardSuit: 'Hearts', n: 'A'} , { cardSuit: 'Hearts', n: '2'} , { cardSuit: 'Hearts', n: '3'} , { cardSuit: 'Hearts', n: '4'} , { cardSuit: 'Hearts', n: '5'} , { cardSuit: 'Hearts', n: '6'} , { cardSuit: 'Hearts', n: '7'} , { cardSuit: 'Hearts', n: '8'} , { cardSuit: 'Hearts', n: '9'} , { cardSuit: 'Hearts', n: '10'} , { cardSuit: 'Hearts', n: 'J'} , { cardSuit: 'Hearts', n: 'Q'} , { cardSuit: 'Hearts', n: 'K'} , { cardSuit: 'Diamonds', n: 'A'} , { cardSuit: 'Diamonds', n: '2'} , { cardSuit: 'Diamonds', n: '3'} , { cardSuit: 'Diamonds', n: '4'} , { cardSuit: 'Diamonds', n: '5'} , { cardSuit: 'Diamonds', n: '6'} , { cardSuit: 'Diamonds', n: '7'} , { cardSuit: 'Diamonds', n: '8'} , { cardSuit: 'Diamonds', n: '9'} , { cardSuit: 'Diamonds', n: '10'} , { cardSuit: 'Diamonds', n: 'J'} , { cardSuit: 'Diamonds', n: 'Q'} , { cardSuit: 'Diamonds', n: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var winningHand = [ { suit: 'Hearts', number: 'K'} , { suit: 'Spades', number: '10'} , { suit: 'Clubs', number: 'K'} , { suit: 'Diamonds', number: 'Q'} , { suit: 'Hearts', number: 'Q'}  ];
var hand =[];

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
	//call your buildWinningHand function here
	const seed = shuffleSeed();
	shuffleDeck(seed);
	buildWinningHand();

}

//write your buildWinningHand function here
function buildWinningHand() {
	for (let i = 0; i < winningHand.length; i++) {
	  	for (let j = 0; j < deck.length; j++) {
			if (winningHand[i].suit === deck[j].cardSuit && winningHand[i].number === deck[j].n) {
		  		hand.push(deck[j]);
		  		break;
			}
	  	}
	}
}

//write your shuffleSeed() function here.

function shuffleSeed() {
	const seed = [];
	for (let i = 0; i < 52; i++) {
	  seed.push(round(random(1, 56)));
	}
	return seed;
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
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
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
			if (card.n == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
