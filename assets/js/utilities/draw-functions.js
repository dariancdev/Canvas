/*Setting out width, stroke and fill colours*/

//LineWidth function
let lineWidth = document.getElementById("lineWidth");
lineWidth.addEventListener("input", changeLineWidth);

function changeLineWidth() {
  contextReal.lineWidth = this.value;
}

//ObjectFill function
let objectFill = document.getElementById("objectFill");
objectFill.addEventListener("input", changeObjectFill);

function changeObjectFill() {
  contextReal.fillstyle = this.value;
}

//StrokeColour function
let strokeColour = document.getElementById("strokeFill");
strokeColour.addEventListener("input", changeStrokeFill);

function changeStrokeFill(){
  contextReal.strokestyle = this.value;
}
