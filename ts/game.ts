class Game {
  players: Player[] = [];
  flag: boolean = true;
  constructor(){}
  init(player1: string, player2: string){
    this.players[0] = new Player(player1);
    this.players[1] = new Player(player2);
  }

  createShip(player: number, tile1: Tile, tile2?: Tile, tile3?: Tile ){
    var tiles: Tile[] = [];
    tiles.push(tile1);
    if(tile2){
      tiles.push(tile2);
    }
    if(tile3){
      tiles.push(tile3);
    }
    this.players[player].ships.push(new Ship(tiles));
  }

  findTile(player: number, tile: Tile){
    for(var current of this.players[player].board){
      if(current.x === tile.x && current.y == tile.y){
        return current;
      }
    }
  }

  createBoard(player: number){
    console.log('Im creating');
    for(var tile of currentGame.players[player].board){
      var current = 'n' + tile.x + tile.y + player ;
      $('#board' + player).append('<div class="tile" id="' + current +'">' + current + '</div>');
      this.addListener(tile, this, player);
    }
    $('#board' + player).show();
  }

  addListener(tile, game: Game, player: Player) {
    $('#n' + tile.x + tile.y + player).click(function(){
      console.log(tile);
      var id: Tile = new Tile(tile.x, tile.y);
      console.log(id);
      game.newTurn(player, id);
      $(this).off();
    })
  }

changePlayer(player: Player){
  if(player === 0){
    return 1;
  }
  else return 0;
}

changeBoard(player: Player, next: Player, tile: Tile, msg: String){
  $('#n' + tile.x + tile.y + player).text(msg);
  $('#board' + player).hide(1000);
  if(this.flag){
    this.createBoard(next);
    this.flag = false;
    return false;
  }
  else {
    $('#board' + next).show(1000);
    return false;
  }
}

  newTurn(player: number, tile: Tile){
    var nextUser: number = this.changePlayer(player);
    var selected: Tile = this.findTile(player, tile);
    if(selected.isEmpty){
      this.changeBoard(player, nextUser, selected, 'MISS');
    }
    else{
      this.changeBoard(player, nextUser, selected, 'HIT');
      alert('GAME OVER');
    }
    }
  }
