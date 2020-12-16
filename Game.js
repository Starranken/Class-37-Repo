class Game {
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('GameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })

        
    }

    update(state){
        database.ref("/").update({
            GameState: state
        })
    }
     async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('PlayerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }   
    }

    play(){
        form.hide();
        text("Game Start", width/2, 100);
        Player.getPlayerInfo()
        if(allPlayers !== undefined){
            var y = 200;
            for(var plr in allPlayers){
                if(plr === "player"+player.index){
                    fill("red");
                }else{
                    fill("black");
                }
                y = y + 20
                text(allPlayers[plr].name+":"+allPlayers[plr].distance, width/2, y);
            }
            console.log(allPlayers);
            
        }
        if(keyIsDown(UP_ARROW)){
            player.distance += 50;
            player.update();
        }
    }
}