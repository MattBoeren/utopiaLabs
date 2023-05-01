class arduino{
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    
    this.connectors = [];
    
    for(let i = 0; i < 28; i++){
      this.connectors[i] = [];
      
      if(i === 0){
        this.connectors[i][0] = "0RX";
      }
      if(i === 1){
        this.connectors[i][0] = "1TX";
      }
      if((i <= 13)&&(i > 1)){
        this.connectors[i][0] = "D"+ String(i);
      }
      if(i === 14){
        this.connectors[i][0] = "GND";
      }
      if(i === 15){
        this.connectors[i][0] = "AREF";    
      }
      if(i === 16){
        this.connectors[i][0] = "RST";      
      }
      if(i === 17){
        this.connectors[i][0] = "3V3";    
      }
      if(i === 18){
        this.connectors[i][0] = "5V";     
      }
      if(i === 19){
        this.connectors[i][0] = "GND";
      }
      if(i === 20){
        this.connectors[i][0] = "GND";
      }
      if(i === 21){
        this.connectors[i][0] = "VIN";
      }
      if(i > 21){
        this.connectors[i][0] = "A"+ String(i-22);     
      }
    }
    
    for(let i = 0; i<8; i++){
      this.connectors[i][1] = createVector(174- 8*i,10);
    }
    for(let i = 8; i<16; i++){
      this.connectors[i][1] = createVector(100 - 8*(i-8),10);
    }
    for(let i = 16; i<22; i++){
      this.connectors[i][1] = createVector(80 + 8*(i-16),140);
    }
    for(let i = 22; i<28; i++){
      this.connectors[i][1] = createVector(135 + 8*(i-22),140);
    }
  }
  
  draw(){
    fill(0,0,200);
    stroke(0,0,0);
    strokeWeight(1);
    beginShape();
    vertex(this.x+0, this.y+0);
    vertex(this.x+0, this.y+150);
    vertex(this.x+184, this.y+150);
    vertex(this.x+184, this.y+140);
    vertex(this.x+192, this.y+135);
    vertex(this.x+192, this.y+50);
    vertex(this.x+184, this.y+40);
    vertex(this.x+184,this.y+5);
    vertex(this.x+179, this.y+0);
    vertex(this.x+0,this.y+0);
    endShape(CLOSE);
    
    rectMode(CORNER);
    fill(200);
    rect(this.x-18,this.y+27,45,34);
    fill(0);
    rect(this.x-5,this.y+116,30,25);
    
    for(let i=0; i<28; i++){
      rectMode(CENTER);
      strokeWeight(0);
      fill(0);
      rect(this.x+this.connectors[i][1].x, this.y+this.connectors[i][1].y,8,8);
      fill(200);
      rect(this.x+this.connectors[i][1].x, this.y+this.connectors[i][1].y,3,3);
      
      push();
      textSize(8);
      
      if(i<16){
        textAlign(RIGHT);
        translate(this.x+this.connectors[i][1].x+3, this.y+this.connectors[i][1].y+7);
      }
      else{
        textAlign(LEFT);
        translate(this.x+this.connectors[i][1].x+3, this.y+this.connectors[i][1].y-7); 
      }
      rotate(-PI/2);
      text(this.connectors[i][0], 0,0);
      pop();
    }
  }
  
  hover(){
    for(let i=0; i<28; i++){
      
      let distance = dist(mouseX,mouseY,this.x+this.connectors[i][1].x, this.y+this.connectors[i][1].y);
    
      if(distance <4){
        rectMode(CENTER);
        fill(255,0,0);
        rect(this.x+this.connectors[i][1].x, this.y+this.connectors[i][1].y,3,3);
      }
    }
  }
  
  pressedCheck(){
    
    let result = false;
    
    for(let i=0; i<28; i++){
      
      let distance = dist(mouseX,mouseY,this.x+this.connectors[i][1].x, this.y+this.connectors[i][1].y);
      
      if(distance <4){
        result = true;
      }
    }
    return result;
  }
  
  pressed(){
    
    let result = [];
    
    for(let i=0; i<28; i++){
      
      let distance = dist(mouseX,mouseY,this.x+this.connectors[i][1].x, this.y+this.connectors[i][1].y);
      
      if(distance <4){
        result[0] = this.connectors[i][0];
        result[1] = this.x+this.connectors[i][1].x;
        result[2] = this.y+this.connectors[i][1].y;
      }
    }
    return result;
  }
  getConnectors(){
    let newConnectors = [];

    for(let i = 0; i < this.connectors.length; i++){
      newConnectors[i] = this.connectors[i][0]
    }
    return newConnectors;
  }
}