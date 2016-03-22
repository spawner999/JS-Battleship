class Tile{
  isEmpty: boolean = true;
  constructor(public x: number, public y: number){
  }
  fill(){
    this.isEmpty = false;
  }
}
