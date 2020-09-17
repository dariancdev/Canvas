class TextBox extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.fontWeight = 400;
    this.fontSize = 35;
    this.fontStyle = "Impact";
    this.textX = [];
    this.textY = [];
  }

  onMouseDown(coord, event) {

    this.contextReal.font = `${this.fontWeight} ${this.fontSize}px ${this.fontStyle}`;
    this.contextReal.fillStyle = objectFill.value;

    this.textX.push(coord[0]);
    this.textY.push(coord[1]);

    this.fontStartY = this.textY[0];
    $('#textInput').css({
      "display": "block",
      "transform": "translateY(" + coord[1] + "px) translateX(" + coord[0] + "px)",
      "font-size": this.fontSize + "px",
      "color": objectFill.value,
      "font-family": this.fontStyle,
      "font-weight": this.fontWeight,
      "padding": "0"
    });

    if ((this.textX.length > 1) && (event.target.id != $('#textInput'))) {
      this.outputText(this.contextReal);
    }
  }
  outputText(ctx) {
    let inputText = $('#textInput').val();
    contextReal.fillText(inputText, this.textX[0], this.textY[0])
      // + parseInt(lineWidth.value));

    $('#textInput').css({"display":"none","transform":"translateY(0) translateX(0)"});
    $('#textInput').val('');

    // this.textX= [];
    // this.textY = [];
    this.onFinish();
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