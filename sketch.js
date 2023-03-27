let Arduino;
let connections = [];
let Led;
let Resistor;
let connected = false;

function setup() {
  createCanvas(400, 400);
  Arduino = new arduino(100,100);
  Led = new led(100, 50, 255, 0, 0);
  Resistor = new resistor(200, 150, 50);
}

function draw() {
  background(255);
  Arduino.draw();
  Arduino.hover();
  Led.draw();
  Led.hover();
  Resistor.draw();
  Resistor.hover();
  for(let i = 0; i < connections.length; i++){
    connections[i].draw();
  }
}

function mousePressed(){

  let pressedObject = false;

  let result = [];

  if(Arduino.pressedCheck() == true){
    
    result = Arduino.pressed();
    
    pressedObject = true;
  }
  
  if(Led.pressedCheck() == true){
    result = Led.pressed();

    pressedObject = true;
  }
  if(Resistor.pressedCheck() == true){
    result = Resistor.pressed();

    pressedObject = true;
  }

  if(pressedObject == true){
    if(connected == false){
      connections.push(new connection(result[0], result[1], result[2]));
      connected = true;
    }
    else{
      connections[connections.length-1].addEndPosition(result[0], result[1], result[2]);
      connected = false;
    }
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