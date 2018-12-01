function SpaceShip() {
  this.shipX = width/2


  this.show = ((ship)=>{
    rect(this.shipX+20,height - 58, 20,10)
    rect(this.shipX+10,height - 50, 40,20)
    rect(this.shipX,height - 40, 60,20)
    noStroke()
    fill(0, 0, 255)
  })

  this.move = ((dir)=>{
    this.shipX+=dir
  })




}
