/* eslint no-restricted-syntax: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BoardGameTile from './BoardGameTile';

class BoardGameTiles extends React.Component {
  constructor() {
    super();
    this.renderBoardTile = this.renderBoardTile.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.calculateWinner = (tiles) => {
      const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const winnerLine of winnerLines) {
        const [a, b, c] = winnerLine;
        if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
          return tiles[a];
        }
      }
      return null;
    };
  }

  handleClick(i) {
    const boardTiles = this.props.boardTiles.slice();
    // check if the tile has been filled already
    if (boardTiles[i] === '') {
      boardTiles[i] = this.props.playerTurn;
      console.log(`winner: ${this.calculateWinner(boardTiles)}`);

      this.props.setBoardTiles(boardTiles);
      this.props.setPlayerTurn(this.props.playerTurn === 'X' ? 'O' : 'X');
    }
  }

  renderBoardTile(i) {
    return (
      <BoardGameTile
        value={this.props.boardTiles[i]}
        onClick={() => { this.handleClick(i); }}
      />
    );
  }

  render() {
    return (
      <div className="board-game-tiles">
        <div className="board-row">
          {this.renderBoardTile(0)}
          {this.renderBoardTile(1)}
          {this.renderBoardTile(2)}
        </div>
        <div className="board-row">
          {this.renderBoardTile(3)}
          {this.renderBoardTile(4)}
          {this.renderBoardTile(5)}
        </div>
        <div className="board-row">
          {this.renderBoardTile(6)}
          {this.renderBoardTile(7)}
          {this.renderBoardTile(8)}
        </div>
      </div>
    );
  }
}

BoardGameTiles.propTypes = {
  boardTiles: PropTypes.arrayOf(PropTypes.oneOf([
    'X',
    'O',
    '',
  ])).isRequired,
  playerTurn: PropTypes.oneOf(['X', 'O']).isRequired,
  setBoardTiles: PropTypes.func.isRequired,
  setPlayerTurn: PropTypes.func.isRequired,
};

export default BoardGameTiles;
