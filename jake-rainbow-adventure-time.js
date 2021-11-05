// https://editor.p5js.org/sikelianos/sketches/om6lrZUKg

stageSize = 600
frame = 0
arcBump = 0.03
sizeBump = 70
strokeWidth = 30

colors = [
  '#D34102',
  '#FF6B00',
  '#FEAC1D',
  '#F1E255',
  '#62AA29',
  '#27B2D0',
  '#3578C7'
]

let img

function preload() {
  img = createImg('https://user-images.githubusercontent.com/2289/140006670-e7cb18aa-5578-4a63-8737-c249734c40f4.png', 'jake');
  img.hide();
}


function setup() {
  createCanvas(stageSize, stageSize);
  strokeWeight(strokeWidth);
}

function draw() {
  frame++
  background(40);
  
  
  angle = frame * arcBump
  
  x = stageSize/2
  y = stageSize/2
  w = stageSize/2 - 100
  h = w
  
  // ROWAN ADAMO SIKELIANOS!
  // Rowan Adamo Sikelianos!
  
  noFill();
  for (let i = 0; i < colors.length; i++) {
    stroke(colors[i]);  
    start = angle - (i * 0.4)
    stop = start - PI
    arc(
      x, 
      y, 
      w + (i * sizeBump), 
      h + (i * sizeBump), 
      start, 
      stop
    );  
  }
  
    jakeSize = 60
  radius = 100
  x = stageSize/2 + radius * cos(angle + PI) - jakeSize/2;
  y = stageSize/2 + radius * sin(angle + PI) - jakeSize/2;
  
  image(img, x, y, jakeSize, jakeSize);
  
  noStroke()
  fill(255)
  rect(0, stageSize/2, stageSize, stageSize/2);
  
}