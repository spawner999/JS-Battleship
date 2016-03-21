var player1 : string;
var player2 : string;
var currentGame : Game;
$(document).ready(function(){
  $('#button1').click(function(event){
  event.preventDefault();
  player1 = $('#text1').val();
  console.log(player1);
  $('#Player1').remove();
  if(player1 && player2){
    console.log('we can start');
    currentGame = new Game();
    currentGame.init(player1, player2);
  }
});
$('#button2').click(function(event){
event.preventDefault();
player2 = $('#text2').val();
console.log(player2);
$('#Player2').remove();
if(player1 && player2){
  console.log('we can start');
  currentGame = new Game();
  currentGame.init(player1, player2);
}
});
})
