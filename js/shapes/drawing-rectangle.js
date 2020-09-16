class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = objectFill.value;
    this.contextReal.lineWidth = lineWidth.value;
    this.contextReal.strokeStyle = strokeColour.value;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.fillStyle = objectFill.value;
    this.contextDraft.lineWidth = lineWidth.value;
    this.contextDraft.strokeStyle = strokeColour.value;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextDraft.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextDraft.fill();
    this.contextDraft.stroke();
    this.contextDraft.closePath();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextDraft.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextReal.fill();
    this.contextReal.stroke();
    this.contextReal.closePath();
    this.onFinish();
  }
  onMouseLeave() {}
  onMouseEnter() {}
  
  onFinish(){
    step++;
    console.log(step);
    if(step < pushedArray.length){
      pushedArray.length = step;
    }
    pushedArray.push(canvasReal.toDataURL());
  }
}