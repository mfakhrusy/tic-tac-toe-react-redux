import { connect } from 'react-redux';
import ModeSelection from '../components/ModeSelection';
import { setPlayMode } from '../actions/boardActions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setPlayMode(ownProps.mode));
  },
});

const ContainerModeSelection = connect(null, mapDispatchToProps)(ModeSelection);

export default ContainerModeSelection;
