import {
  SET_PLAY_MODE,
  SET_PLAYER_SYMBOL,
  SET_GAME_BEGIN,
  SET_GAME_LOADING,
  SET_PLAYER_TURN,
  SET_BOARD_TILES,
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

export const setGameLoading = bool => (
  {
    type: SET_GAME_LOADING,
    isGameLoading: bool,
  }
);

export const setPlayerTurn = playerTurn => (
  {
    type: SET_PLAYER_TURN,
    playerTurn,
  }
);

export const setBoardTiles = boardTiles => (
  {
    type: SET_BOARD_TILES,
    boardTiles,
  }
);
