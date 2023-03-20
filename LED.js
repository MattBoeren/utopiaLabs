class led{
  constructor(x, y, r, g, b){
    this.x = x;
    this.y = y;

    this.color = color(r*0.75, g*0.75, b*0.75);
    this.colorOn = this.color;
    this.colorOnBack = color(r, g ,b);
  }
  
  draw(){
    
    fill(this.color);
    strokeWeight(1);
    stroke(0,0,0);
    beginShape();
    vertex(this.x,this.y);
    vertex(this.x+15, this.y);
    vertex(this.x+15, this.y-10);
    vertex(this.x+3, this.y-10);
    vertex(this.x+3, this.y-3);
    vertex(this.x, this.y-3)
    vertex(this.x,this.y);
    endShape(CLOSE);

    fill(this.colorOn);
    arc(this.x+9, this.y-10, 12, 12, PI, 0);

    fill(200);
    rectMode(CORNER);
    rect(this.x+4,this.y, 3, 15);
    rect(this.x+10,this.y, 3, 10);
  }
  
  on(){
    this.colorOn = this.colorOnBack;
  }

  off(){
    this.colorOn = this.color;
  }
  
  expload(){
    
  }
}