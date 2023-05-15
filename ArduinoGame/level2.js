class level2{
  constructor(){
    
    objects = [];

    objects[0] = new arduino(100,100);
    objects[1] = new led(100, 50, 255, 0, 0, 1);
    objects[2] = new resistor(150, 150, 50, 1);

    intro = true;
    buttons[0] = createButton("continue");
    buttons[0].parent("#B2");
    this.introText1 = "Now we know how the hardware works so we can start with the coding part. The coding of an Arduino has two main functions. The void setup(){} which runs ones before running the void loop(){}. The loop runs as long the Arduino has power. Before the void setup variables can be defined. The main thing that need to happen in the setup is defining if a pin is an input or an output. This can be done using the pinMode() function. The function needs two attributes: the pin itself and if it is an INPUT or an OUTPUT. Within the loop the main program can be programmed. The function digitalWrite() will write a digital output HIGH or LOW. The delay function will delay the program at that point by the time given in milliseconds.";

    this.ledStatus = false;
  }
  
  draw(){
    if(intro == true){
      noStroke();
      fill(0,0,0);
      textSize(14);
      textAlign(LEFT);
      text(this.introText1, 10, 10, 350, 350);
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

      if(succes == true){

        if( (millis() - myMillis) >= 1000){

          this.ledStatus = !this.ledStatus;

          if(this.ledStatus == true){
            objects[1].on();
          }
          else{
            objects[1].off();
          }
          myMillis = millis();
        }
      }
    }
  }

  continue(){
    buttons[0].remove();
    simulateButton.show();
    intro = false;

    challange.html("Challenge: given the following code connect the led that it will blink if the code will be ran.");
    challange.show();

    codeImg.attribute('src', "codeSnipits/codeLevel2.png");
    codeImg.show();
  }

  simulate(){

    let solution = [];
    solution[0] = [];
    solution[1] = [];

    solution[0][0] = "D2";
    solution[0][1] = "1-";
    solution[0][2] = "R1";
    
    solution[1][0] = "1+";
    solution[1][1] = "R1";
    solution[1][2] = "GND";

    let simulationResult = checkSolution(solution);

    if(simulationResult == false){

      solution = [];
      solution[0] = [];
      solution[1] = [];
  
      solution[0][0] = "D2";
      solution[0][1] = "R1";
      solution[0][2] = "1-";
  
      solution[1][0] = "R1";
      solution[1][1] = "1+";
      solution[1][2] = "GND";

      simulationResult = checkSolution(solution);
    }

    if(simulationResult == true){
      succes = true;
      answer.html("The simulation was succesfull.");
      simulateButton.hide();
      nextButton.show();
      myMillis = millis();
    }
    else{
      answer.html("The simulation was not succesfull. Try again.");
    }
    answer.show();
  }

  next(){
    challange.hide();
    answer.hide();
    nextButton.hide();
    connections = [];
    codeImg.hide();
    level = new level3();
  }
}