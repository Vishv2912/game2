const START =0;
const WAIT =1;
const PLAY=2;
const END=3 ;


var gameState;
var form,game,player;
var database;
var theif,theifImage,theifStandImage;
var bodyguard,bodyguardImage,bodyguardStandImage;

function preload(){


  theifImage=loadAnimation("images/theifRun3.png","images/theifRun2.png","images/theifRun1.png")
theifStandImage=loadAnimation("images/theifStand.png");

bodyguardImage=loadAnimation("images/bodyGuardRun1.png","images/bodyGuardRun2.png","images/bodyGuardRun3.png")
bodyguardStandImage=loadImage("images/bodyGuardStand.png");


}

function setup() {
  createCanvas(800,800);
  
  database=firebase.database();
  
game=new Game();

game.getGameState();       
/*



  theif=createSprite(300,300,50,50);
  theif.addAnimation("theif",theifStandImage);
  theif.scale=0.3;


bodyguard=createSprite(600,300,50,50);
bodyguard.addAnimation("body",bodyguardImage)
bodyguard.scale=0.3;

  
//vartical borders===
wall1=createSprite(5,displayWidth/4,10,displayHeight);
wall2=createSprite(743,displayWidth/4,10,displayHeight);

//horizontalborders==
wall3=createSprite(displayWidth/4,5,displayWidth,10);
wall4=createSprite(displayWidth/4,663,displayWidth,10);

wall5=createSprite(375,25,5,50)
wall6=createSprite(375,225,5,200)
wall7=createSprite(375,425,5,150)
wall8=createSprite()
wall9=createSprite()
wall10=createSprite()
wall11=createSprite()


wall12=createSprite()
wall13=createSprite()
wall14=createSprite()
wall15=createSprite()
wall16=createSprite()
wall17=createSprite()
wall18=createSprite()
wall19=createSprite()
wall20=createSprite()


*/



game.start();

  
}

function draw() {





   




// fill("blue")
 //textSize(20) 
//text("mouseX = "+mouseX,20,70)
//text("mouseY = "+mouseY,20,90)


}