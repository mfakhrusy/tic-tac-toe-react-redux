/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BoardTitle from './BoardTitle';
import BoardModeSelection from './BoardModeSelection';
import SymbolSelection from '../SymbolSelection/SymbolSelection';
import ContainerBoardGame from '../../containers/Board/ContainerBoardGame';

class BoardInner extends React.Component {
  render() {
    // last thing to appear, the actual game
    if (this.props.isGameBegin) {
      return (
        <div className="board-inner">
          <ContainerBoardGame />
        </div>
      );
    }

    if (this.props.playMode === 'single' || this.props.playMode === 'dual') {
      return (
        <div className="board-inner">
          <SymbolSelection />
        </div>
      );
    }

    // first thing to appear
    return (
      <div className="board-inner">
        <BoardTitle />
        <BoardModeSelection />
      </div>
    );
  }
}

BoardInner.propTypes = {
  playMode: PropTypes.string.isRequired,
  isGameBegin: PropTypes.bool.isRequired,
};


export default BoardInner;
