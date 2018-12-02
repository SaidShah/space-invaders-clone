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
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].show()
		bullets[i].move()

		for (var j = 0; j < asteroids.length; j++) {
			if(bullets[i].hits(asteroids[j])){
				bullets[i].removeBullet(true)
				asteroids[j].removeAsteroid(true)
			}
		}
	}

	for(var i = 0; i< asteroids.length; i++){
		asteroids[i].show();
		asteroids[i].move();
	}

	for (var i = bullets.length-1; i >= 0 ; i--) {
		if(bullets[i].deleteBullet){
			bullets.splice(i,1)
		}
	}

	for (var i = asteroids.length-1; i >=0 ; i--) {
		if(asteroids[i].deleteAsteroid){
			asteroids.splice(i,1)
		}
	}

	spaceShip.show();

}

function keyPressed() {
	if (key===' ') {
		var bullet = new Bullet(spaceShip.shipX,height-67)
		bullets.push(bullet)
	}
	if(keyCode===RIGHT_ARROW){
		spaceShip.move(5);
	}else if(keyCode === LEFT_ARROW){
		spaceShip.move(-5);
	}
}
