import React from 'react';
import ContainerSymbolSelectionChoice from '../../containers/SymbolSelection/ContainerSymbolSelectionChoice';


const SymbolSelectionMain = () => (
  <div className="symbol-selection-main">
    <ContainerSymbolSelectionChoice symbol="X">
      X
    </ContainerSymbolSelectionChoice>
    <ContainerSymbolSelectionChoice symbol="O">
      O
    </ContainerSymbolSelectionChoice>
  </div>
);


export default SymbolSelectionMain;
