
let levels = [];

function setup() {
  createCanvas(400, 400);
  levels[0] = new level1();
}

function draw() {
  background(255);
  levels[0].draw();

}

function mousePressed(){
  levels[0].pressed();
}

function keyPressed(){
  levels[0].Key(key);
}