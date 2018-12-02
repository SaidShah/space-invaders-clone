function Asteroid() {
  this.x = Math.floor(Math.random()*width);
  this.asteroidWidth = Math.floor(Math.random()*60);
    this.asteroidWidth >= 10 ? this.asteroidWidth : this.asteroidWidth=20;
  this.y = -this.asteroidWidth/2;
  this.asteroidSpeed = Math.floor(Math.random()*8);
  this.deleteAsteroid = false;

  this.show=((asteroid)=>{
    noStroke()
    fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*55),255)
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
