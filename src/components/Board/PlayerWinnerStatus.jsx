import React from 'react';
import PropTypes from 'prop-types';

const PlayerWinnerStatus = ({ gameWinner }) => (
  <div className="board-player-status">
    <p>Game Winner: <strong>{gameWinner}</strong></p>
  </div>
);

PlayerWinnerStatus.propTypes = {
  gameWinner: PropTypes.oneOf(['X', 'O', 'draw']).isRequired,
};

export default PlayerWinnerStatus;
