import { connect } from 'react-redux';
import BoardGame from '../components/BoardGame';

const mapStateToProps = state => ({
  isGameLoading: state.isGameLoading,
});

const ContainerBoardGame = connect(mapStateToProps)(BoardGame);

export default ContainerBoardGame;
