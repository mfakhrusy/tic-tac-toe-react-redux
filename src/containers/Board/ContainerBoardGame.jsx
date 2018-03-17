import { connect } from 'react-redux';
import BoardGame from '../../components/Board/BoardGame';
import {
  setPlayerTurn,
  setGameLoading,
} from '../../actions/boardActions';

const mapStateToProps = state => ({
  playerTurn: state.playerTurn,
  isGameLoading: state.isGameLoading,
});

const mapDispatchToProps = dispatch => ({
  setPlayerTurn: (player) => {
    dispatch(setPlayerTurn(player));
  },
  setGameLoading: (bool) => {
    dispatch(setGameLoading(bool));
  },
});

const ContainerBoardGame = connect(mapStateToProps, mapDispatchToProps)(BoardGame);

export default ContainerBoardGame;
