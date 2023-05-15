class level3{
  constructor(){
    objects = [];

    objects[0] = new arduino(100,100);
    objects[1] = new led(100, 50, 255, 0, 0, 1);
    objects[2] = new resistor(150, 150, 50, 1);
    objects[3] = new button(220, 50, 1);

    buttons = [];

    buttons[0] = createButton("continue");
    buttons[0].parent("#B2");

    intro = true;

    succes = false;

    this.introText1 = "One of the most common inputs in electronics is a pushbutton. A flaw of using buttons is that as an input it will create a short circuit. Another flaw is that there are electromagnetic frequentcies in the air that can be read by the Arduino because wires are antennas aswell. This can be solved by using a resistor. This can be done in two ways called pulldown and pullup. The pulldown method can be done by connecting one side of the button to the 5V pin. The other side needs two connections one to a digital pin and one via a resistor to the ground. The pullup method can be done by connecting one side of the button to a digital pin and the other to the groud. This is because the arduino has build in pullup resistors. If you use this method in the you need to use INPUT_PULLUP instead of INPUT in the pinMode function. A flaw of this method is that the logic in the code will be reversed If the button is pressed it will give a low signal. The button can be read out using the digitalRead function in the code.";
  }

  draw(){
    if(intro == true){
      noStroke();
      fill(0,0,0);
      textSize(14);
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
    challange.html("Challenge: connect the LED and the button that if the following code runs the LED will light up if the button is pressed.");
    challange.show();
    codeImg.attribute('src', "codeSnipits/codeLevel3.png");
    codeImg.show();
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
      answer.html("The simulation was succesfull. Press the black part of the button to light the LED.");
      simulateButton.hide();
      nextButton.show();
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
    simulateButton.show();
    level = new level4();
  }
}