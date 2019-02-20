import React, {Component} from 'react';
import Cell from './Cell';

const BoardList = ({data, player, handleUpdatePosition}) => {
  const boardNodes = data.map((cell, index) => {
    return(
      <Cell key={index} array={index} value={cell.value} player={player} handleUpdatePosition={handleUpdatePosition}/>
    )
  })
  return(
    <ul className="board-list">
      {boardNodes}
    </ul>
  )
}

export default BoardList;
