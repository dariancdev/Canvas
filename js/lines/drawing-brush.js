class DrawingBrush extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft; 
    }
  
    onMouseDown(coord, event) {
      this.context.strokeStyle = strokeColour.value;
      this.context.lineJoin = "round";
      this.context.lineCap = "round";
      this.context.lineWidth = lineWidth.value;
      this.context.shadowBlur = 10;
      this.context.shadowColor = strokeColour.value;
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
      this.draw(coord[0], coord[1]);
    }
    onDragging(coord, event) {
      this.draw(coord[0], coord[1]);
    }
  
    onMouseMove() {}
    onMouseUp() {
      this.onFinish();
      this.contextDraft.shadowBlur = 0;
      this.contextDraft.shadowColor = '';
    }
    onMouseLeave() {}
    onMouseEnter() {}
  
    draw(x, y) {
      this.context.lineTo(x, y);
      this.context.moveTo(x, y);
      this.context.closePath();
      this.context.stroke();
    }
  // this onFinish code works as well
    // onFinish(){
    //   pushedArray[step] = new Image();
    //   pushedArray[step].src = canvasReal.toDataURL();
    //   step++;
    //   console.log(step)
    // }
    onFinish(){
      step++;
      console.log(step);
      if(step < pushedArray.length){
        pushedArray.length = step;
      }
      pushedArray.push(canvasReal.toDataURL());
    }
  }
  