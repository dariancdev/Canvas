class QuadraticCurve extends PaintFunction{
    constructor(contextReal,contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.actionCounter = 0;
      }
      onMouseDown(coord) {
        //   console.log(this.actionCounter)
        this.contextDraft.strokeStyle = strokeColour.value;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineCap = "round";
        this.contextDraft.lineWidth = lineWidth.value;
      }
      onDragging(coord) {}
    
      onMouseMove(coord) {
        // this.contextDraft.strokeStyle = strokeColour.value;
        // this.contextDraft.lineJoin = "round";
        // this.contextDraft.lineCap = "round";
        // this.contextDraft.lineWidth = lineWidth.value;

        if(this.actionCounter === 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawStraight(this.origX,this.origY,coord[0],coord[1],this.contextDraft);

        } else if(this.actionCounter === 2){
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawQuad(coord[0],coord[1],this.contextDraft);
            this.drawDotted(this.origX,this.origY,coord[0],coord[1],this.contextDraft);
            this.drawDotted(this.finalX,this.finalY,coord[0], coord[1], this.contextDraft);
            this.drawTopDot(coord[0],coord[1],this.contextDraft);
        }
      }
      onMouseUp(coord) {
        this.contextReal.strokeStyle = strokeColour.value;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineCap = "round";
        this.contextReal.lineWidth = lineWidth.value;

        if(this.actionCounter === 0){
            this.origX = coord[0];
            this.origY = coord[1];

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.actionCounter++
            // console.log(this.actionCounter)

        } else if(this.actionCounter === 1) {
            this.finalX = coord[0];
            this.finalY = coord[1];

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawQuad(coord[0],coord[1],this.contextDraft);
            this.actionCounter++
            // console.log(this.actionCounter)

        } else if(this.actionCounter === 2){
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawQuad(coord[0],coord[1],this.contextReal);
            this.actionCounter = 0;
            
            this.onFinish();
        }
        this.contextDraft.lineCap = "butt";
        this.contextDraft.lineJoin = "miter"; //not sure why this is not affecting the contextDraft when the other functions aren't, and this isn't resetting it either and idk why
        this.contextReal.lineCap = "butt";
        this.contextReal.lineJoin = "miter";
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
    //to make the first straight line 
    drawStraight(Xstart, Ystart, Xend, Yend, context) {
        context.beginPath();
        context.moveTo(Xstart, Ystart);
        context.lineTo(Xend, Yend);
        context.stroke();
    }
    //to make the curve
    drawQuad(Xstart, Ystart, context) {
        context.beginPath();
        context.moveTo(this.origX, this.origY);
        context.quadraticCurveTo(Xstart, Ystart, this.finalX, this.finalY)
        context.stroke();
    }
    //to make the red dotted line
    drawDotted(X, Y, Xstart, Ystart, context) {
        context.save()
        context.strokeStyle = "red"
        context.lineWidth = 2;
        context.setLineDash([3, 3]);
        context.beginPath();
        context.moveTo(X, Y);
        context.lineTo(Xstart, Ystart);
        context.stroke();
        context.restore()
    }
    //to make the small red dot at the top
    drawTopDot(Xstart, Ystart, context) {
        context.save()
        context.fillStyle = "red"
        context.fillRect(Xstart - 5, Ystart - 5, 8, 8)
        context.restore()
    }
}

