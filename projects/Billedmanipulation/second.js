let img;
let farve = [0,0,0];
function preload() {
  img = loadImage('billeder/mps.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(2 * w, h);
  img.loadPixels();
}

function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
    let pixelSize = int(map(mouseX , 0, 2*w, 2, 16));
    for (let i=0;i<w; i = i+pixelSize){
        for (let j=0;j<h; j = j+pixelSize){
            r = img.get(i,j)[0]+img.get(i-2,j)[0]+img.get(i+2,j)[0]
            g = img.get(i,j)[1]+img.get(i-1,j)[1]+img.get(i+1,j)[1]
            b = img.get(i,j)[2]+img.get(i-1,j)[2]+img.get(i+1,j)[2]
            fill([r/3,g/3,b/3]);
            noStroke();
            rect(i, j, 1, 1);
        }
    }
}
