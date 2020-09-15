class DrawingRectangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
  
    onMouseDown(coord, event) {
      this.contextReal.fillStyle = objectFill.value;
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, event) {
      this.contextDraft.fillStyle = objectFill.value;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
  
    onMouseMove() {}
    onMouseUp(coord) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
      this.onFinish();
    }
    onMouseLeave() {}
    onMouseEnter() {}
  
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