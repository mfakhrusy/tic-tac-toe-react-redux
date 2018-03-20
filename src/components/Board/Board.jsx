/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import PlayerTurnStatus from './PlayerTurnStatus';
import PlayerWinnerStatus from './PlayerWinnerStatus';
import ContainerBoardInner from '../../containers/Board/ContainerBoardInner';

class Board extends React.Component {
  render() {
    let gameStatus = '';
    if (!this.props.isGameLoading) {
      if (this.props.gameWinner === '') {
        gameStatus = <PlayerTurnStatus playerTurn={this.props.playerTurn} />;
      } else {
        gameStatus = <PlayerWinnerStatus gameWinner={this.props.gameWinner} />;
      }
    }

    return (
      <div className="board">
        {gameStatus}
        <ContainerBoardInner />
      </div>
    );
  }
}

Board.propTypes = {
  playerTurn: PropTypes.oneOf(['X', 'O', '']).isRequired,
  isGameLoading: PropTypes.bool.isRequired,
  gameWinner: PropTypes.oneOf(['X', 'O', 'draw', '']).isRequired,
};

export default Board;
