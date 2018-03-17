import React from 'react';
import PropTypes from 'prop-types';

const PlayerTurnStatus = ({ playerTurn }) => (
  <div className="board-player-status">
    <p>Player Turn: <strong>{playerTurn}</strong></p>
  </div>
);

PlayerTurnStatus.propTypes = {
  playerTurn: PropTypes.oneOf(['X', 'O', '']).isRequired,
};

export default PlayerTurnStatus;
