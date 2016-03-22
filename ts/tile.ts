class Tile{
  isEmpty: boolean = true;
  isChecked: boolean = false;
  constructor(public x: number, public y: number){
  }
  fill(){
    this.isEmpty = false;
  }
  check(){
    this.isChecked = true;
  }
}
