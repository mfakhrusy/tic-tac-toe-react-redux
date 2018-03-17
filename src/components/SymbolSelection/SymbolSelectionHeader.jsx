import React from 'react';
import PropTypes from 'prop-types';

const SymbolSelectionHeader = ({ playMode }) => (
  <div className="symbol-selection-header">
    <p>{playMode === 'single' ? 'Single Mode Game' : 'Dual Mode Game'}</p>
    <p>Would you like to be <strong>X</strong> or <strong>O</strong> ?</p>
  </div>
);

SymbolSelectionHeader.propTypes = {
  playMode: PropTypes.string.isRequired,
};

export default SymbolSelectionHeader;
