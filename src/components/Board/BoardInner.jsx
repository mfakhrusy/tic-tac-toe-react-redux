import React from 'react';
import PropTypes from 'prop-types';
import BoardTitle from './BoardTitle';
import BoardModeSelection from './BoardModeSelection';
import SingleMode from '../SingleMode/SingleMode';
import DualMode from '../DualMode/DualMode';
import ContainerBoardGame from '../../containers/Board/ContainerBoardGame';

class BoardInner extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    if (this.props.isGameBegin) {
      return (
        <div className="board-inner">
          <ContainerBoardGame />
        </div>
      );
    }

    if (this.props.playMode === 'single') {
      return (
        <div className="board-inner">
          <SingleMode />
        </div>
      );
    } else if (this.props.playMode === 'dual') {
      return (
        <div className="board-inner">
          <DualMode />
        </div>
      );
    }

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
