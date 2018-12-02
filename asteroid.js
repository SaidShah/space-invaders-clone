function Asteroid() {
  this.x = Math.floor(Math.random()*width)
  this.asteroidWidth = Math.floor(Math.random()*50)
  this.y = -this.asteroidWidth/2;

  this.show=((asteroid)=>{
    noStroke()
    fill(255,255,0)
    ellipse(this.x, this.y,this.asteroidWidth, this.asteroidWidth)
  })






}
