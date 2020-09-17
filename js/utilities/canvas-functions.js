/*********************************************************************************/
//this is to let the undo and redo buttons work
contextReal.fillStyle = "white";
contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);

/*********************************************************************************/


/**************clear canvas function*****************/
let clearCanvas = document.getElementById("clear");
clearCanvas.addEventListener("click", eraseCanvas);

function eraseCanvas(){
contextReal.fillStyle = "white";
contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
  // contextReal.clearRect(0,0, canvasReal.width, canvasReal.height);
}
//made the clear fill the canvas with white cos clearing it would also clear the background as well

/***********Making an array to push undo and redo actions onto*************/
let pushedArray = [];
let step = 0;
let canvasPic = new Image();

/***************Undo function****************/
let undobtn = document.getElementById("undo");
undobtn.addEventListener("click", undo);

function undo(){
  if(step > 0) {
    step--;
    // console.log(step);
    canvasPic.src = pushedArray[step];
    // contextReal.clearRect(0,0, canvasReal.width, canvasReal.height);
    canvasPic.onload = function () {
      contextReal.drawImage(canvasPic, 0, 0);
    }
  }
}

/***********Redo function**************/
let redobtn = document.getElementById("redo");
redobtn.addEventListener("click",redo);

function redo() {
  if (step < pushedArray.length - 1) {
    step++;
    // console.log(step);
    canvasPic.src = pushedArray[step];
    // contextReal.clearRect(0,0, canvasReal.width, canvasReal.height);
    canvasPic.onload = function () {
      contextReal.drawImage(canvasPic, 0, 0);
    }
  }
}
//decided to have a white background on the canvas rather than having it clear everytime undo/redo was pressed, as it would cause flickering 


/**************Starting screenshot***************/
function onFinish(){
  step++;
  // console.log(step);
  if (step < pushedArray.length) {
    pushedArray.length = step;
  }
  pushedArray.push(canvasReal.toDataURL());
};
onFinish();
//this is to make sure it takes a snapshot of the blank canvas so the undo will run right from the start, not just after the first action is done

/*************Save function**************/
let download = document.getElementById("download");
download.addEventListener("click",downloadCanvas);

function downloadCanvas() {
  let link = document.createElement('a');
  link.download = 'Canvas.png';
  link.href = document.getElementById('canvas-real').toDataURL()
  link.click();
}


