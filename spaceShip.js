function SpaceShip() {
  this.shipX = width/2
  this.xDirection = 0;


  this.show = ((ship)=>{

    noStroke()
    fill(0, 0, 255)
    image(spaceShipImg,this.shipX-27,height - 60, 70,60)
  })

  this.setDirection =((dir)=>{
    this.xDirection = dir;
  })

  this.move = ((dir)=>{
    if(this.shipX+50>=width){
      this.shipX = width-50
    }else if(this.shipX <= 30 ){
      this.shipX = 30
    }
      this.shipX += this.xDirection*11;

  })






}
