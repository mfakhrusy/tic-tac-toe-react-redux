/* eslint no-restricted-syntax: 0 */
/* eslint no-console: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BoardGameTile from './BoardGameTile';
import { calculateWinner, generateRandomInt } from '../../constants/externalFunctions';

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

    this.calcMoveBot = (tiles, botSymbol) => {
      const newTiles = tiles;
      while (true) {
        const randomTile = generateRandomInt(0, 9); // generate 0 - 8
        if (newTiles[randomTile] === '') {
          newTiles[randomTile] = botSymbol;
          break;
        }
      }
      return newTiles;
    };
  }

  handleClick(i) {
    const boardTiles = this.props.boardTiles.slice();
    // check if the tile has been filled already
    if (boardTiles[i] === '' && this.props.gameWinner === '') {
      if (this.props.playMode === 'dual') {
        boardTiles[i] = this.props.playerTurn;
        const winner = calculateWinner(boardTiles);
        this.props.setGameWinner(winner);
        this.props.setBoardTiles(boardTiles);
        // if the winner already decided (the game finishes), the button is no longer clickable
        // so the player shouldn't change either
        if (this.props.gameWinner === '') {
          this.props.setPlayerTurn(this.props.playerTurn === 'X' ? 'O' : 'X');
        }
      } else if (this.props.playMode === 'single') {
        // really dumb AI but okay that's fine for now LOL
        const botSymbol = this.props.playerTurn === 'X' ? 'O' : 'X';
        boardTiles[i] = this.props.playerTurn;
        let counter = 0;
        while (true) {
          counter += 1;
          const randomTile = generateRandomInt(0, 9);
          console.log(randomTile);
          if (boardTiles[randomTile] === '') {
            boardTiles[randomTile] = botSymbol;
            break;
          }
          if (counter >= 10000) {
            break;
          }
        }
        this.props.setBoardTiles(boardTiles);
      }
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
  playMode: PropTypes.oneOf(['single', 'dual']).isRequired,
  gameWinner: PropTypes.oneOf(['X', 'O', 'draw', '']).isRequired,
  setBoardTiles: PropTypes.func.isRequired,
  setPlayerTurn: PropTypes.func.isRequired,
  setGameWinner: PropTypes.func.isRequired,
};

export default BoardGameTiles;
