/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BoardGameIntro from './BoardGameIntro';
import ContainerBoardGameTiles from '../../containers/Board/ContainerBoardGameTiles';
import { generateRandomInt } from '../../constants/externalFunctions';

class BoardGame extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      // this.setState({ isGameLoading: false });
      this.props.setGameLoading(false);
    }, 1000);
    this.calculateFirstPlayerTurn();
  }

  calculateFirstPlayerTurn() {
    // 0 -> X; 1 -> O
    this.props.setPlayerTurn(generateRandomInt(0, 2) === 0 ? 'X' : 'O');
  }

  render() {
    const children = this.props.isGameLoading ? (
      <BoardGameIntro playerTurn={this.props.playerTurn} />
    ) : (
      <ContainerBoardGameTiles />
    );

    return (
      <div className="board-game">
        {children}
      </div>
    );
  }
}

BoardGame.propTypes = {
  setPlayerTurn: PropTypes.func.isRequired,
  setGameLoading: PropTypes.func.isRequired,
  playerTurn: PropTypes.oneOf(['X', 'O', '']).isRequired,
  isGameLoading: PropTypes.bool.isRequired,
};

export default BoardGame;
