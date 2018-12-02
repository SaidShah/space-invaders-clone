function SpaceShip() {
  this.shipX = width/2
  this.xDirection = 0;

  this.show = ((ship)=>{
    noStroke()
    fill(0, 0, 255)
    rect(this.shipX-7,height - 58, 20,10)
    rect(this.shipX-17,height - 50, 40,20)
    rect(this.shipX-27,height - 40, 60,20)
  })

  this.setDirection =((dir)=>{
    this.xDirection = dir;
  })

  this.move = ((dir)=>{
  //
    if(this.shipX+36>=width){
      this.shipX = width-36
    }else if(this.shipX <= 29 ){
      this.shipX = 30
    }
      this.shipX += this.xDirection*6;

  })






}
