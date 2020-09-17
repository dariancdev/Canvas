class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord) {
    // this.contextReal.fillStyle = objectFill.value;
    // this.contextReal.lineWidth = lineWidth.value;
    // this.contextReal.strokeStyle = strokeColour.value;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord) {
    this.contextDraft.fillStyle = objectFill.value;
    this.contextDraft.lineWidth = lineWidth.value;
    this.contextDraft.strokeStyle = strokeColour.value;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    // this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.ellipse(this.origX, this.origY, Math.abs(coord[0] - this.origX), Math.abs(coord[1] - this.origY), 0 * Math.PI / 180, 0, 2 * Math.PI)
    // this.contextDraft.beginPath();
    // this.contextDraft.fillRect(
    //   this.origX,
    //   this.origY,
    //   coord[0] - this.origX,
    //   coord[1] - this.origY
    // );
    // this.contextDraft.strokeRect(
    //   this.origX,
    //   this.origY,
    //   coord[0] - this.origX,
    //   coord[1] - this.origY
    // );
    // this.contextDraft.closePath();
    this.contextDraft.fill();
    this.contextDraft.stroke();
    this.contextDraft.closePath();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextReal.fillStyle = objectFill.value;
    this.contextReal.lineWidth = lineWidth.value;
    this.contextReal.strokeStyle = strokeColour.value;
    this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    this.contextReal.beginPath();
    // this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.ellipse(this.origX, this.origY, Math.abs(coord[0] - this.origX), Math.abs(coord[1] - this.origY), 0 * Math.PI / 180, 0, 2 * Math.PI)
    // this.contextReal.fillRect(
    //   this.origX,
    //   this.origY,
    //   coord[0] - this.origX,
    //   coord[1] - this.origY
    // );
    // this.contextReal.strokeRect(
    //   this.origX,
    //   this.origY,
    //   coord[0] - this.origX,
    //   coord[1] - this.origY
    // );
    // this.contextReal.closePath();
    this.contextReal.fill();
    this.contextReal.stroke();

    this.contextReal.closePath();
    this.onFinish();
  }
  onMouseLeave() {}
  onMouseEnter() {}

  onFinish() {
    step++;
    console.log(step);
    if (step < pushedArray.length) {
      pushedArray.length = step;
    }
    pushedArray.push(canvasReal.toDataURL());
  }
}