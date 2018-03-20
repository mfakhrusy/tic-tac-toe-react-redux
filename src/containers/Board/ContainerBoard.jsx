import { connect } from 'react-redux';
import Board from '../../components/Board/Board';

const mapStateToProps = state => ({
  playMode: state.playMode,
  playerTurn: state.playerTurn,
  isGameLoading: state.isGameLoading,
  gameWinner: state.gameWinner,
});

const ContainerBoard = connect(mapStateToProps)(Board);

export default ContainerBoard;
