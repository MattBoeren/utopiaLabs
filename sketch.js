
let level;
let objects = [];
let connected = false;
let connections = [];
let buttons = [];
let intro = true;
let rightAnswer;
let challange;
let answer;
let simulate;

function setup() {
  createCanvas(400, 400);
  level = new level1();

  for(let i = 0; i < buttons.length; i++){
    if(i == rightAnswer){
      buttons[i].mousePressed(level.right);
    }
    else{
      buttons[i].mousePressed(level.wrong);
    }
  }

  simulate = createButton("simulate");
  simulate.hide();
  simulate.mousePressed(level.simulate);
  
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

function checkSolution(givenSolution){

  let solution = givenSolution;

  let firstResistorSide = "";
  let whichResistor = "";

  for(let i = 0; i < connections.length; i++){
    
    let start = connections[i].getStart();
    let end = connections[i].getEnd();

    if(firstResistorSide == ""){
      if(start.charAt(1) == "R"){
        firstResistorSide == start.charAt(0);
        start = start.substring(1);
        whichResistor = start;
      }
      if(end.charAt(1) == "R"){
        firstResistorSide == end.charAt(0);
        end = end.substring(1);
        whichResistor = end;
      }
    }

    for(let j = 0; j <= solution[0].length; j++){
      if((start == solution[0][j])&&(end == solution[1][j])){
        solution[0][j] = "done";
        solution[1][j] = "done";
      }
      else{
        if((end == solution[0][j])&&(start == solution[1][j])){
          solution[0][j] = "done";
          solution[1][j] = "done";
        }
      }
    }
    if(firstResistorSide != ""){
      let count = 0;
      let index1, index2;

      for(let i = 0; i < solution.length; i++){
        for(let j = 0; j < solution[0].length; j++){
          if(solution[i][j] == whichResistor){
            count += 1;
            index1 = i;
            index2 = j;
          }
        }
      }
      if(count == 2){
        firstResistorSide = "";
      }
      if(count == 1){
        if(firstResistorSide == "L"){
          solution[index1][index2] = "R" + whichResistor;
        }
        else{
          solution[index1][index2] = "L" + whichResistor;
        }
      }
    }
  }

  let result = true;
  for(let i = 0; i < solution.length; i++){
    for(let j = 0; j < solution[0].length; j++){
      if(solution[i][j] != "done"){
        result = false;
      }
    }
  }

  return result;
}