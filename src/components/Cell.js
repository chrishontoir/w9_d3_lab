import React, {Component} from 'react';

const Cell = ({array, value, player, handleUpdatePosition}) => {

  function handleClick(event){
    handleUpdatePosition(array)
    const found = event.target;
    found.disabled=true;
  }

  return(
    <button id="btnclick" onClick={handleClick}>{value}</button>
  )
}

export default Cell;
