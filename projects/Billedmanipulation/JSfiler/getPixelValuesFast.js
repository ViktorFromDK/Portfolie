let img;

function preload() {
  img = loadImage('billeder/mps.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(3 * w, h);
  noStroke();
  img.loadPixels();
}

function draw() {
  background(255);
  image(img, 0, 0);
  let c = [getPixelValue(0,mouseX,mouseY),getPixelValue(1,mouseX,mouseY),getPixelValue(2,mouseX,mouseY)];
  print(c);
  text('RGB værdi:', 300, 200);
  text(c, 400, 200);
  fill(c);
  ellipse(300,100,40,40);
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
