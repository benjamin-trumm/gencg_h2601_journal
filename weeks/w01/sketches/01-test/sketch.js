function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(244, 243, 239)
  strokeWeight(3);

  circle(150, 400, 140)
  fill(0)
  circle(350, 400, 110)
  fill(255)
  circle(520, 400, 80)

  line(220, 400, 295, 400)
  line(405, 400, 480, 400)

  point(150,500)
  point(350,500)
  point(520,500)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
