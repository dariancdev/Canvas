/*Setting out width, stroke and fill colours*/

//LineWidth function
let lineWidth = document.getElementById("lineWidth");
lineWidth.addEventListener("input", changeLineWidth);

function changeLineWidth() {
  contextReal.lineWidth = this.value;
  contextDraft.lineWidth = this.value;
}

//ObjectFill function
let objectFill = document.getElementById("objectFill");
objectFill.addEventListener("input", changeObjectFill);

function changeObjectFill() {
  contextReal.fillStyle = this.value;
  contextDraft.fillStyle = this.value;
}

//StrokeColour function
let strokeColour = document.getElementById("strokeFill");
strokeColour.addEventListener("input", changeStrokeFill);

function changeStrokeFill(){
  contextReal.strokeStyle = this.value;
  contextDraft.strokeStyle = this.value;
}
//Polygon function
let polygonSides = document.getElementById("polygonSides");
polygonSides.addEventListener("input",changePolygonSides);

function changePolygonSides(){
  contextReal.polygonSides = this.value;
  contextDraft.polygonSides = this.value;
}
//i need to go back thru the code for my drawing classes and change how they get the values, because now i've made them contextReal and contextDraft I shouldn't need to respecify them and contextReal and contextDraft in those classes again. when I have time 