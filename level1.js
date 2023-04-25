class level1{
  
  constructor(){
    objects = [];

    objects[0] = new arduino(100,100);
    objects[1] = new led(100, 50, 255, 0, 0, 1);
    objects[2] = new resistor(150, 150, 50, 1);

    this.introText1 = "One of the simplest electronic componants in electronics is an LED. LED is an abbreviation for light emmiting diode. It is a diode which means the LED will only let current true if current passes in a specific way. A positive voltage will need to be applied at the anode (positive side) of the LED. The ground has to be connected to the catode (negative side) of the LED. You can recognise the anode of the led by the longer leg of the LED or the bump on the LED itself.";

    this.introText2 = "A flaw of LED's is that their resistance is to low. This means that if you connect an LED to the arduino without a resistor you will short circuit the arduino. To avoid that we can connect a resistor in series to the LED. The resistance of the resistor can be calculated by the following formula: R = (U-Uled)/I. With R being the resistance, U being the voltage, Uled the voltage the led needs and I being the current of the led. Their is not a resistor for every resistorvalue so it is best to use a higher resistor value than you calculated.";


    challange = createElement('p',"Challange: Which resistor fits best? if the arduino puts out 5V, the LED needs 2.2V and uses 0.02A of current.");

    buttons[0] = createButton("100Ω");
    buttons[1] = createButton("150Ω");
    buttons[2] = createButton("200Ω");

    answer = createElement('p', "Choose an answer.");
  }

  draw(){

    if(intro == true){
      text(this.introText1, 10,10,350,150);
      text(this.introText2, 10,150,350,400);

      buttons[0].mousePressed(level.wrong);
      buttons[1].mousePressed(level.right);
      buttons[2].mousePressed(level.wrong);
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
  }

  right(){
    intro = false;

    for(let i = 0; i < buttons.length; i++){
      buttons[i].remove();
    }

    simulateButton.show();

    challange.html("Challange: Connect the LED to the 5V and GND pin of the arduino in the right way to light the LED. Click the simulate button afterwords.");

    answer.hide();
  }

  wrong(){
    intro = true;
    answer.html("The answer is wrong.");
  }

  simulate(){
    let solution1 = [];
    solution1[0] = [];
    solution1[1] = [];

    solution1[0][0] = "5V";
    solution1[0][1] = "1-";
    solution1[0][2] = "R1";
    
    solution1[1][0] = "1+";
    solution1[1][1] = "R1";
    solution1[1][2] = "GND";

    let solution2 = [];
    solution2[0] = [];
    solution2[1] = [];

    solution2[0][0] = "5V";
    solution2[0][1] = "R1";
    solution2[0][2] = "1-";

    solution2[1][0] = "R1";
    solution2[1][1] = "1+";
    solution2[1][2] = "GND";


    let correct = checkSolution(solution1);

    if(correct == false){
      correct = checkSolution(solution2);
    }

    if(correct == true){
      objects[1].on();
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
    challange.hide();
    answer.hide();
    nextButton.hide();
    connections = [];
    level = new level2();
  }
}