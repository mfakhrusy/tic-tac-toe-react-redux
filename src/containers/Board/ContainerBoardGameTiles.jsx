import { connect } from 'react-redux';
import BoardGameTiles from '../../components/Board/BoardGameTiles';
import { setBoardTiles, setPlayerTurn } from '../../actions/boardActions';

const mapStateToProps = state => ({
  boardTiles: state.boardTiles,
  playerTurn: state.playerTurn,
});

const mapDispatchToProps = dispatch => ({
  setBoardTiles: (player) => {
    dispatch(setBoardTiles(player));
  },
  setPlayerTurn: (player) => {
    dispatch(setPlayerTurn(player));
  },
});

const ContainerBoardGameTiles = connect(mapStateToProps, mapDispatchToProps)(BoardGameTiles);

export default ContainerBoardGameTiles;
