// declare variables for the three images
let blueLiquid, redLiquid, greenLiquid;
let right;
let wrong;
let pHscale;
let Dissappear;

// declare a variable for the current image
let currentLiquid;

// declare variables for the three buttons
let buttonLemon, buttonSoap, buttonReset;

//declare variables for the feedback
let feedback;

//declare score variable
let score = 1;

function preload() {
  // load the BlueLiquid image
  blueLiquid = loadImage('Images/BlueLiquid.png');

  // load the RedLiquid image
  redLiquid = loadImage('Images/RedLiquid.png');

  // load the GreenLiquid image
  greenLiquid = loadImage('Images/GreenLiquid.png');
  
  //right --> green checkmark symbol
  right=loadImage('Images/CheckMarkIcon.png');
  
  //wrong --> red cross symbol
  wrong=loadImage('Images/RedCrossIcon.png');
  
  //pHscale
  pHscale=loadImage('Images/RedCabbage_pHscale.png')
  
  //hide
  Dissappear=loadImage('Images/Hide.png')
  
}

function setup() {
  
  // create a canvas
  createCanvas(1000, 700); 
  
   // set the current image to the BlueLiquid image
  currentLiquid = blueLiquid;

  // create the lemon button
  buttonLemon = createButton('Lemon');
  buttonLemon.position(10, 50); 
  buttonLemon.style('background-color', 'black');
  buttonLemon.style('color', 'white'); 
  buttonLemon.style('font-size', '1.5em'); 
  
  // when button pressed --> change image + add scores
  buttonLemon.mousePressed(function () {
    currentLiquid = redLiquid; 
    
    score += 1;
    print(score);
    
    feedback = "Yes, you did it right.\nYou added lemon to it which is an acid\nthis made the neutral liquid acidic (pH < 7) which made it turn red."
    
    //Reset buttons
    buttonReset.show(); 
    buttonLemon.hide(); 
    buttonSoap.hide();  
    
  });

  // create the soap button
  buttonSoap = createButton('Soap');
  buttonSoap.position(110, 50);
  buttonSoap.style('background-color', 'black');
  buttonSoap.style('color', 'white');
  buttonSoap.style('font-size', '1.5em');
  
  
  buttonSoap.mousePressed(function () {
    currentLiquid = greenLiquid;
    
    //reset buttons
    buttonReset.show();
    buttonLemon.hide();
    buttonSoap.hide(); 
    
    score -= 1;
    print(score);
    
    feedback="You needed to add lemon to the red cabbage liquid\nto make it acidic (pH < 7). Now you added soap to it\nthis made it alkali (pH > 7) and turned it green."
    
  });

  // create the reset button
  buttonReset = createButton('Reset');
  buttonReset.position(60, 50);
  buttonReset.style('background-color', 'black');
  buttonReset.style('color', 'white'); 
  buttonReset.style('font-size', '1.5em');
  
  //hide the reset button
  buttonReset.hide();
  buttonReset.mousePressed(function () {

    currentLiquid = blueLiquid;
    
    //Reset buttons
    buttonReset.hide(); 
    buttonLemon.show(); 
    buttonSoap.show(); 
    
    //Change score
    score = 1;
    
  });
}

function draw() {
  background(226);
  image(currentLiquid, 15, 100, blueLiquid.width / 2, blueLiquid.height / 2); 
    strokeWeight(0);
    textSize(14);
  
  text("Click on the right button to turn the blue liquid to a red liquid.\n\nTip: the liquid you have now is red cabbage liquid which is neutral (pH 7),\nyou need to make this acidic (pH < 7)", 200, 200);
  
    // show pH scale
  image(pHscale,25,400,width=700,height=250);
  
  
  //if the right button is pressed show the message Wel Done + image green checkmark
 if (score>1){
   //Dissappear the question
   image(Dissappear,200,100,width=500,height=160);
   
   //display checkmark
   image(right,465,48,width=70,height=70);
   
   textSize(30);
   text("Well Done!", 300,90)
   
   textSize(18);
   stroke(255);
    strokeWeight(4);
   text(feedback,200,300)
 } 
  // else show the message Oop wrong choice + image red cross
    if (score==0){
    //Dissappear the question
    image(Dissappear,200,100,width=500,height=160);
    
    //display red cross
    image(wrong,570,48,width=70,height=70);
      
    textSize(30); 
    text("Oops wrong choice", 300,90)
      
    textSize(18);
    stroke(255);
    strokeWeight(4);
    text(feedback,200,300)
    } 
}
