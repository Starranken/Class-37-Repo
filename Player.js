class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    
    getCount(){
        var playerCountRef = database.ref('PlayerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        });
    }

    update(){
        var playerIndex = "player"+ this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }

    updateCount(playerCount){
        database.ref('/').update({
            PlayerCount: playerCount
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        });
    }
}