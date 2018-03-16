import React from 'react';
import PropTypes from 'prop-types';

const SymbolSelectionChoice = ({ children, setPlayerSymbol, setGameBegin }) => (
  <div
    className="symbol-selection-choice"
    onClick={() => { setPlayerSymbol(); setGameBegin(true); }}
    role="button" // jsx-ally/no-static-element-interactions
    tabIndex={0} // jsx-ally/interactive-supports-focus
    onKeyPress={setPlayerSymbol} // jsx-ally/click-events-has-key-events
  >
    <p>
      <strong>{children}</strong>
    </p>
  </div>
);

SymbolSelectionChoice.propTypes = {
  children: PropTypes.string.isRequired,
  setPlayerSymbol: PropTypes.func.isRequired,
  setGameBegin: PropTypes.func.isRequired,
};

export default SymbolSelectionChoice;
