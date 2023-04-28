class button{
  constructor(x, y, num){
    this.x = x;
    this.y = y;
    this.num = num;
    this.height = 5;
  }

  draw(){
    fill(150);
    rectMode(CORNER);
    rect(this.x,this.y,20,10);
    fill(0);
    rect(this.x+5, this.y-this.height, 10, this.height);
    fill(200);
    rect(this.x+3, this.y+10, 3, 5);
    rect(this.x+14, this.y+10, 3, 5);

  }

  hover(){
    let distance = dist(mouseX,mouseY, this.x+5, this.y+14);
    
    rectMode(CENTER);
    if(distance < 4){
      fill(255,0,0);
      rect(this.x+5, this.y+14, 5, 5);
    }

    distance = dist(mouseX,mouseY, this.x+16, this.y+14);

    if(distance < 4){
      fill(255,0,0);
      rect(this.x+16, this.y+14, 5, 5);
    }
  }

  pressedCheck(){
    let result = false;

    let distance = dist(mouseX,mouseY, this.x+5, this.y+14);
    
    if(distance < 4){
      result = true;
    }

    distance = dist(mouseX,mouseY, this.x+16, this.y+14);

    if(distance < 4){
      result = true;
    }

    return result;

  }

  pressed(){
    let result = [];
    let distance = dist(mouseX,mouseY, this.x+5, this.y+14);
    
    if(distance < 4){
      result[0] = "LB" + String(this.num);
      result[1] = this.x+5;
      result[2] = this.y+14;
    }

    distance = dist(mouseX,mouseY, this.x+16, this.y+14);

    if(distance < 4){
      result[0] = "RB" + String(this.num);
      result[1] = this.x+16;
      result[2] = this.y+14;
    }
    return result;
  }

  buttonPressed(){
    let result = false;
    if(mouseIsPressed){
      if((mouseX >= this.x+5) && (mouseX <= this.x+15)){
        if((mouseY <= this.y) && (mouseY >= this.y-5)){
          result = true;
          this.height = 3;
        }
      }
    }
    else{
      this.height = 5;
    }
    return result;
  }
}