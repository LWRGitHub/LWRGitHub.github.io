function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(250, 250, 100);
  }
  
  function draw() {
  
    // ellipse
    noStroke();
    fill(250, 200, 200, 50);
    ellipse(mouseX, mouseY, 25, 25);
  
    function mousePressed(){
      background(250, 250, 100);
    }
  }
  