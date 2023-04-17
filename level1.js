class level1{

    constructor(){
        this.objects = [];

        this.objects[0] = new arduino(100,100);
        this.objects[1] = new led(100, 50, 255, 0, 0);
        this.objects[2] = new resistor(200, 150, 50);

        this.connections = [];
        this.connected = false;
    }

    draw(){
      for(let i = 0; i < this.objects.length; i++){
        this.objects[i].draw();
        this.objects[i].hover();
      }
      for(let i = 0; i < this.connections.length; i++){
        this.connections[i].draw();
      }
    }

    pressed(){

      this.pressedObject = false;
      this.result = [];

      for(let i=0; i< this.objects.length; i++){
        if(this.objects[i].pressedCheck() == true){
    
          this.result = this.objects[i].pressed();
                
          this.pressedObject = true;
        }
      }

      if(this.pressedObject == true){
        if(this.connected == false){
          this.connections.push(new connection(result[0], result[1], result[2]));
          this.connected = true;
        }
        else{
          this.connections[connections.length-1].addEndPosition(result[0], result[1], result[2]);
          this.connected = false;
        }
      }
        
      if((this.pressedObject == false) && (this.connected == true)){
        this.connections[connections.length-1].addPosition(mouseX, mouseY);
      }
    }


    Key(input){
      if(this.connected == true){
        if(input == 'r'){
          this.connections[connections.length-1].setColor(255, 0, 0);
        }
      
        if(input == 'g'){
          this.connections[connections.length-1].setColor(0,100,0);
        }
    
        if(input == 'b'){
          this.connections[connections.length-1].setColor(0, 0, 255);
        }
        
        if(input == 'l'){
          this.connections[connections.length-1].setColor(0, 0, 0);
        }
      }
    
      // if(keyCode == BACKSPACE){
      //   this.connections.pop();
      //   if(connected == true){
      //     this.connected = !connected;
      //   }
      // }
    }
}