class resistor{
  constructor(value, x, y, num){
    this.value = value;
    this.x = x;
    this.y = y;

    this.num = num;
  }
  
  draw(){
    fill(200);
    rectMode(CORNER);
    rect(this.x, this.y, 40, 3);
    fill(0,0,255);
    rect(this.x+5, this.y-5, 30, 13, 5);
    textAlign(CENTER, CENTER);
    fill(255,255,255);
    textSize(10);
    text(this.value + "Ω", this.x+20, this.y+1);
  }

  hover(){
    let distance = dist(mouseX, mouseY, this.x, this.y+1);

    if(distance < 4){
        fill(255,0,0);
        rectMode(CENTER);
        rect(this.x, this.y+1, 5, 5);
      }
  
      distance = dist(mouseX,mouseY, this.x+40, this.y+1);
  
      if(distance < 4){
        fill(255,0,0);
        rectMode(CENTER);
        rect(this.x+40, this.y+1, 5, 5);
      }
  }

  pressedCheck(){
    
    let result = false;
    
    let distance = dist(mouseX, mouseY, this.x, this.y+1);

    if(distance < 4){
        result = true;
      }
  
      distance = dist(mouseX,mouseY, this.x+40, this.y+1);
  
      if(distance < 4){
        result = true;
      }
    return result;
  }

  pressed(){
    
    let result = [];
    
    let distance = dist(mouseX,mouseY, this.x, this.y+1);

    if(distance < 4){
      result[0] = "LR" + String(this.num);
      result[1] = this.x;
      result[2] = this.y+1;
    }

    distance = dist(mouseX,mouseY, this.x+40, this.y+1);

    if(distance < 4){
      result[0] = "RR" + String(this.num);
      result[1] = this.x+40;
      result[2] = this.y+1;
    }
    return result;
  }
}