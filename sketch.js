var spaceShip;

function setup() {

	createCanvas(windowWidth*.95, windowHeight*.8);
	spaceShip = new SpaceShip();
}

function draw() {
	background(20,20,0)
	spaceShip.show()
}

function keyPressed() {
	if(keyCode===RIGHT_ARROW){
		spaceShip.move(5);
	}else if(keyCode === LEFT_ARROW){
		spaceShip.move(-5);
	}
}
