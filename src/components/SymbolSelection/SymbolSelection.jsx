import React from 'react';
import SymbolSelectionMain from './SymbolSelectionMain';
import ContainerSymbolSelectionFooter from '../../containers/SymbolSelection/ContainerSymbolSelectionFooter';
import ContainerSymbolSelectionHeader from '../../containers/SymbolSelection/ContainerSymbolSelectionHeader';

const SymbolSelection = () => (
  <div className="board-symbol-selection">
    <ContainerSymbolSelectionHeader />
    <SymbolSelectionMain />
    <ContainerSymbolSelectionFooter />
  </div>
);

export default SymbolSelection;
