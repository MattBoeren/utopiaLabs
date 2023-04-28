class level3{
  constructor(){
    objects = [];

    objects[0] = new arduino(100,100);
    objects[1] = new led(100, 50, 255, 0, 0, 1);
    objects[2] = new resistor(150, 150, 50, 1);
    objects[3] = new button(200,50);
  }
  draw(){
    for(let i = 0; i < objects.length; i++){
      objects[i].draw();
      objects[i].hover();
    }
    for(let i = 0; i < connections.length; i++){
      connections[i].draw();
    }
  }
}