
// define the canvas as a variable. define the canvas context as 2d
var canvas = document.getElementById('canvas1'),
    c = canvas.getContext('2d');

// Set Canvas full screen

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

//store x in a variable

function clearScreen() {
	//include clear function BEFORE shape has been drawn
	c.clearRect(0,0, canvas.width, canvas.height);
}

var blueSquare = {
	    x : random(200, canvas.width-200),
	    y : random(200, canvas.height-200),
	    xSpeed : random(-10, 10),
	    ySpeed : random(-10, 10),
	    size: 150
	} 

var redSquare = {
	    x : random(200, canvas.width-200),
	    y : random(200, canvas.height-200),
	    xSpeed : random(-10, 10),
	    ySpeed : random(-10, 10),
	    size: 150
	}

var greenSquare = {
	    x : random(100, canvas.width-100),
	    y : random(100, canvas.height-100),
	    xSpeed : random(-10, 10),
	    ySpeed : random(-10, 10),
	    size: 50
	}

var magentaSquare = {
	    x : random(100, canvas.width-100),
	    y : random(100, canvas.height-100),
	    xSpeed : random(-10, 10),
	    ySpeed : random(-10, 10),
	    size: 50
	}	


function renderBlueSquare() {
	c.fillStyle = 'blue';
	c.fillRect(blueSquare.x, blueSquare.y, blueSquare.size, blueSquare.size);	
}

function renderRedSquare() {
	c.fillStyle = 'red';
	c.fillRect(redSquare.x, redSquare.y, redSquare.size, redSquare.size);	
}

function renderGreenSquare() {
	c.fillStyle = '#6c3';
	c.fillRect(greenSquare.x, greenSquare.y, greenSquare.size, greenSquare.size);	
}

function renderMagentaSquare() {
	c.fillStyle = 'magenta';
	c.fillRect(magentaSquare.x, magentaSquare.y, magentaSquare.size, magentaSquare.size);	
}

// function blueSqBoundaryCollision() {
// 	if ((blueSquare.x + blueSquare.size >= canvas.width) || (blueSquare.x <= 0)) {
// 		blueSquare.xSpeed *= -1;
// 	}
// 	if ((blueSquare.y + blueSquare.size >= canvas.height) || (blueSquare.y <= 0)){
// 		blueSquare.ySpeed *= -1;
// 	}
// }

// function redSqBoundaryCollision() {
// 	if ((redSquare.x + redSquare.size >= canvas.width) || (redSquare.x <= 0)) {
// 		redSquare.xSpeed *= -1;
// 	}
// 	if ((redSquare.y + redSquare.size >= canvas.height) || (redSquare.y <= 0)){
// 		redSquare.ySpeed *= -1;
// 	}
// }

// var blueOnTop = false;
// var blueOnBot = false;
// var blueOnLeft = false;
// var blueOnRight = false;

// function collideRedBlue() {

// 	var blueSqLeftSide = blueSquare.x;
// 	var blueSqRightSide = blueSquare.x + blueSquare.size;
// 	var blueSqTopSide = blueSquare.y;
// 	var blueSqBotSide = blueSquare.y + blueSquare.size;

// 	var redSqLeftSide = redSquare.x;
// 	var redSqRightSide = redSquare.x + redSquare.size;
// 	var redSqTopSide = redSquare.y;
// 	var redSqBotSide = redSquare.y + redSquare.size;

// 	if (blueSqBotSide < redSqTopSide) {
// 		blueOnTop = true;
// 		blueOnBot = false;
// 		blueOnLeft = false;
// 		blueOnRight = false;
// 	}
// 	if (blueSqTopSide > redSqBotSide) {
// 		blueOnTop = false;
// 		blueOnBot = true;
// 		blueOnLeft = false;
// 		blueOnRight = false;
// 	}
// 	if (blueSqRightSide < redSqLeftSide) {
// 		blueOnTop = false;
// 		blueOnBot = false;
// 		blueOnLeft = true;
// 		blueOnRight = false;
// 	}
// 	if (blueSqLeftSide > redSqRightSide) {
// 		blueOnTop = false;
// 		blueOnBot = false;
// 		blueOnLeft = false;
// 		blueOnRight = true;
// 	}

// 	if ((blueSqRightSide >= redSqLeftSide) || (blueSqLeftSide >= redSqRightSide)) {

// 		if ((blueSqBotSide >= redSqTopSide) || (blueSqBotSide >= redSqTopSide)) {

// 			if ((blueOnTop) || (blueOnBot)) {
// 				blueSquare.ySpeed *= -1;
// 				redSquare.ySpeed *= -1;
// 			}

// 			if ((blueOnLeft) || (blueOnRight)) {
// 				blueSquare.xSpeed *= -1;
// 				redSquare.xSpeed *= -1;
// 			}



// 		}

// 	}


// }

// function updateSquares() {

// 	blueSquare.x = blueSquare.x + blueSquare.xSpeed;
// 	blueSquare.y = blueSquare.y + blueSquare.ySpeed;

// 	redSquare.x = redSquare.x + redSquare.xSpeed;
// 	redSquare.y = redSquare.y + redSquare.ySpeed;

// 	blueSqBoundaryCollision();
// 	redSqBoundaryCollision();

// 	collideRedBlue();
// }

function updateBlueSquare() {

	blueSquare.x = blueSquare.x + blueSquare.xSpeed;

	blueSquare.y = blueSquare.y + blueSquare.ySpeed;

	if(blueSquare.x <= 0) {
		blueSquare.xSpeed *= -1;
	}

	if (blueSquare.x + blueSquare.size >= canvas.width) {
		blueSquare.xSpeed *= -1;
	}

	if (blueSquare.y + blueSquare.size >= canvas.height){
		blueSquare.ySpeed *= -1;
	}

	if (blueSquare.y <= 0) {
			blueSquare.ySpeed *= -1;
	}

}

function updateRedSquare() {

	redSquare.x = redSquare.x + redSquare.xSpeed;

	redSquare.y = redSquare.y + redSquare.ySpeed;

	if(redSquare.x <= 0) {
		redSquare.xSpeed *= -1;
	}

	if (redSquare.x + redSquare.size >= canvas.width) {
		redSquare.xSpeed *= -1;
	}

	if (redSquare.y + redSquare.size >= canvas.height){
		redSquare.ySpeed *= -1;
	}

	if (redSquare.y <= 0) {
			redSquare.ySpeed *= -1;
	}

}

function updateGreenSquare() {

	greenSquare.x = greenSquare.x + greenSquare.xSpeed;

	greenSquare.y = greenSquare.y + greenSquare.ySpeed;

	if(greenSquare.x <= 0) {
		greenSquare.xSpeed *= -1;
	}

	if (greenSquare.x + greenSquare.size >= canvas.width) {
		greenSquare.xSpeed *= -1;
	}

	if (greenSquare.y + greenSquare.size >= canvas.height){
		greenSquare.ySpeed *= -1;
	}

	if (greenSquare.y <= 0) {
			greenSquare.ySpeed *= -1;
	}

}

function updateMagentaSquare() {

	magentaSquare.x = magentaSquare.x + magentaSquare.xSpeed;

	magentaSquare.y = magentaSquare.y + magentaSquare.ySpeed;

	if(magentaSquare.x <= 0) {
		magentaSquare.xSpeed *= -1;
	}

	if (magentaSquare.x + magentaSquare.size >= canvas.width) {
		magentaSquare.xSpeed *= -1;
	}

	if (magentaSquare.y + magentaSquare.size >= canvas.height){
		magentaSquare.ySpeed *= -1;
	}

	if (magentaSquare.y <= 0) {
			magentaSquare.ySpeed *= -1;
	}

}


//don't need to call draw because its already made in creative.js
function draw() {

	//include framerate in draw function
	framerate = 60;

	clearScreen();

	renderBlueSquare();
	renderRedSquare();

	renderGreenSquare();
	renderMagentaSquare();

	// updateSquares();

	// renderGreenSquare();

	updateBlueSquare();

	updateRedSquare();

	updateGreenSquare();

	updateMagentaSquare();

	// renderMagentaSquare();




}
