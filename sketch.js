let img
let numImgs = 6;
const imgs = [];
let counter = 0;

function preload(){
  img = loadImage('sprite.png');
}

function setup() {
  createCanvas(400, 400);
  
  frameRate(15)
  
  for(let i = 0; i < numImgs; i++){
    imgs[i] = img.get(i*3400, 0, 2550, 3300); 
  }
}

function draw() {
  background(220);
  
  image(imgs[int(counter%numImgs)], 10, 10, 220, 300);
  
  
  counter+=0.5
}