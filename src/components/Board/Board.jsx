/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import PlayerTurnStatus from './PlayerTurnStatus';
import ContainerBoardInner from '../../containers/Board/ContainerBoardInner';

class Board extends React.Component {
  render() {
    const playerStatus = !this.props.isGameLoading ? (
      <PlayerTurnStatus playerTurn={this.props.playerTurn} />
    ) : '';

    return (
      <div className="board">
        {playerStatus}
        <ContainerBoardInner />
      </div>
    );
  }
}

Board.propTypes = {
  playerTurn: PropTypes.oneOf(['X', 'O', '']).isRequired,
  isGameLoading: PropTypes.bool.isRequired,
};

export default Board;
