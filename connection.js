class connection{
  constructor(start, x, y){
    
    this.start = start;
    this.end = "";
    
    this.position = [];
    this.position[0] = createVector(x,y);
    
    this.color = [0,0,0];
  }
  
  draw(){
    
    stroke(this.color[0], this.color[1], this.color[2]);
    strokeWeight(3);
    
    for(let i = 0; i < this.position.length - 1; i++){
      line(this.position[i].x,this.position[i].y,this.position[i+1].x,this.position[i+1].y);
    }
    if(this.end == ""){
      line(this.position[this.position.length - 1].x,this.position[this.position.length - 1].y, mouseX, mouseY);
      fill(0,0,0);
      noStroke();
      textAlign(LEFT);
      text("r = red",mouseX+10, mouseY);
      text("g = green",mouseX+10, mouseY+15);
      text("b = blue",mouseX+10, mouseY+30);
      text("l = black",mouseX+10, mouseY+45);
    }
  }
  
  addPosition(x, y){
    this.position.push(createVector(x, y));
  }
  
  addEndPosition(end, x, y){
    this.end = end;
    this.position.push(createVector(x, y));
  }
  
  setColor(r, g, b){
    this.color[0] = r;
    this.color[1] = g;
    this.color[2] = b;
  }
  getStart(){
    return this.start;
  }
  getEnd(){
    return this.end;
  }
  setStart(start){
    this.start = start;
  }
  setEnd(end){
    this.end = end;
  }
}