let img;

function preload(){
  img = loadImage('billeder/mps.jpg'); // Loads image
}

function setup(){
  w = img.width; // Defines w as the image width
  h = img.height; // Defines h as the image height
  createCanvas(2*w,h); // Creates a canvas that is 2 times the width of the image and the same height
  noStroke(); // Sets no borders
  img.loadPixels(); // Loads the pixels data

}

function draw(){
  ownFilter(); // Runs function ownFilter
  image(img,w,0); // Creates a image at the width of the image at position 0
  noLoop(); // Dont loop
}

function ownFilter(){
  for (let i=0;i<w; i += 1){ // Sets i = 0, then that it should continue until i is bigger than w, lastly it says that it should add one to i's value.
    for (let j=0;j<h; j += 1){ // Sets j = 0, then that it should continue until j is bigger than h, lastly it says that it should add one to j's value.
      let c = img.get(i,j); // Defines c as the image position i and j
      fill((getPixelValue(1,i,j)),(getPixelValue(2,i,j)),(getPixelValue(0,i,j))); // Fills the color in to the position defined in i and j based on which place they need
      rect(i,j,1,1); // Creates the area for the new image
    }
  }
}


function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}