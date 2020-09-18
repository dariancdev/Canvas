class Eraser extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    
    onMouseDown(coord,event){
        var size = document.getElementById("myRange"); //get slider size
        var mySize = size.value;
        this.context.lineWidth = mySize;
        this.context.globalCompositionOperation = "destination-out";
        //this.context.strokeStyle = "rgba(0,0,0,1.0)";
        this.context.strokeStyle = "white";
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(coord){
        // History
        history.push($('#canvas-real')[0].toDataURL());
    }
    onMouseLeave(){}
    onMouseEnter(){} 
    
    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
        this.context.globalCompositeOperation = "source-over";
    }
}