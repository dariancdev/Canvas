/***********************************************************************************Saved these functions as a reminder, as they work, just were not the way we ended up making the canvas **********************************************************************************/

// /*clear canvas function*/
// let clearCanvas = document.getElementById("clear");
// clearCanvas.addEventListener("click",eraseCanvas);

// function eraseCanvas(){
// contextReal.fillStyle = "white";
// contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
// pushedArray[steps] = canvasPic;
// pushedArray[steps].src = canvasReal.toDataURL();
// }

// let savePoint = 0;

// function undo(){
//     if(step > 1 ){
//         step--;
//         console.log(step)
//         savePoint = step;
//         contextReal.drawImage(pushedArray[step - 1],0,0);
//     }
// }

// function redo(){
//     if(step == savePoint && step < pushedArray.length){
//         step++;
//         console.log(step)
//         savePoint++;
//         contextReal.drawImage(pushedArray[step - 1],0,0);
//     }
// }

// this onFinish code works as well
    // onFinish(){
    //   pushedArray[step] = new Image();
    //   pushedArray[step].src = canvasReal.toDataURL();
    //   step++;
    //   console.log(step)
    // }

// there were two seperate undo/redo/onFinish functions done, because before I thought i'd made a mistake with how i'd done the functions. I didn't, the issue was something else, both actually work

 /******************************I wanted to do the quadratic curve the way I saw on Thomas Corbin's canvas cos i thought it worked way better. I can't remember but i don't think this one is working anyways, i was missing some things
  ****************************/
// class QuadraticCurve extends PaintFunction{
    //     constructor(contextReal,contextDraft){
    //         super();
    //         this.contextReal = contextReal;
    //         this.contextDraft = contextDraft;
    //         this.actionCounter = 0;
    //     }
    
    //         onMouseDown(coord,event){
    //             if (this.actionCounter === 0){
    //                 this.contextReal.lineCap = "round"; 
    //                 this.contextDraft.lineCap = "round"; 
    //                 this.contextReal.strokeStyle = strokeColour.value;
    //                 this.contextDraft.strokeStyle = strokeColour.value;
    //                 this.contextReal.lineWidth = lineWidth.value;
    //                 this.contextDraft.lineWidth = lineWidth.value;
    //                 this.origX = coord[0];
    //                 this.origY = coord[1];
    //                 this.contextReal.beginPath();
    //                 this.contextReal.moveTo(this.origX,this.origY);
    //             } 
    //             else if (this.actionCounter === 1){
    //             }
    //         }
    //         onDragging(coord,event){
    //             if (this.actionCounter === 0){
    //                 this.endX = coord[0];
    //                 this.endY = coord[1];
    //                 this.contextDraft.closePath();
    //                 this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    //                 this.contextDraft.beginPath();
    //                 this.contextDraft.moveTo(this.origX,this.origY);
    //                 this.contextDraft.quadraticCurveTo(this.origX,this.origY,this.endX,this.endY);
    //                 this.contextDraft.stroke();
    //             } else if (this.actionCounter === 1){
    //                 this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    //                 this.contextDraft.beginPath();
    //                 this.contextDraft.moveTo(this.origX,this.origY);
    //                 this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
    //                 this.contextDraft.stroke();
    //             }
    //         }
    //         onMouseUp(coord,event){
    //             if (this.actionCounter === 0){
    //                 this.actionCounter = 1;
    //             } else if (this.actionCounter === 1){
    //                 this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    //                 this.contextReal.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
    //                 this.contextReal.stroke();
    //                 this.actionCounter = 0;
    //                 this.onFinish();
    //             }
    //         }
    //         onFinish(){
    //             step++;
    //             console.log(step);
    //             if(step < pushedArray.length){
    //               pushedArray.length = step;
    //             }
    //             pushedArray.push(canvasReal.toDataURL());
    //           }
    // }