var player1 : string;
var player2 : string;
var currentGame : Game;
$(document).ready(function(){
  $('#button1').click(function(event){
  event.preventDefault();
  player1 = $('#text1').val();
  $('#Player1').remove();
  if(player1 && player2){
    currentGame = new Game();
    currentGame.init(player1, player2);
    $('#ship1').show();
  }
});
$('#button2').click(function(event){
event.preventDefault();
player2 = $('#text2').val();
$('#Player2').remove();
if(player1 && player2){
  currentGame = new Game();
  currentGame.init(player1, player2);
  $('#ship1').show();
}
});
$('#shipBtn1').click(function(event){
  event.preventDefault();
  var tile1 = new Tile(parseInt($('#x1').val()), parseInt($('#y1').val()));
  tile1.fill();
  var tail = currentGame.findTile(1, tile1);
  tail.fill();
  currentGame.createShip(1, tile1);
  // var tile2 = new Tile($('#x2').val(), $('#y2').val());
  // var tile3 = new Tile($('#x2s').val(), $('#y2s').val());
  // currentGame.createShip(0, tile2, tile3);
  // var tile4 = new Tile($('#x3').val(), $('#y3').val());
  // var tile5 = new Tile($('#x3s').val(), $('#y3s').val());
  // var tile6 = new Tile($('#x3t').val(), $('#y3t').val());
  // currentGame.createShip(0, tile4, tile5, tile6);
  $('#ship1').remove();
  $('#ship2').show();
});
$('#shipBtn2').click(function(event){
  event.preventDefault();
  var tile1 = new Tile(parseInt($('#x1').val()), parseInt($('#y1').val()));
  var tail = currentGame.findTile(0, tile1);
  tail.fill();
  currentGame.createShip(0, tile1);
  // var tile2 = new Tile($('#x2').val(), $('#y2').val());
  // var tile3 = new Tile($('#x2s').val(), $('#y2s').val());
  // currentGame.createShip(1, tile2, tile3);
  // var tile4 = new Tile($('#x3').val(), $('#y3').val());
  // var tile5 = new Tile($('#x3s').val(), $('#y3s').val());
  // var tile6 = new Tile($('#x3t').val(), $('#y3t').val());
  // currentGame.createShip(1, tile4, tile5, tile6);
  $('#ship2').remove();
  currentGame.createBoard(0);
});
});
