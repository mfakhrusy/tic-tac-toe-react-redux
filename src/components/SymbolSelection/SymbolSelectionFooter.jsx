import React from 'react';
import PropTypes from 'prop-types';

class SymbolSelectionFooter extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setPlayMode(''); // initialize the state again
  }

  render() {
    return (
      <div
        className="symbol-selection-footer"
        onClick={this.handleClick}
        role="button"
        tabIndex={0} // jsx-ally/interactive-supports-focus
        onKeyPress={this.handleClick} // need onKeyPress/onKeyUp/onKeyDown to surpress the warning
      >
        <p>Back</p>
      </div>
    );
  }
}

SymbolSelectionFooter.propTypes = {
  setPlayMode: PropTypes.func.isRequired,
};

export default SymbolSelectionFooter;
