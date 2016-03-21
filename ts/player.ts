class Player {
  board: Tile[] = [];
  ships: Ship[] = [];
  constructor(public name: String){
    this.initBoard();
  }
  initBoard(){
    for(var i = 0; i<5; i++){
      for(var j = 0; j<5; j++){
        this.board.push(new Tile(i,j));
      }
    }
  }
}
