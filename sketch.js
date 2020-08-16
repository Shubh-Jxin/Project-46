const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var canvas;
var world,engine;
var playerCount;
var gameState=0;
var player, game,form, inst;
var sdg1,sdg2,sdg3,sdg4,sdg5,sdg6,sdg7,sdg8,sdg9,sdg10,sdg11,sdg12,sdg13,sdg14,sdg15,sdg16,sdg17;
var un,law,logo,start,reward;
var trick1, trick2, trick3;
var database;
var reset;
var board;
var allPlayers;
var pawns;
var pawn1, pawn2,pawn3, pawn4;
var pawn1_img, pawn2_img,pawn3_img, pawn4_img;
var dice1, dice2, dice3, dice4, dice5, dice6;
var dice, rand;
var press , roll;

function preload(){
    pawn1_img= loadImage("pic/green.png");
    pawn2_img= loadImage("pic/red.png");
    pawn3_img= loadImage("pic/blue.png");
    pawn4_img= loadImage("pic/yellow.png");
    dice1= loadImage("pic/dice1.png");
    dice2= loadImage("pic/dice2.png");
    dice3= loadImage("pic/dice3.png");
    dice4= loadImage("pic/dice4.png");
    dice5= loadImage("pic/dice5.png");
    dice6= loadImage("pic/dice6.png");
    press= loadImage("pic/roll.png");
}
function setup(){
    // if(gameState===2){
        canvas= createCanvas(displayWidth-20,displayHeight-30);
    // }
    engine= Engine.create();   
    world= engine.world;

    database= firebase.database();

    

    game=new Game();
    game.getState();
    game.instructions();

    reset= createButton("reset");
    reset.position(1300,200);

    // if(gameState===2){]
    
    
    //board.display();
    // }
    //if(gameState===2){
        board=new Board();
        board.start();
        
      //  }
         //game.play();

        
        // pawn1= new Pawn(100,140,"pic/green.png");
        // pawn2= new Pawn(130,140,"pic/red.png");
        // pawn3= new Pawn(160,140,"pic/yellow.png");
        // pawn4= new Pawn(140,120,"pic/blue.png");


        ;
        
    }
    
    function draw(){  
        if(gameState===2){
            if(playerCount <= 4){
                background(0);
                //clear();
                board.display();
                game.play();
                //form.hide_2();
                
            } 
    }

          
    Engine.update(engine);

     reset.mousePressed(()=>{
        database.ref("/").update({
            playerCount:0,
            gameState:0
        })

        var pl= database.ref('players');
        pl.remove();
    })

    if(playerCount===1 && gameState===2){
        pawn1=createSprite(100,270,100,100);
        pawn1.addImage(pawn1_img);
        pawn1.scale=0.5;    
     }
     if(playerCount===2 && gameState===2){
        pawn1=createSprite(100,270,100,100);
        pawn1.addImage(pawn1_img);
        pawn1.scale=0.5; 
        pawn2=createSprite(50,270,100,100);
        pawn2.addImage(pawn2_img);
        pawn2.scale=0.5;    
     }
     if(playerCount===3 && gameState===2){
        pawn1=createSprite(100,270,100,100);
        pawn1.addImage(pawn1_img);
        pawn1.scale=0.5;  
        pawn2=createSprite(50,270,100,100);
        pawn2.addImage(pawn2_img);
        pawn2.scale=0.5; 
        pawn3=createSprite(100,200,100,100);
        pawn3.addImage(pawn3_img);
        pawn3.scale=0.5;   
     }
     if(playerCount===4 && gameState===2){
        pawn1=createSprite(100,270,100,100);
        pawn1.addImage(pawn1_img);
        pawn1.scale=0.5;  
        pawn2=createSprite(50,270,100,100);
        pawn2.addImage(pawn2_img);
        pawn2.scale=0.5; 
        pawn3=createSprite(100,200,100,100);
        pawn3.addImage(pawn3_img);
        pawn3.scale=0.5; 
        pawn4=createSprite(50,200,100,100);
        pawn4.addImage(pawn4_img);
        pawn4.scale=0.5; 
     }
      
     pawns=[pawn1,pawn2,pawn3,pawn4]
   drawSprites();
    
}