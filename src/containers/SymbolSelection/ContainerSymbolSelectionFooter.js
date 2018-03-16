import { connect } from 'react-redux';
import SymbolSelectionFooter from '../../components/SymbolSelection/SymbolSelectionFooter';
import { setPlayMode } from '../../actions/boardActions';


const mapDispatchToProps = dispatch => ({
  setPlayMode: (value) => {
    dispatch(setPlayMode(value));
  },
});

const ContainerSymbolSelectionFooter =
  connect(null, mapDispatchToProps)(SymbolSelectionFooter);

export default ContainerSymbolSelectionFooter;
