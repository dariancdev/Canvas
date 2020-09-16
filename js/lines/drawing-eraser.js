class Eraser extends PaintFunction {
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
  
    onMouseDown(coord, event) {
      this.context.strokeStyle = "#ffffff";
      this.context.lineJoin = "round";
      this.context.lineCap = "round";
      this.context.lineWidth = lineWidth.value;
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
      this.draw(coord[0], coord[1]);
    }
    onDragging(coord, event) {
      this.draw(coord[0], coord[1]);
    }
  
    onMouseMove() {}
    onMouseUp() {
      this.onFinish();
    }
    onMouseLeave() {}
    onMouseEnter() {}
  
    draw(x, y) {
      this.context.lineTo(x, y);
      this.context.moveTo(x, y);
      this.context.closePath();
      this.context.stroke();
    }

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