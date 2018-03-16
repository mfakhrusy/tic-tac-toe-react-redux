/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const ModeSelection = ({ onClick, children }) => (
  <div
    className="mode-selection"
    onClick={onClick}
    role="button"
    tabIndex={0} // jsx-ally/interactive-supports-focus
    onKeyPress={onClick} // need this onKeyPress/onKeyUp/onKeyDown to surpress the warning
  >
    <p>{children}</p>
  </div>
);

ModeSelection.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ModeSelection;
