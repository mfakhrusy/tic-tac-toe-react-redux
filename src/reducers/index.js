import { combineReducers } from 'redux';
import {
  playMode,
  playerSymbol,
  isGameBegin,
  isGameLoading,
} from './boardReducers';


const allReducers = combineReducers({
  playMode,
  playerSymbol,
  isGameBegin,
  isGameLoading,
});

export default allReducers;