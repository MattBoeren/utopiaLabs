
let level;
let objects = [];
let connected = false;
let connections = [];

function setup() {
  createCanvas(400, 400);
  level = new level1();
}

function draw() {
  background(255);
  level.draw();
}

function mousePressed(){
  let result = [];
  let pressedObject = false;

  for(let i = 0; i < objects.length; i++){
    if(objects[i].pressedCheck() == true){

      result = objects[i].pressed();
            
      pressedObject = true;
    }
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

  if(key == "Backspace"){
    connections.pop();
    if(connected == true){
      connected = !connected;
    }
  }
}