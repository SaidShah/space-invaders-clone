function Asteroid() {
  this.x = Math.floor(Math.random()*width);
  this.asteroidWidth = Math.floor(Math.random()*50);
  this.y = -this.asteroidWidth/2;
  this.asteroidSpeed = Math.floor(Math.random()*6);
  this.deleteAsteroid = false;

  this.show=((asteroid)=>{
    noStroke()
    fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255),90)
    ellipse(this.x, this.y,this.asteroidWidth, this.asteroidWidth)
      ellipse(this.x, this.y,this.asteroidWidth/2, this.asteroidWidth/2)

  })

  this.move = ((scoreBoard)=>{
    if(this.y >= height){
      this.y = 0
      scoreBoard.minusPoint()
    }else {
    this.y = this.y+this.asteroidSpeed;
   }
  })

  this.removeAsteroid = function(){
      this.deleteAsteroid = true;
  }




}
