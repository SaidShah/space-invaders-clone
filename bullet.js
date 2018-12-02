function Bullet(x,y) {
  this.x = x
  this.y = y

  this.show = ((bullet)=>{
    fill(255)
    rect(this.x,this.y+95,5,10)
  })

  this.move=((dir)=>{
    this.y = this.y - 5
  })



}
