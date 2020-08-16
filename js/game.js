class Game{
    constructor(){
    }

    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",(data)=>{
            gameState= data.val();
        });
    }

    updateState(state){
        database.ref("/").update({
            gameState: state
        })
    }

    instructions(){
        if(gameState===0){
            inst= new Instructions()
            inst.display();
        }
    }
    async start(){
        if(gameState===1){
            player= new Player();
            var playerCountRef= await database.ref("playerCount").once('value');
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form= new Form();
            form.display();   
        }   

      

        
    }

    play(){

        form.hide_2();
        Player.getPlayerInfo();

        
        if(allPlayers!==undefined){
            var index=0;
            var chance=0;
            var count=0;
            for(var plr in allPlayers){
                index+=1;
                chance+=1

                for(var i=1;i<=4;i++){
                    if(i===index){
                         roll= createButton("Roll the Dice!");
                         roll.position(displayWidth/2+250,displayHeight/2);
                         roll.style("background:red;")
                         roll.mousePressed(()=>{
                            dice= createSprite(displayWidth/2, 300);
                            rand= Math.round(random(1,6));
                            switch(rand){
                                case 1: dice.addImage(dice1);
                                        count=1;
                                break;

                                case 2: dice.addImage(dice2);
                                        count=2;
                                break;

                                case 3: dice.addImage(dice3);
                                        count=3;
                                break;

                                case 4: dice.addImage(dice4);
                                        count=4;
                                break;

                                case 5: dice.addImage(dice5);   
                                        count=5;
                                break;

                                case 6: dice.addImage(dice6);
                                        count=6;
                                break;
                            }
                        
                        
                            dice.lifetime=100;
                        })
                        if(player.goal===0){
                            if(rand===1){
                                player.goal+= rand
                                //console.log("Hi");
                            }
                            if(rand===2){
                                player.goal+= rand;
                                //console.log("Hi");
                            }
                            if(rand===3){
                                player.goal+= rand;
                                //console.log("Hi");
                            }
                            if(rand===4){
                                player.goal+= rand;
                                //console.log("Hi");
                            }
                            if(rand===5){
                                player.goal+= rand;
                               // console.log("Hi");
                            }
                            if(rand===6){
                                player.goal+= rand;
                                //console.log("Hi");
                            }
                        
                        player.update();
                        }
                        
                    }
                    
                }

             }
        }
    
    }
}