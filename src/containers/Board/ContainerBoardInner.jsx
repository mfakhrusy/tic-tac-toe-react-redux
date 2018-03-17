import { connect } from 'react-redux';
import BoardInner from '../../components/Board/BoardInner';

const mapStateToProps = state => ({
  playMode: state.playMode,
  isGameBegin: state.isGameBegin,
});

const ContainerBoardInner = connect(mapStateToProps)(BoardInner);

export default ContainerBoardInner;
