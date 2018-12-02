function Asteroid(givenImage) {
  this.x = Math.floor(Math.random()*width);
  this.asteroidWidth = Math.floor(Math.random()*60);
    this.asteroidWidth >= 20 ? this.asteroidWidth : this.asteroidWidth=40;
  this.y = -this.asteroidWidth/2;
  this.asteroidSpeed = Math.floor(Math.random()*8);
  this.deleteAsteroid = false;
  this.givenImage = givenImage


  this.show=((asteroid)=>{
    noStroke()
    image(this.givenImage,this.x, this.y-10,this.asteroidWidth, this.asteroidWidth)
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
