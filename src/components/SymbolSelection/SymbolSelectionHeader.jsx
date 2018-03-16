import React from 'react';
import PropTypes from 'prop-types';

const SymbolSelectionHeader = ({ playMode }) => (
  <div className="symbol-selection-header">
    <h2>{playMode}</h2>
    <h4>Would you like to be <strong>X</strong> or <strong>O</strong> ?</h4>
  </div>
);

SymbolSelectionHeader.propTypes = {
  playMode: PropTypes.string.isRequired,
};

export default SymbolSelectionHeader;
