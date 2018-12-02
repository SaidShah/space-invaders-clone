function Index() {



this.placeCanvas = function() {
  const canvas = document.getElementById("defaultCanvas0")
  const canvasDiv = document.getElementById("canvas-div")
  canvasDiv.append(canvas);
  document.getElementById("canvas-container").style.paddingTop = `${canvas.height+50}px`

}



}
