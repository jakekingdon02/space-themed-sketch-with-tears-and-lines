// Jake Kingdon
// Space Lines and Tears 
// Created: April 1st, 2023. 
// In this sketch, I created a function that draws random blue strings across the canvas when the user clicks on the screen. I used constants to make the 
// creation of the 50 random placed strings easier and more efficient.

let drawStrings = false;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background("black");
  drawPaintdropPattern();

  // Setting up the draw strings function.
  if (drawStrings) {
    drawRandomStrings();
  }
}

// Define the star size and spacing.
function drawPaintdropPattern() {
  const paintdropSize = 10;
  const spacing = 50;

  // Create a horizontal and vertical direction loop.
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      // Draw the red stars.
      fill("brown");
      drawPaintdropShape(x, y, paintdropSize);

      // Draw the yellow stars.
      fill("green");
      drawPaintdropShape(x + spacing / 2, y + spacing / 2, paintdropSize);

      // Draw the blue stars.
      fill("purple");
      drawPaintdropShape(x, y + spacing, paintdropSize);
    }
  }
}

// Create the paintdrop shapes.
function drawPaintdropShape(x, y, size) {
  beginShape();
  vertex(x, y - size / 2);
  vertex(x + size / 5, y - size / 6);
  vertex(x + size / 5, y);
  vertex(x + size / 20, y + size / 6);
  vertex(x, y + size / 7);
  vertex(x - size / 10, y + size / 6);
  vertex(x - size / 5, y);
  vertex(x - size / 15, y - size / 6);
  endShape(CLOSE);
}

// Draw the random strings all over the canvas.
function drawRandomStrings() {
  const numStrings = 50;
  const maxLength = 100;
  const minWidth = 1;
  const maxWidth = 5;

  for (let i = 0; i < numStrings; i++) {
    const x1 = random(width);
    const y1 = random(height);
    const x2 = random(width);
    const y2 = random(height);
    const length = dist(x1, y1, x2, y2);
    const stringWidth = random(minWidth, maxWidth);
    noLoop();
    strokeWeight(1);
    stroke("blue");
    line(x1, y1, x2, y2);
  }
}

// Trigger the drawStrings function when the user clicks the canvas.
function mouseClicked() {
  drawStrings = true;
}
