var marcher;
var backgroundColor;
var marcherColor;

function setup () {
  createCanvas(window.innerWidth, window.innerHeight);
  
  marcher = {
    x: 25,
    y: 25,
    size: 30,
    speed: 1,
  }
  
  backgroundColor = color("lightgrey");
  marcherColor = color("purple");
}

function draw () {
  background(backgroundColor);
  
  // tile floor 
  let rgb = {
    r: 210,
    g: 30,
    b: 60
  }
  for (var x = 0; x <= width; x += 50) {
    for (var y = 0; y <= height; y += 50) {
      fill(rgb.r,rgb.g, rgb.b);
      rect(x , y, 50, 50);
      rgb.r += 4
      rgb.g += 1
      rgb.b += 8
    }
  }
  
  // Marcher march back and forth
  marcher.x += marcher.speed
  if(marcher.x > width){
    marcher.speed = -1;
  } else if(marcher.x < 1){
    marcher.speed = 1;
  }

  stroke(75);
  fill(marcherColor);
  ellipse(marcher.x, marcher.y, marcher.size, marcher.size);
  
  // while loop to draw clones of marcher

  let cloneY = marcher.y;
  
  while(cloneY < height){
    cloneY += 50;
    stroke(75);
    fill(255,255,200);
    ellipse(marcher.x, cloneY, marcher.size, marcher.size);
  }
}