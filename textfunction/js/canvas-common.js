let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;
var stampId = '';
var lastStampId = '';


$('#cpXSlider, #cpYSlider').mouseenter(function(){
    currentFunction.onSlider();
});

$('#canvas-draft').mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    //console.log(mouseX, mouseY)
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

class PaintFunction{
    constructor(){}
    onSlider(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    getColour(){
      return [this.selectedFillColour, this.selectedStrokeColour]
    }

    setFillColour(fill){
      this.selectedFillColour = fill
    }

    setStrokeColour(stroke){
      this.selectedStrokeColour = stroke
    }

    getLineWidth(){
      return this.selectedLineWidth
    }

    setLineWidth(width){
      this.selectedLineWidth = width
    }

    getControlPoint(){
      return [this.selectedCpX, this.selectedCpY]
    }

    setControlPointX(x){
      this.selectedCpX = x
    }

    setControlPointY(y){
      this.selectedCpY = y
    }

};

// History
let history = [];
let historyCounter = 1;

var undo = function(){
    historyCounter += 1;
    // [a,b,c] || Current Index = 3 = c || previou Index = 1 = b || Previou Index = length(3) - 2 = 1 = b
    let previouHistoryIndex = history.length - historyCounter;

    if(previouHistoryIndex >= 0){
        var newPic = new Image();
        newPic.src = history[previouHistoryIndex];
        newPic.onload = function(){
            contextReal.clearRect( 0, 0,canvasDraft.width,canvasDraft.height);
            contextReal.drawImage(newPic,0,0,canvasDraft.width,canvasDraft.height);
        };

    } else if (previouHistoryIndex < 0){
        contextReal.clearRect( 0, 0,canvasDraft.width,canvasDraft.height);
    };
};

var redo = function(){
    historyCounter -= 1;
    let previouHistoryIndex = history.length - historyCounter;

    if(previouHistoryIndex >= 0){
        var newPic = new Image();
        newPic.src = history[previouHistoryIndex];
        newPic.onload = function(){
            contextReal.clearRect( 0, 0,canvasDraft.width,canvasDraft.height);
            contextReal.drawImage(newPic,0,0,canvasDraft.width,canvasDraft.height);
        };
    };
};

var UploadImage = function(e){
   var URL = window.URL;
   var img = new Image();
   img.src = URL.createObjectURL(e.target.files[0]);

   img.onload = function() {
   var canvas = document.getElementById('canvas-real');
   var ctx = canvas.getContext('2d');
   var imgSize = calculateAspectRatioFit(img.width, img.height, canvas.clientWidth, canvas.clientHeight);
   ctx.drawImage(img, 0, 0, imgSize.width, imgSize.height);
}
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
   var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
   var rtnWidth = srcWidth * ratio;
   var rtnHeight = srcHeight * ratio;
   return {
       width: rtnWidth,
       height: rtnHeight
   };
};
}
