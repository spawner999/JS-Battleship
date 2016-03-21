class Player {
  board = [5];
  constructor(public name:String){
    for(var i = 0; i<5; i++){
      this.board[i] = [];
      for(var j = 0; j<5; j++){
        this.board[i][j] = 0;
      }
    }
  }
}
