function setup(){
createCanvas(windowWidth,windowHeight);
}

function draw(){
  for (let i=0;i<8;i+=0.03){ // Controls amout of different color on x axis
    for (let j=0;j<8;j+=0.03){ // Controls amout of different color on y axis
      fill(50*i,50*j,50*(j-i));
      rect(i*(windowWidth/8),j*(windowHeight/8),(windowWidth/8),(windowHeight/8));
      noStroke();
    }
  }
  noLoop();
}
