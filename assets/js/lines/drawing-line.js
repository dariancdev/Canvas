class DrawingLine extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
  
    onMouseDown(coord) {
      this.context.strokeStyle = strokeColour.value;
      this.context.lineJoin = "round";
      this.context.lineCap = "round";
      this.context.lineWidth = lineWidth.value;
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
      this.draw(coord[0], coord[1]);
    }
    onDragging(coord) {
      this.draw(coord[0], coord[1]);
    }
  
    onMouseMove() {}
    onMouseUp() {
      this.onFinish();
      this.context.lineCap = "butt";
      this.context.lineJoin = "miter"; //this is here so it changes things back to default
    }
    
    onMouseLeave() {}
    onMouseEnter() {}
  
    draw(x, y) {
      this.context.lineTo(x, y);
      this.context.moveTo(x, y);
      this.context.closePath();
      this.context.stroke();
    }
 
    onFinish(){
      step++;
      // console.log(step);
      if(step < pushedArray.length){
        pushedArray.length = step;
      }
      pushedArray.push(canvasReal.toDataURL());
    }
  }
  