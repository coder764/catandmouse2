var bgImage;
var catImage1, mouseImage1, catImage2, mouseImage2, catImage3, mouseImage3;
var cat_1, mouse_1;

function preload() {
    bgImage = loadImage("images/garden.png");

    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat_1 = createSprite(870, 600); 
    cat_1.addAnimation("catSleeping", catImage1);
    mouse_1 = createSprite(200, 600);
    mouse_1.addAnimation("mouseStanding", mouseImage1);
    mouse_1.scale = 0.2;
    cat_1.scale = 0.2; 

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
  
    if(cat_1.x - mouse_1.x < (cat_1.width - mouse_1.width)/2){
        cat_1.velocityX = 0;
        cat_1.addAnimation("cat", catImage3);
        cat_1.x = 300;
        cat_1.scale = 0.2;
        cat_1.changeAnimation("cat");
        mouse_1.addAnimation("mouse", mouseImage3);
        mouse_1.scale = 0.15;
        mouse_1.changeAnimation("mouse");
        }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    mouse_1.addAnimation("mouseTeasing", mouseImage2);
    mouse_1.changeAnimation("mouseTeasing");
    mouse_1.framedelay = 25;

    cat_1.addAnimation("catRunning", catImage2);
    cat_1.changeAnimation("catRunning");
    cat_1.velocityX = -3;
}
}
