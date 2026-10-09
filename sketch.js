let xOffset = 0;

function setup() {
  createCanvas(800, 800);
  background(239, 239, 239);
  angleMode(DEGREES);
}

function draw() {
  background(239, 239, 239);

  stroke(0);
  strokeWeight(9);
  line(350, 0, 350, 800);

  strokeWeight(11);
  line(0, 300, 800, 300);
  line(0, 450, 800, 450);

  fill(247, 230, 70);
  rect(0, 450, 90, 350);

  strokeWeight(9);
  line(90, 450, 90, 800);

  strokeWeight(11);
  line(650, 450, 650, 800);
  line(350, 750, 650, 750);

  fill(15, 71, 140);
  rect(350, 450, 300, 300);

  push();
  translate(xOffset, 0);
  
  stroke(0);
  strokeWeight(9);
  fill(224, 31, 38);
  rect(0, 0, 350, 300);
  pop();

  xOffset += 0.5;

  if (xOffset > width) {
    xOffset = -350;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
