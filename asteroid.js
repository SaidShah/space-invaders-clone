function Asteroid() {
  this.x = Math.floor(Math.random()*width);
  this.asteroidWidth = Math.floor(Math.random()*50);
  this.y = -this.asteroidWidth/2;
  this.asteroidSpeed = Math.floor(Math.random()*5);
  this.deleteAsteroid = false;

  this.show=((asteroid)=>{
    noStroke()
    fill(255,255,0)
    ellipse(this.x, this.y,this.asteroidWidth, this.asteroidWidth)
  })

  this.move = ((asteroid)=>{
    this.y = this.y+this.asteroidSpeed;
  })

  this.removeAsteroid = function(){
      this.deleteAsteroid = true;
  }




}
