class level3{
  constructor(){
    objects = [];

    objects[0] = new arduino(100,100);
    objects[1] = new led(100, 50, 255, 0, 0, 1);
    objects[2] = new resistor(150, 150, 50, 1);
    objects[3] = new button(200, 50, 1);

    buttons = [];

    buttons[0] = createButton("continue");

    intro = true;

    succes = false;

    this.introText1 = "hello introText level 3";
  }

  draw(){
    if(intro == true){
      noStroke();
      fill(0,0,0);
      text(this.introText1, 10, 10, 350, 150);
      buttons[0].mousePressed(level.continue);
    }
    else{
      for(let i = 0; i < objects.length; i++){
        objects[i].draw();
        objects[i].hover();
      }
      for(let i = 0; i < connections.length; i++){
        connections[i].draw();
      }
    }
    if(succes == true){
      if(objects[3].buttonPressed() == true){
        objects[1].on();
      }
      else{
        objects[1].off();
      }
    }
  }

  continue(){
    buttons[0].remove();
    simulateButton.show();
    intro = false;
  }

  simulate(){
    let solution = [];
    solution[0] = [];
    solution[1] = [];

    solution[0][0] = "D2";
    solution[0][1] = "1-";
    solution[0][2] = "R1";
    solution[0][3] = "B1";
    solution[0][4] = "B1"

    
    solution[1][0] = "1+";
    solution[1][1] = "R1";
    solution[1][2] = "GND";
    solution[1][3] = "GND";
    solution[1][4] = "D3";

    let simulationResult = checkSolution(solution);

    if(simulationResult == false){
      
      solution = [];
      solution[0] = [];
      solution[1] = [];
  
      solution[0][0] = "D2";
      solution[0][1] = "R1";
      solution[0][2] = "1-";
      solution[0][3] = "B1";
      solution[0][4] = "B1"
  
      solution[1][0] = "R1";
      solution[1][1] = "1+";
      solution[1][2] = "GND";
      solution[1][3] = "GND";
      solution[1][4] = "D3";

      simulationResult = checkSolution(solution);
    }

    if(simulationResult == true){
      succes = true;
      answer.html("The simulation was succesfull.");
      simulateButton.hide();
      nextButton.show();
    }
    else{
      answer.html("The simulation was not succesfull. Try again.");
    }
    answer.show();
  }

  next(){

  }
}