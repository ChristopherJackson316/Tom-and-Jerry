var cat,mouse
var bgImage,catImage,mouseImage

function preload() {
    //load the images here
    bgImage = loadImage("garden.png")
    catImage = loadAnimation("cat1.png","cat2.png","cat3.png", "cat4.png")
    mouseImage = loadAnimation("mouse1.png","mouse2.png","mouse3.png", "mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(700,700);
cat.addAnimation("cat", catImage);

mouse = createSprite(300,700);
mouse.addAnimation("mouse", mouseImage);
}

function draw() {

    background("bgImage");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    }
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === RIGHT_ARROW) {
    mouse.addAnimation("mouseTeasing", mouse);
    mouse.frameDelay = 25;
}

if(keyCode === LEFT_ARROW)
mouse.addAnimation("mouseTeasing", mouse);
    mouse.frameDelay = 25;}
