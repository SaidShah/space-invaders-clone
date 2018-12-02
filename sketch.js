var spaceShip;
var asteroids=[];
var bullets=[];
var scoreBoard;
var index;
var bg;

function setup() {

	createCanvas(windowWidth*.8, windowHeight*.6);
	spaceShip = new SpaceShip();
	scoreBoard = new ScoreBoard();
	index = new Index();
	index.placeCanvas();
	bg = loadImage("images/space.jpg")
	for(var i = 0; i< 40; i++){
		asteroids[i] = new Asteroid();
	}
}

function draw() {

	background(bg);
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].show()
		bullets[i].move()

		for (var j = 0; j < asteroids.length; j++) {
			if(bullets[i].hits(asteroids[j])){
				bullets[i].removeBullet(true)
				asteroids[j].removeAsteroid(true)
				scoreBoard.addPoint()
			}
		}
	}

	for(var i = 0; i< asteroids.length; i++){
		asteroids[i].show();
		asteroids[i].move(scoreBoard);
	}

	for (var i = bullets.length-1; i >= 0 ; i--) {
		if(bullets[i].deleteBullet){
			bullets.splice(i,1)
		}
	}

	for (var i = asteroids.length-1; i >=0 ; i--) {
		if(asteroids[i].deleteAsteroid){
			asteroids.splice(i,1)
			let asteroid = new Asteroid()
			asteroids.push(asteroid)
		}
	}

	spaceShip.show();
	spaceShip.move();
	scoreBoard.timerCounter();

 }

function keyReleased() {
	if(key != " "){
	spaceShip.setDirection(0)
 }
}


function keyPressed() {
	if (key===' ') {
		var bullet = new Bullet(spaceShip.shipX,height-67)
		bullets.push(bullet)
	}
	if(keyCode===RIGHT_ARROW){
		spaceShip.setDirection(1);
	}else if(keyCode === LEFT_ARROW){
		spaceShip.setDirection(-1);
	}
}
