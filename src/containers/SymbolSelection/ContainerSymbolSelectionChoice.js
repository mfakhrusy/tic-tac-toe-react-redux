import { connect } from 'react-redux';
import SymbolSelectionChoice from '../../components/SymbolSelection/SymbolSelectionChoice';
import { setPlayerSymbol, setGameBegin } from '../../actions/boardActions';


const mapDispatchToProps = (dispatch, ownProps) => ({
  setPlayerSymbol: () => {
    dispatch(setPlayerSymbol(ownProps.symbol));
  },
  setGameBegin: (bool) => {
    dispatch(setGameBegin(bool));
  },
});

const ContainerSymbolSelectionChoice =
  connect(null, mapDispatchToProps)(SymbolSelectionChoice);

export default ContainerSymbolSelectionChoice;
