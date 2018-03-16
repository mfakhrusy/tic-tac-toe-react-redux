import {
  SET_PLAY_MODE,
  SET_PLAYER_SYMBOL,
  SET_GAME_BEGIN,
} from '../constants/actionTypes';

export const setPlayMode = playMode => (
  {
    type: SET_PLAY_MODE,
    playMode,
  }
);

export const setPlayerSymbol = playerSymbol => (
  {
    type: SET_PLAYER_SYMBOL,
    playerSymbol,
  }
);

export const setGameBegin = bool => (
  {
    type: SET_GAME_BEGIN,
    isGameBegin: bool,
  }
);
