// Classifier Variable
let classifier;
// Model URL
let imageModelURL = './';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let x=0;
let y=0;
let bil
let track

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(900, 900);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  track = createImg('racetrack.jpg','')
  track.hide()

  bil = createImg('bil.png','');
  bil.hide()

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(100,100,100);
  imageMode(CORNER);
  image(track,25,25,850,850)


  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 4, height - 4);
  
  if (label=="Left"){
    y -= 0
    x -= 1
  }
  else if (label=="Right"){
    y += 0
    x += 1
  }
  else if (label=="Up"){
    x += 0
    y -= 1
  }
  else if (label=="Down"){
    x += 0
    y += 1
  }
  else if (label=="Stop"){
    x += 0
    y += 0
  }
  if (0>(x+450)){
    x = 0; 
  }
  if (0>(y+450)){
    y = 0; 
  }
  if ((x+450)>900){
    x = 0; 
  }
  if ((y+450)>900){
    y = 0; 
  }

  imageMode(CENTER);
  image(bil,(450+x),(450+y),40*1.95,40)
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  console.log(results);
  classifyVideo();
}