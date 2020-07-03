var beast;
var color1;
var color2;
var color3;
var oneThird;
var movingTowardsMouse;

function setup () {
  createCanvas(window.innerWidth, window.innerHeight);
  helperVariables(); // assigns global variable values other than beast

  beast = {
    x: 50,
    y: height * 2/3,
    size: 80,
    speed: 3,
    speedX: 3,
    speedY: 3,
    color: color1,
    message: "Hello world",
  }
}

function draw () {
  helperBackground();

  // beast position variables
  if(beast.x > width -50){
    beast.speedX = -3;
  } else if(beast.x < 50){
    beast.speedX = 3;
  }
  
  beast.x += beast.speedX;
  // the beast color to match the background
  if(beast.x > width - (width/3)){
    beast.color = color3;
  } else if(beast.x > (width/3)){
    beast.color = color2;
  } else if(beast.x < (width/3)){
    beast.color = color1;
  }
  
  // true or false to movingTowardsMouse
  if(mouseX > beast.x && beast.speedX == 3 || mouseX < beast.x && beast.speedX == -3){
    movingTowardsMouse = true;
  } else if(mouseX < beast.x && beast.speedX == 3 || mouseX > beast.x && beast.speedX == -3){
    movingTowardsMouse = false;
  }
  
  //  beast.message based on movingTowardsMouse
  if(movingTowardsMouse){
    beast.message = "Chasing"
  } else {
    beast.message = "Fleeing"
  }

  if(beast.y > height ){
    beast.speedY = -3;
  } else if(beast.y < 0){
    beast.speedY = 3;
  }
  
  beast.y += beast.speedY;

  helperDrawBeast();
  helperText();
}