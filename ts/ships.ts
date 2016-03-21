class Ship {
  isDestroyed: boolean = false;
  constructor(public tiles: Tile[]){
  }
  check(){
    var counter: number;
    var length: number = this.tiles.length;
    for(var tile in this.tiles){
      if(tile.isEmpty && tile.isChecked){
        counter += counter;
      }
    }
    if (counter === length){
      this.isDestroyed = true;
      return true;
    }
    return false;
  }
}
