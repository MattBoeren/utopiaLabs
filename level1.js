class level1{

  constructor(){
    objects = [];

    objects[0] = new arduino(100,100);
    objects[1] = new led(100, 50, 255, 0, 0);
    objects[2] = new resistor(150, 150, 50);

    this.introText1 = "One of the simplest electronic componants in electronics is an LED. LED is an abbreviation for light emmiting diode. It is a diode which means the LED will only let current true if current passes in a specific way. A positive voltage will need to be applied at the anode (positive side) of the LED. The ground has to be connected to the catode (negative side) of the LED. You can recognise the anode of the led by the longer leg of the LED or the bump on the LED itself.";

    this.introText2 = "A flaw of LED's is that their resistance is to low. This means that if you connect an LED to the arduino without a resistor you will short circuit the arduino. To avoid that we can connect a resistor in series to the LED. The resistance of the resistor can be calculated by the following formula: R = (U-Uled)/I. With R being the resistance, U being the voltage, Uled the voltage the led needs and I being the current of the led. Their is not a resistor for every resistorvalue so it is best to use a higher resistor value than you calculated.";

    this.challenge = "Challange: Which resistor fits best? if the arduino puts out 5V, the LED needs 2.2V and uses 0.02A of current.";

    this.element = createElement('p',this.challenge);
  }

  draw(){

    if(intro == true){
      text(this.introText1, 10,10,350,150);
      text(this.introText2, 10,150,350,400);
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
  }
}