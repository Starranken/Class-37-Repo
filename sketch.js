var database;
var gameState = 0, playerCount = 0;
var game, player, form;
var allPlayers, playerIndex;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game;
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}