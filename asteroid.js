function Asteroid(givenImage) {
  this.x = Math.floor(Math.random()*width);
  this.asteroidWidth = Math.floor(Math.random()*60);
    this.asteroidWidth >= 20 ? this.asteroidWidth : this.asteroidWidth=40;
  this.y = -this.asteroidWidth/2;
  this.asteroidSpeed = Math.floor(Math.random()*5);
  this.deleteAsteroid = false;
  this.givenImage = givenImage


  this.show=((asteroid)=>{
    noStroke()
    // fill(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*55),255)
    // ellipse(this.x, this.y,this.asteroidWidth, this.asteroidWidth)
    //   ellipse(this.x, this.y,this.asteroidWidth/2, this.asteroidWidth/2)
    image(this.givenImage,this.x, this.y,this.asteroidWidth, this.asteroidWidth)
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
