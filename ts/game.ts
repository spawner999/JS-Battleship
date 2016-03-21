class Game {
  players: Player[] = [];
  constructor(){}
  init(player1: string, player2: string){
    this.players[0] = new Player(player1);
    this.players[1] = new Player(player2);
  }
  play(){}
}
