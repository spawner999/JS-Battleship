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
}
