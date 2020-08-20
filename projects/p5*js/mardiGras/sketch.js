var spot = {
    x: 100,
    y: 50
  }
  
  var col = {
    r: 255,
    g: 0,
    b: 0,
    a: 0
  }
  
  function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
  }
  
  function draw() {
    col.r = random(100, 255);
    col.g = 0;
    col.b = random(0, 190);
    col.a = random(0, 255);
  
    spot.x = random(0, width);
    spot.y = random(0, height);
    fill(col.r, col.g, col.b, col.a);
    ellipse(spot.x, spot.y, 24, 24);
  }