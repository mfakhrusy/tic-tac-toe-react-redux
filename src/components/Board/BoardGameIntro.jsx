import React from 'react';
import PropTypes from 'prop-types';

const BoardGameIntro = ({ playerTurn }) => (
  <div>
    <h3>Game Begin!</h3>
    <p>{`Player ${playerTurn} starts first!`}</p>
  </div>
);

BoardGameIntro.propTypes = {
  playerTurn: PropTypes.oneOf(['X', 'O', '']).isRequired,
};

export default BoardGameIntro;
