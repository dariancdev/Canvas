class DrawingBrush extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord) {
    this.context.strokeStyle = strokeColour.value;
    this.context.shadowColor = strokeColour.value;
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.context.shadowBlur = 10;
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
    this.context.lineJoin = "miter";
    this.context.shadowBlur = 0;
    this.context.shadowColor = ""; //have to change these back so it doesn't affect the other paint classes
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
    console.log(step);
    if(step < pushedArray.length){
      pushedArray.length = step;
    }
    pushedArray.push(canvasReal.toDataURL());
  }
}

  