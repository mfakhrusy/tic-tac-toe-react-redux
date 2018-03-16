import { connect } from 'react-redux';
import SymbolSelectionHeader from '../../components/SymbolSelection/SymbolSelectionHeader';

const mapStateToProps = state => ({
  playMode: state.playMode,
});

const ContainerSymbolSelectionHeader = connect(mapStateToProps)(SymbolSelectionHeader);

export default ContainerSymbolSelectionHeader;
