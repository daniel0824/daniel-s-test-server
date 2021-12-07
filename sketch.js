function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255,0,0);
  ellipse(mouseX, mouseY, 200, 200);
  fill(0, 255,0)
  ellipse(mouseX, mouseY, 100, 100);
}
