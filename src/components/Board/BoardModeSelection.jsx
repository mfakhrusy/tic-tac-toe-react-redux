import React from 'react';
import ContainerModeSelection from '../../containers/Board/ContainerModeSelection';

const BoardModeSelection = () => (
  <div className="board-mode-selection">
    <ContainerModeSelection mode="single">
      Single Player
    </ContainerModeSelection>
    <ContainerModeSelection mode="dual">
      Dual Player
    </ContainerModeSelection>
  </div>
);

export default BoardModeSelection;
