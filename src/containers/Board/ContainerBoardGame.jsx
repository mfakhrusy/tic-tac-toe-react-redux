import { connect } from 'react-redux';
import BoardGame from '../../components/Board/BoardGame';
import { setPlayerTurn } from '../../actions/boardActions';

const mapStateToProps = state => ({
  playerTurn: state.playerTurn,
});

const mapDispatchToProps = dispatch => ({
  setPlayerTurn: (player) => {
    dispatch(setPlayerTurn(player));
  },
});

const ContainerBoardGame = connect(mapStateToProps, mapDispatchToProps)(BoardGame);

export default ContainerBoardGame;
