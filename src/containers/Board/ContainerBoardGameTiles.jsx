import { connect } from 'react-redux';
import BoardGameTiles from '../../components/Board/BoardGameTiles';
import {
  setBoardTiles,
  setPlayerTurn,
  setGameWinner,
} from '../../actions/boardActions';

const mapStateToProps = state => ({
  boardTiles: state.boardTiles,
  playerTurn: state.playerTurn,
  playMode: state.playMode,
  gameWinner: state.gameWinner,
});

const mapDispatchToProps = dispatch => ({
  setBoardTiles: (player) => {
    dispatch(setBoardTiles(player));
  },
  setPlayerTurn: (player) => {
    dispatch(setPlayerTurn(player));
  },
  setGameWinner: (winner) => {
    dispatch(setGameWinner(winner));
  },
});

const ContainerBoardGameTiles = connect(mapStateToProps, mapDispatchToProps)(BoardGameTiles);

export default ContainerBoardGameTiles;
