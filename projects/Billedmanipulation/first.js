let input;
let img;
let w;
let h;

function setup() {
  createCanvas(8000,400);
  input = createFileInput(handleFile);
  input.position(200, 0);
}

function draw() {
  background(255);
  if (img) {
    image(img, w, 0);
    ownFilter();
  }
}

function handleFile(file) {
  if (file.type === 'image') {
    img = loadImage(file.data);
    print(img.width);
    w = img.width;
    h = img.height;
  } else {
    img = null;
  }
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      r = img.get(i,j)[0]+img.get(i-1,j)[0]+img.get(i+1,j)[0]
      g = img.get(i,j)[1]+img.get(i-1,j)[1]+img.get(i+1,j)[1]
      b = img.get(i,j)[2]+img.get(i-1,j)[2]+img.get(i+1,j)[2]
      fill([r/3,g/3,b/3]);
      rect(i, j, 1, 1);
    }
  }
}
