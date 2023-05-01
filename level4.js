class level4{
  constructor(){
    objects = [];
  
    objects[0] = new arduino(100,100);
    objects[1] = new led(100, 50, 255, 0, 0, 1);
    objects[2] = new resistor(150, 150, 50, 1);
    objects[3] = new resistor("10K", 250, 50, 2);
    objects[4] = new button(220, 50, 1);
    succes = false;
  }

  draw(){
    for(let i = 0; i < objects.length; i++){
      objects[i].draw();
      objects[i].hover();
    }
    for(let i = 0; i < connections.length; i++){
      connections[i].draw();
    }
    if(succes == true){
      if(objects[4].buttonPressed() == true){
        objects[1].on();
      }
      else{
        objects[1].off();
      }
    }
  }

  simulate(){
    let solution = [];
    solution[0] = [];
    solution[1] = [];

    solution[0][0] = "D2";
    solution[0][1] = "1-";
    solution[0][2] = "R1";
    solution[0][3] = "B1";
    solution[0][4] = "B1";
    solution[0][5] = "R2";
    solution[0][6] = "R2";
    
    solution[1][0] = "1+";
    solution[1][1] = "R1";
    solution[1][2] = "GND";
    solution[1][3] = "5V";
    solution[1][4] = "D3";
    solution[1][5] = "GND";
    solution[1][6] = "D3";

    let simulationResult = checkSolution(solution);

    if(simulationResult == false){
      
      solution = [];
      solution[0] = [];
      solution[1] = [];
  
      solution[0][0] = "D2";
      solution[0][1] = "R1";
      solution[0][2] = "1-";
      solution[0][3] = "B1";
      solution[0][4] = "B1";
      solution[0][5] = "R2";
      solution[0][6] = "R2";
  
      solution[1][0] = "R1";
      solution[1][1] = "1+";
      solution[1][2] = "GND";
      solution[1][3] = "GND";
      solution[1][4] = "D3";
      solution[1][5] = "GND";
      solution[1][6] = "D3";

      simulationResult = checkSolution(solution);
    }

    if(simulationResult == true){
        succes = true;
        answer.html("The simulation was succesfull.");
        simulateButton.hide();
      }

      else{
        answer.html("The simulation was not succesfull. Try again.");
      }

      answer.show();
  }
}