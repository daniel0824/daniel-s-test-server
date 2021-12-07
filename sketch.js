function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);
  for(let x = 0; x < width; x+=50){
    for(let y = 0; y < height; y+= 50){
      fill(dist(mouseX, mouseY, x, y)   );
      ellipse(x, y, 50, 50);
    }
  }
}
