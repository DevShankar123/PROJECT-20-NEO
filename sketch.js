var cat,catimg1,catimg2,catimg3,catimg4;
var mouse,mouseimg1,mouseimg2,mouseimg3,mouseimg4;
var back,backimg;
function preload() {
    
    //load the images here
    backimg=loadImage("garden.png");
    catimg1=loadImage("cat1.png");
    catimg2=loadImage("cat2.png");
    catimg3=loadImage("cat3.png");
    catimg4=loadImage("cat4.png");
    mouseimg1=loadImage("mouse1.png");
    mouseimg2=loadImage("mouse2.png");
    mouseimg3=loadImage("mouse3.png");
    mouseimg4=loadImage("mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    back=createSprite(500,400,1000,800);
    back.addImage("back",backimg);
    //create tom and jerry sprites here
    cat=createSprite(800,600,100,50);
    cat.addImage("catstanding",catimg1);
    mouse=createSprite(200,600,80,50);
    mouse.addImage("mousestanding",mouseimg1);


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    drawSprites();
    Text(mouseX + ',' + mouseY,10,45)

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catrunning",catimg2);
    cat.changeAnimation("catrunning");
}


}









    
    
    





  


