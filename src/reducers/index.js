import { combineReducers } from 'redux';
import {
  playMode,
  playerSymbol,
  isGameBegin,
  isGameLoading,
  playerTurn,
  boardTiles,
} from './boardReducers';


const allReducers = combineReducers({
  playMode,
  playerSymbol,
  isGameBegin,
  isGameLoading,
  playerTurn,
  boardTiles,
});

export default allReducers;
