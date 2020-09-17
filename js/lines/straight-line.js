class StraightLine extends PaintFunction{
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
      }
      onMouseDown(coord, event) {
        this.contextReal.strokeStyle = strokeColour.value;
        this.contextDraft.strokeStyle = strokeColour.value;
        this.contextReal.lineJoin = "round";
        this.contextDraft.lineJoin = "round";
        this.contextReal.lineCap = "round";
        this.contextDraft.lineCap = "round";
        this.contextReal.lineWidth = lineWidth.value;
        this.contextDraft.lineWidth = lineWidth.value;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
      }
      onDragging(coord, event) {
        this.contextDraft.closePath();
      }
    
      onMouseMove() {}
      onMouseUp() {
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