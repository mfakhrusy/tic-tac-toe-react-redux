import { combineReducers } from 'redux';
import {
  playMode,
  playerSymbol,
  isGameBegin,
  isGameLoading,
  playerTurn,
  boardTiles,
  gameWinner,
} from './boardReducers';


const allReducers = combineReducers({
  playMode,
  playerSymbol,
  isGameBegin,
  isGameLoading,
  playerTurn,
  boardTiles,
  gameWinner,
});

export default allReducers;
