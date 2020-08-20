//  color variable
let backgroundColor;
//  variable for moving creature
let move = 0;

function setup () {
  createCanvas(window.innerWidth, window.innerHeight);

  //color using the color function
  backgroundColor = color(100,190,255);
}

function draw () {
  background(backgroundColor); // color variable

  // creature that moves
  fill(255,255,255);
  triangle(300 - move,  95, 258 - move,  70, 286 - move,  105);

  fill(70,70,255);
  ellipse(300 - move,  146, 55,  105);

  line(300 - move, 100, 307 - move,  100);

  // variable value for moving creature
  move++

  if(move > 300){
    move = 0;
  }

  fill(mouseX,100,30);
  rect(90,100,20,100);

  fill(mouseX,50,213,);
  circle(100,100,30,30);

  line(90, 108, 110, 108);

}