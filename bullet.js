function Bullet(x,y) {
  this.x = x;
  this.y = y;
  this.r = 2.5;
  this.deleteBullet = false;

  this.show = ((bullet)=>{
    fill(255)
    ellipse(this.x+3 ,this.y+4,this.r*2,this.r*2)
  })

  this.move=((dir)=>{
    this.y = this.y - 5
  })

  this.hits = ((asteroid)=>{
    var d = dist(this.x, this.y, (asteroid.x-asteroid.asteroidWidth/2), (asteroid.y-asteroid.asteroidWidth/2))
    if(d < this.r + asteroid.asteroidWidth){
      return true;
    }else {
      return false;
    }
  })

  this.removeBullet= function(bullet){
    this.deleteBullet = true;
  }




}
