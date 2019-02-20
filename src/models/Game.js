const Game = function(data, player){
  this.data = data;
  this.player=player;
}

Game.prototype.checkPositions(){
  const cell = this.data;
  const player = this.player;
  const rowA = [cell[0].value, cell[1].value, cell[2].value];
  const rowB = [cell[3].value, cell[4].value, cell[5].value];
  const rowC = [cell[6].value, cell[7].value, cell[8].value];
  const col1 = [cell[0].value, cell[3].value, cell[6].value];
  const col2 = [cell[1].value, cell[4].value, cell[7].value];
  const col3 = [cell[2].value, cell[5].value, cell[8].value];
  const dia1 = [cell[0].value, cell[4].value, cell[8].value];
  const dia2 = [cell[2].value, cell[4].value, cell[6].value];

  if ((rowA[0] === player && rowA[1] === player && rowA[2] === player)
  || (rowB[0] === player && rowB[1] === player && rowB[2] === player)
  || (rowC[0] === player && rowC[1] === player && rowC[2] === player)
  || (col1[0] === player && col1[1] === player && col1[2] === player)
  || (col2[0] === player && col2[1] === player && col2[2] === player)
  || (col3[0] === player && col3[1] === player && col3[2] === player)
  || (dia1[0] === player && dia1[1] === player && dia1[2] === player)
  || (dia2[0] === player && dia2[1] === player && dia2[2] === player))
  {
    return player;

  }
}
