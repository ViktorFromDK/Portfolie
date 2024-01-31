let img;
function preload() {
  img = loadImage('billeder/mpsFull.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(2 * w, h);
  noStroke();
  img.loadPixels();
}

function draw() {

  ownFilter();
  image(img, w, 0);
//  noLoop();
}

function ownFilter() {
  let r = 1;
  for (let i = 0; i < w; i += 2) {
    for (let j = 0; j < h; j += r) {
      b = map(mouseX,0,400,1,10);
      r = int(random(1,b));
      fill([getPixelValue(0,i,j),  getPixelValue(1,i,j),  getPixelValue(2,i,j)]);
      rect(i, j, 2, r);
    }
  }
}

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
