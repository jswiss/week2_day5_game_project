var typingGame = {};

typingGame.loremFactory = function(level, paragraphs){
  this.level = level;
  this.paragraphs = paragraphs;
};

typingGameLevel1 = new typingGame.loremFactory('Level 1', /*arrays*/);
typingGameLevel2 = new typingGame.loremFactory('Level 2', /*arrays*/);

typingGame.playerSelect = function(){
  //selects one or two player game
}

typingGame.levelSelect = function(){
  //selects level one or level two
}

typingGame.beginGame = function(){
  //code to begin game and pause game
}

typingGame.restartGame = function(){
  //code to restart game
}

typingGame.splitParagraphText = function(typingGame.loremFactory.paragraphs){
  //splits string into array of strings of words/spaces
}

typingGame.getCharacters = function(keyboard){
  //gets typed characters
}

typingGame.updateTypingHTML = function(){
  //compares typed letters to split paragraphs
}

typingGame.timer = function(){
  //create a timer
  //show it in the footer left box
  //use it to trigger typingGame.animatedEndOfGameBox
}

typingGame.updateScores = function(){
  //update fields in footer left and popup box
}

typingGame.animatedEndOfGameBox = function(){
  //write a function to animate when the game is over
}

typingGame.switchPlayers = function(){
  //switch from player one to player 2
}

$(document).ready(function(){
  //add callback functions for event listeners here
});