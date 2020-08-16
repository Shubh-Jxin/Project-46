class Form{
    constructor(){
        this.input= createInput("Name");
        this.button= createButton("Submit");
        this.play= createButton("Start the Game");
        this.greeting= createElement("h1");
        this.info= createP(); 
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.info.hide();
    }   


    hide_2(){
        this.greeting.hide();
        this.play.hide();
        reset.hide();

    }

    display(){
        
        var title= createElement("h1");
        title.html("SDG Board Game");
        title.position(100,100);

        this.input.position(100,160)
        this.button.position(210,230);
        


        this.info.html("'The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all. They address the global challenges we face, including those related to poverty, inequality, climate change, environmental degradation, peace and justice.'");
        this.info.position(50,385);
        this.info.style("font-style: italic;")
        
        this.button.mousePressed(()=>{
            title.hide();
            form.hide();
            this.play.position(250,380);    
            playerCount+=1;
            player.index=playerCount;
            player.name= this.input.value();
            player.goal=0
            player.updateCount(player.index);
            player.update();
            this.greeting.html("Hello "+ player.name+"!");
            this.greeting.position(100,350);
            this.play.position(270,380);
         });

        this.play.mousePressed(()=>{
            game.updateState(2);
            // this.greeting.hide();
            // this.play.hide();
            // reset.hide();
            
        })
        // if(gameState===2){
        //     this.greeting.hide();
        //     this.play.hide();
        //     reset.hide();
        // }
        
        
        if(playerCount > 4){
             var sorry= createElement("h1");
             sorry.html("Sorry, maximum 4 Players can Play");
             sorry.position(200,500);
        }
    }
}