class DrawingPolygon extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord) {
      this.contextReal.fillStyle = objectFill.value;
      this.contextReal.lineWidth = lineWidth.value;
      this.contextReal.strokeStyle = strokeColour.value;
      this.origX = coord[0];
      this.origY = coord[1];
      console.log("mousedown")
    }
    onDragging(coord) {
      this.contextDraft.fillStyle = objectFill.value;
      this.contextDraft.lineWidth = lineWidth.value;
      this.contextDraft.strokeStyle = strokeColour.value;
      // this.contextDraft.polygonSides = polygonSides.value;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.draw(coord[0], coord[1], polygonSides.value, this.contextDraft);
      this.contextDraft.closePath();
      this.contextDraft.fill();
      this.contextDraft.stroke();
      console.log("dragging")
    }
  
    onMouseMove() {}
    onMouseUp(coord) {
      this.contextReal.fillStyle = objectFill.value;
      this.contextReal.lineWidth = lineWidth.value;
      this.contextReal.strokeStyle = strokeColour.value;
      // this.contextReal.polygonSides = polygonSides.value;
      this.contextReal.beginPath();
      this.draw(coord[0], coord[1], polygonSides.value, this.contextReal);
      this.contextReal.closePath();
      this.contextReal.fill();
      this.contextReal.stroke();
      this.onFinish();
      console.log("mouseup")
    }
    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y, polygonSides, context) {
        context.beginPath();
        context.moveTo(x, y);
        for (let i = 1; i < polygonSides; i++) {
            let angle = i * 2 * Math.PI / polygonSides
            let rotatedX = Math.cos(angle) * (x - this.origX) - Math.sin(angle) * (y - this.origY) + this.origX;
            let rotatedY = Math.sin(angle) * (x - this.origX) + Math.cos(angle) * (y - this.origY) + this.origY;
            context.lineTo(rotatedX, rotatedY);
        }
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
  