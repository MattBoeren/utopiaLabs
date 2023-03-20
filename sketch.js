let Arduino;
let connections = [];
let Led;
let connected = false;

function setup() {
  createCanvas(400, 400);
  Arduino = new arduino(100,100);
  Led = new led(50, 50, 255, 0, 0);
}

function draw() {
  background(255);
  Arduino.draw();
  Arduino.hover();
  Led.draw();
  for(let i = 0; i < connections.length; i++){
    connections[i].draw();
  }
}

function mousePressed(){

  let pressedObject = false;



  if(Arduino.pressedCheck() == true){
    
    let result = Arduino.pressed();
    
    if(connected == false){
      connections.push(new connection(result[0], result[1], result[2]));
      connected = true;
    }
    else{
      connections[connections.length-1].addEndPosition(result[0], result[1], result[2]);
      connected = false;
    }
    
    pressedObject = true;
  }
  
  
  if((pressedObject == false) && (connected == true)){
    connections[connections.length-1].addPosition(mouseX, mouseY);
  }

}

function keyPressed(){

  if(connected == true){
    if(key == 'r'){
      connections[connections.length-1].setColor(255, 0, 0);
    }
  
    if(key == 'g'){
      connections[connections.length-1].setColor(0,100,0);
    }

    if(key == 'b'){
      connections[connections.length-1].setColor(0, 0, 255);
    }
    
    if(key == 'l'){
      connections[connections.length-1].setColor(0, 0, 0);
    }
  }
  if(keyCode == BACKSPACE){
    connections.pop();
    if(connected == true){
      connected = !connected;
    }
  }
}