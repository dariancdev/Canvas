class StraightLine extends PaintFunction{
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
      }
      onMouseDown(coord) {
        this.contextReal.strokeStyle = strokeColour.value;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineCap = "round";
        this.contextReal.lineWidth = lineWidth.value;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
      }
      onDragging(coord) {
        this.contextDraft.strokeStyle = strokeColour.value;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineCap = "round";
        this.contextDraft.lineWidth = lineWidth.value;
        this.contextDraft.closePath();
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
      }
    
      onMouseMove() {}
      onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();
        this.onFinish();
        this.contextReal.lineCap = "butt";
        this.contextReal.lineJoin = "miter";
        this.contextDraft.lineCap = "butt";
        this.contextDraft.lineJoin = "miter";
      }
      onMouseLeave() {}
      onMouseEnter() {}
   
      onFinish(){
        step++;
        // console.log(step);
        if(step < pushedArray.length){
          pushedArray.length = step;
        }
        pushedArray.push(canvasReal.toDataURL());
      }
    
    
}