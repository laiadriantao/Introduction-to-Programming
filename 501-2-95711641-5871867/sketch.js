/*

Officer: 5871867
CaseNum: 501-2-95711641-5871867

Case 501 - Marrieta Von Neuman - stage 3

For Marrieta a different approach is needed again.
Follow Madame McCarthy’s advice below.

Marrieta was a doting mother but she was also mean player of dice.
To speak to Marrieta beyond the grave you must place a dice in each of the dashed circles.
Use the image() and the diceImg variable command to place each dice in its position.
You will need to use two for loops in a nested pattern to create the grid.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, diceImg;

function preload() {
    backgroundImg = loadImage("background.jpg");
    diceImg = loadImage("Dice.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    for(j = 0 ; j < 4; j++){
        for(i = 0 ; i < 8 ; i++){
            image(diceImg, 510 + i * 70, 340 + j * 75);
        }
    }
}
