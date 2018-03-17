import React from 'react';
import PropTypes from 'prop-types';

const BoardGameTile = ({ value, onClick }) => (
  <div
    className="board-game-tile"
    onClick={onClick}
    role="button"
    tabIndex={0} // jsx-ally/interactive-supports-focus
    onKeyPress={onClick} // need this onKeyPress/onKeyUp/onKeyDown to surpress the warning
  >
    {value}
  </div>
);

BoardGameTile.propTypes = {
  value: PropTypes.oneOf(['X', 'O', '']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BoardGameTile;
