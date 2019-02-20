import React, {Component} from 'react';
import BoardList from '../components/BoardList';


class BoardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {a1: "a1", value: ""},
        {a2: "a2", value: ""},
        {a3: "a3", value: ""},
        {b1: "b1", value: ""},
        {b2: "b2", value: ""},
        {b3: "b3", value: ""},
        {c1: "c1", value: ""},
        {c2: "c2", value: ""},
        {c3: "c3", value: ""}
      ],
      winner: null,
      currentPlayer: "X"
    };
    this.handleUpdatePosition = this.handleUpdatePosition.bind(this);
  }

  checkPositions(player){
    const cell = this.state.data
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
      console.log("Winner", player);
      this.setState({winner: `Winner: ${player}`})
    }
  }

  handleUpdatePosition(index){
    const selectedPosition = this.state.data[index];
    const updated = selectedPosition.value = this.state.currentPlayer
    this.setState({selectedPosition: updated});

    this.checkPositions(this.state.currentPlayer);

    if (this.state.currentPlayer === "X"){
      this.setState({currentPlayer: "O"})
    }
    else {
      this.setState({currentPlayer: "X"})
    }
  }

  render(){
    return(
      <div className="board-container">
        <h1>Noughts & Crosses</h1>
        <p>{this.state.winner}</p>
        <BoardList data={this.state.data} player={this.state.currentPlayer} handleUpdatePosition={this.handleUpdatePosition}/>
      </div>
    )
  }
}

export default BoardContainer;
