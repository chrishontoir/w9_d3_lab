import React, {Component} from 'react';

const Cell = ({array, value, player, handleUpdatePosition}) => {

  function handleClick(event){
    handleUpdatePosition(array)
    const found = event.target;
    found.disabled=true;
    found.classList.add('disabled');
  }

  return(
    <button id="btnclick" onClick={handleClick}>{value}</button>
  )
}

export default Cell;
