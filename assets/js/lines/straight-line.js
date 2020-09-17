class StraightLine extends PaintFunction{
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.actionCounter = 0;
      }
      onMouseDown() {
        this.contextDraft.strokeStyle = strokeColour.value;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineCap = "round";
        this.contextDraft.lineWidth = lineWidth.value;
      }
      onDragging() {}
    
      onMouseMove(coord) {
        if(this.actionCounter != 0){
          this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
          this.contextDraft.beginPath();
          this.contextDraft.moveTo(this.origX, this.origY);
          this.contextDraft.lineTo(coord[0],coord[1]);
          this.contextDraft.stroke();
          //i realised after doing this i could've just called my drawStraight function in the quadratic curve, but i'll just leave it as is
        }
      }
      onMouseUp(coord) {
        this.contextReal.strokeStyle = strokeColour.value;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineCap = "round";
        this.contextReal.lineWidth = lineWidth.value;
      
  
        if(this.actionCounter === 0){
          this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
          this.origX = coord[0];
          this.origY = coord[1];
          this.actionCounter++
        } else if(this.actionCounter === 1){
          this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
          this.contextReal.beginPath();
          this.contextReal.moveTo(this.origX, this.origY);
          this.contextReal.lineTo(coord[0],coord[1]);
          this.contextReal.stroke();
          this.actionCounter = 0;
        }
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