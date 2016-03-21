class Game {
  players: Player[] = [];
  constructor(){}
  init(player1: string, player2: string){
    this.players[0] = new Player(player1);
    this.players[1] = new Player(player2);
  }
  play(){}
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

  newTurn(player: number, tile: Tile){
    var selected: Tile = this.findTile(player, tile);
    if(selected.isEmpty){
      console.log('nope');
      return false;
    }
    else{
      selected.check();
      console.log(selected);
      console.log('HIT');
      return true;
      for(ship of this.players[player].ships){
        if(ship.check()){
          console.log('Game Over');
        }
        else return false;
      }
    }
  }
}
