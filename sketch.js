
let level;
let objects = [];
let connected = false;
let connections = [];
let buttons = [];
let intro = true;
let challange;
let answer;
let simulateButton;
let nextButton;
let succes = false;
let myMillis;

function setup() {
  createCanvas(400, 400);
  level = new level1();

  simulateButton = createButton("simulate");
  simulateButton.hide();

  nextButton = createButton("next level");
  nextButton.hide();
  
}

function draw() {
  background(255);

  level.draw();
  
  simulateButton.mousePressed(level.simulate);
  nextButton.mousePressed(level.next);
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

  let firstSide = "";
  let whichElement = "";
  let firstSidesDone = [];
  let nonPolarElements = ["R", "B"];
  let connectors = objects[0].getConnectors();

  for(let i = 0; i < connections.length; i++){
    for(let j = 0; j < connections.length; j++){
      if(i != j){
        if(connections[i].getStart() == connections[j].getEnd()){
          if(notInList(connections[i].getStart(),connectors) == true){
            if(inList(connections[i].getEnd(),connectors) == true){
              connections[j].setEnd(connections[i].getEnd());
            }
            else{
              connections[i].setEnd(connections[j].getStart());
            }
          }
        }

        if(connections[i].getStart() == connections[j].getStart()){
          if(notInList(connections[i].getStart(),connectors) == true){
            if(inList(connections[i].getEnd(),connectors) == true){
              connections[j].setStart(connections[i].getEnd());
            }
            else{
              connections[i].setStart(connections[j].getEnd());
            }
          }
        }

        if(connections[i].getEnd() == connections[j].getEnd()){
          if(notInList(connections[i].getEnd(),connectors) == true){
            if(inList(connections[i].getStart(),connectors) == true){
              connections[j].setEnd(connections[i].getStart());
            }
            else{
              connections[i].setEnd(connections[j].getStart());
            }
          }
        }
        if(connections[i].getEnd() == connections[j].getStart()){
          if(notInList(connections[i].getEnd(),connectors) == true){
            if(inList(connections[i].getStart(),connectors) == true){
              connections[j].setStart(connections[i].getStart());
            }
            else{
              connections[i].setEnd(connections[j].getEnd());
            }
          }
        }
      }
    }
  }

  for(let i = 0; i < connections.length; i++){
    console.log(String(connections[i].getStart()) + " " + String(connections[i].getEnd()));
  }

  for(let i = 0; i < connections.length; i++){
    
    let start = connections[i].getStart();
    let end = connections[i].getEnd();

    if((firstSide == "") 
    && (notInList(start.substring(1), firstSidesDone) == true) 
    && (notInList(end.substring(1), firstSidesDone) == true)){

      if(inList(start.charAt(1), nonPolarElements) == true){
        firstSide == start.charAt(0);
        start = start.substring(1);
        whichElement = start;
      }
      if(inList(end.charAt(1), nonPolarElements) == true){
        firstSide == end.charAt(0);
        end = end.substring(1);
        whichElement = end;
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
    if(firstSide != ""){
      let count = 0;
      let index1, index2;

      for(let i = 0; i < solution.length; i++){
        for(let j = 0; j < solution[0].length; j++){
          if(solution[i][j] == whichElement){
            count += 1;
            index1 = i;
            index2 = j;
          }
        }
      }
      if(count == 2){
        firstSide = "";
      }
      if(count == 1){
        if(firstSide == "L"){
          solution[index1][index2] = "R" + whichElement;
        }
        else{
          solution[index1][index2] = "L" + whichElement;
        }
        firstSidesDone.append(whichElement);
        firstSide = "";
      }
    }
  }
  let result = true;
  if(solution[0].length == connections.length){
    for(let i = 0; i < solution.length; i++){
      for(let j = 0; j < solution[0].length; j++){
        if(solution[i][j] != "done"){
          result = false;
        }
      }
    }
  }
  else{
    result = false;
  }

  return result;
}

function notInList(item, list){
  let result = true;
  for(let i = 0; i < list.length; i++){
    if(list[i] == item){
      result = false;
    }
  }
  return result;
}

function inList(item, list){
  let result = false;
  for(let i = 0; i < list.length; i++){
    if(list[i] == item){
      result = true;
    }
  }
  return result;
}