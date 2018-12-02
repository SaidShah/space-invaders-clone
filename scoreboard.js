function ScoreBoard() {
 let timer = 4;

  this.addPoint = function() {
    const addPt = document.getElementById("total-points").innerText
    let addPtInt = parseInt(addPt)
    document.getElementById("total-points").innerText = ++addPtInt
  }

  this.minusPoint = function() {
    const loserPoints = document.getElementById("less-points").innerText
    let lessPointsInt = parseInt(loserPoints)
    document.getElementById("less-points").innerText = `${--lessPointsInt}`
  }

  this.timerCounter = function() {
    let timerShown = document.getElementsByClassName("countDown")
    if (frameCount % 60 === 0 && timer > 0) {
      //timer--;
      timerShown[0].innerText = `${--timer}`

    }
    if (timer === 0) {
      timerShown[0].innerText = "Time Is UP"
      
      timerShown[0].style.color = "red"
    }

  }


}
