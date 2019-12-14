var bg;
var bgx=300;

function preload(){
  bg = loadImage("bg0.png");
}

function setup(){
  createCanvas(displayWidth,displayHeight);

}

function draw(){
  background(255);
  imageMode(CENTER);
  image(bg,bgx,height/2,displayWidth,displayHeight);
  bgx=bgx-5;

  if(bgx<0){
    bgx=displayWidth/2;
  }
}

