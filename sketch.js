var spaceShip;
var asteroids=[];
var bullets=[];

function setup() {

	createCanvas(windowWidth*.95, windowHeight*.8);
	spaceShip = new SpaceShip();
	//bullet = new Bullet(width/2, height/2);
	for(var i = 0; i< 15; i++){
		asteroids[i] = new Asteroid();
	}
}

function draw() {
	background(20,20,0);
	spaceShip.show();
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].show()
		bullets[i].move()
	}
	for(var i = 0; i< asteroids.length; i++){
		asteroids[i].show();
	}

}

function keyPressed() {
	if (keyCode===UP_ARROW) {
		var bullet = new Bullet(spaceShip.shipX,height/2)
		bullets.push(bullet)
	}
	if(keyCode===RIGHT_ARROW){
		spaceShip.move(5);
	}else if(keyCode === LEFT_ARROW){
		spaceShip.move(-5);
	}
}
