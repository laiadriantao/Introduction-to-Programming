function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(2);

	//robots head
	fill(240,230,140);
	rect(100, 100, 300, 300, 25);


	//robots antenna
	fill(192, 192, 192);
	ellipse(250, 70, 60, 60);

	fill(0, 153, 153);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255);
	ellipse(175, 200, 80, 80);
	ellipse(175, 200, 40, 40);
	point(175, 200);
	ellipse(325, 200, 80, 80);
	ellipse(325, 200, 40, 40);
	point(325, 200);


	//robots nose and ears
	fill(207,181,59);

	//robots nose
	quad(230, 260, 270, 260, 300, 300, 200, 300,); 

	//This is a comment to understand the quad function
	//I reccomend using a browser extension that displays 
	//coordinates on the page for an easier time

	//quad(40, 31, 86, 20, 69, 63, 30, 76); //8
		// 1      // 2     //3     //4

	
	//robots ears, notice how we still use the above fill that is before the nose *quad function*
	rect(80, 180, 30, 100, 10, 0, 0, 10);
	rect(390, 180, 30, 100, 0, 10, 10, 0);

	//robots mouth
	noFill();
	beginShape();
	vertex(160, 320);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(340, 320);
	endShape();
}