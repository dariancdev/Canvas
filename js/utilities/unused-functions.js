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

 