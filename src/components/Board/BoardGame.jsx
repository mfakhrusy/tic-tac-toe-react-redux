/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BoardGameIntro from './BoardGameIntro';
import ContainerBoardGameTiles from '../../containers/Board/ContainerBoardGameTiles';

class BoardGame extends React.Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   isGameLoading: true,
  //   // };
  // }

  componentDidMount() {
    setTimeout(() => {
      // this.setState({ isGameLoading: false });
      this.props.setGameLoading(false);
    }, 1000);
    this.calculateFirstPlayerTurn();
  }

  calculateFirstPlayerTurn() {
    const getRandomInt = () => (
      // 0 -> X; 1 -> O
      Math.floor((Math.random() * 2) - 0.0001) // hack, change it later
    );

    this.props.setPlayerTurn(getRandomInt() === 0 ? 'X' : 'O');
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
