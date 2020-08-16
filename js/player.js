class Player{
    constructor(){
        this.name=null;
        this.points=0;
        this.index=null;
        this.goal= 0;
    }

    getCount(){
        var playerCountRef= database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCount= data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }

    update(){
        var playerIndex= "player"+this.index
        database.ref("players/"+playerIndex).set({
            name:this.name,
            points:this.points,
            goal:this.goal
        });
    }



    static getPlayerInfo(){
        var playerInfo = database.ref("players");
        playerInfo.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}