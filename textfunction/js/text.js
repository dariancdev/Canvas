class addText extends PaintFunction{
    constructor(contextReal, contextDraft, selectedStrokeColour){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectedStrokeColour = selectedStrokeColour;
    }

    onMouseDown(coord,event){
        // this.contextDraft.font = `${selectedLineWidth}px Arial`;
        // this.contextDraft.fillText($('#addTextInput').val(), this.origX, this.origY);
        // this.contextDraft.fillStyle = this.selectedStrokeColour;
        this.origX = coord[0];
        this.origY = coord[1];
        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.beginPath();
        // console.log(this.origX, this.origY)
    }

    onDragging(coord,event){
      this.contextDraft.font = `${selectedLineWidth}px Arial`;
      this.contextDraft.fillText($('#addTextInput').val(), this.origX, this.origY);
      this.contextDraft.fillStyle = this.selectedStrokeColour;
      this.origX = coord[0];
      this.origY = coord[1];
    }

    onMouseMove(){}
    onMouseUp(coord){
      this.contextReal.font = `${selectedLineWidth}px Arial`;
      this.contextReal.fillText($('#addTextInput').val(), this.origX, this.origY);
      this.contextReal.fillStyle = this.selectedStrokeColour;
      this.origX = coord[0];
      this.origY = coord[1];
      // History
      history.push($('#canvas-real')[0].toDataURL());
    }

    onMouseLeave(){}
    onMouseEnter(){}

}
