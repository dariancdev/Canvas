/*setting out width, stroke and fill colours*/

//lineWidth function
let lineWidth = document.getElementById("lineWidth");
lineWidth.addEventListener("input", changeLineWidth);

function changeLineWidth() {
  contextReal.lineWidth = this.value;
}

//objectFill function
let objectFill = document.getElementById("objectFill");
objectFill.addEventListener("input", changeObjectFill);

function changeObjectFill() {
  contextReal.fillstyle = this.value;
}

//strokeColour function
let strokeColour = document.getElementById("strokeFill");
strokeColour.addEventListener("input", changeStrokeFill);

function changeStrokeFill() {
  contextReal.strokestyle = this.value;
}
/***************************************************************************** */

/*undo,redo and clear functions*/

//clear canvas function 
let clearCanvas = document.getElementById("clear");
clearCanvas.addEventListener("click", eraseCanvas);

function eraseCanvas() {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
}

//making an array to push undo and redo actions onto 
let pushedArray = [];
let step = 0;
// let savePoint = 0;
let canvasPic = new Image();

//undo function
let undobtn = document.getElementById("undo");
undobtn.addEventListener("click", undo);

// function undo(){
//     if(step > 1 ){
//         step--;
//         console.log(step)
//         savePoint = step;
//         contextReal.drawImage(pushedArray[step - 1],0,0);
//     }
// }
function undo() {
  if (step > 0) {
    step--;
    console.log(step);
    canvasPic.src = pushedArray[step];
    // contextReal.clearRect(0,0, canvasReal.width, canvasReal.height);
    canvasPic.onload = function () {
      contextReal.drawImage(canvasPic, 0, 0);
    }
  }
}

//redo function
let redobtn = document.getElementById("redo");
redobtn.addEventListener("click", redo)

// function redo(){
//     if(step == savePoint && step < pushedArray.length){
//         step++;
//         console.log(step)
//         savePoint++;
//         contextReal.drawImage(pushedArray[step - 1],0,0);
//     }
// }

function redo() {
  if (step < pushedArray.length - 1) {
    step++;
    console.log(step);
    canvasPic.src = pushedArray[step];
    // contextReal.clearRect(0,0, canvasReal.width, canvasReal.height);
    canvasPic.onload = function () {
      contextReal.drawImage(canvasPic, 0, 0);
    }
  }
}
// there were two seperate undo/redo/onFinish functions done, because before I thought i'd made a mistake with how i'd done the functions. I didn't, the issue was something else, both actually work
//decided to have a white background on the canvas rather than having it clear everytime undo/redo was pressed, as it would cause flickering 

function onFinish() {
  step++;
  console.log(step);
  if (step < pushedArray.length) {
    pushedArray.length = step;
  }
  pushedArray.push(canvasReal.toDataURL());
};
onFinish();
//this is to make sure it takes a snapshot of the blank canvas so the undo will run right from the start, not just after the first action is done