let balls = []; 
let boxX = 300;
let boxY = 400;
let boxWidth = 200;
let boxHeight = 100;
let score = 0;
let img;
let button;
function displayText() {
  document.getElementById("demo").innerHTML = "4H+C";
}
function preload() {
  img = loadImage('methane.png');
}
function setup() {
  createCanvas(600, 500);
    balls.push(new Ball(random(500), random(310), String.fromCharCode(72)));
    balls.push(new Ball(random(500), random(310), String.fromCharCode(72)));
    balls.push(new Ball(random(500), random(310), String.fromCharCode(72)));
    balls.push(new Ball(random(500), random(310), String.fromCharCode(72)));
    balls.push(new Ball(random(500), random(310), String.fromCharCode(67)));

  for (let i = 0; i < 5; i++) {
    balls.push(new Ball(random(500), random(310), String.fromCharCode(65 + floor(random(7)))));
  }

  button = createButton('Finished!');
  button.mousePressed(goToNextPage);
  button.hide();

}
///////////////////////////////////////////////////////////////////////////
function draw() {
  background(50, 89, 100);
  strokeWeight(4);
  stroke(255);
  fill(0);
  rect(boxX, boxY, boxWidth, boxHeight);
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }
  
for (let i = 0; i < balls.length; i++) {
  if (balls[i].x > boxX && balls[i].x < boxX + boxWidth && balls[i].y > boxY && balls[i].y < boxY + boxHeight ) {
    if (balls[i].symbol === "H" || balls[i].symbol ==="C") {
      balls.splice(i, 1);
      score++;
    } else {
      balls[i].x = random(width);
      balls[i].y = random(height);
    }
  }
}



 if (score === 5) {
    image(img, width/2-40 - img.width/2, height/2 - img.height/2);
    
    button.show();
  }


}

function goToNextPage() {
  window.location.href = "../../index.html";
}

function mouseClicked() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].mouseClicked();
  }
}

class Ball {
  constructor(x, y, symbol) {
    this.x = x;
    this.y = y;
    this.diameter = random(20, 30);
    this.speed = 0.5;
    this.isClicked = false;
    this.symbol = symbol;
  }

  move() {
    if (this.isClicked) { 
      this.x = mouseX;
      this.y = mouseY;
    } else {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
    
    // 
    if (this.x < -this.diameter/2) {
      this.x = width + this.diameter/2;
    } else if (this.x > width + this.diameter/2) {
      this.x = -this.diameter/2;
    }
    
    if (this.y < -this.diameter/2) {
      this.y = height + this.diameter/2;
    } else if (this.y > height + this.diameter/2) {
      this.y = -this.diameter/2;
    }
  }
  
  display() {
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(15);
    text(this.symbol, this.x, this.y);
  }
  mouseClicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.diameter / 2) {
      this.isClicked = !this.isClicked;
    }
  }
}
