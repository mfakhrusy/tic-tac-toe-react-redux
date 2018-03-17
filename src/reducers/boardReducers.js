import {
  SET_PLAY_MODE,
  SET_PLAYER_SYMBOL,
  SET_GAME_BEGIN,
  SET_GAME_LOADING,
  SET_PLAYER_TURN,
  SET_BOARD_TILES,
} from '../constants/actionTypes';
import initialState from '../constants/initialState';

export const playMode = (state = '', action) => {
  switch (action.type) {
    case SET_PLAY_MODE:
      return action.playMode;

    default:
      return state;
  }
};

export const playerSymbol = (state = '', action) => {
  switch (action.type) {
    case SET_PLAYER_SYMBOL:
      return action.playerSymbol;

    default:
      return state;
  }
};

export const isGameBegin = (state = false, action) => {
  switch (action.type) {
    case SET_GAME_BEGIN:
      return action.isGameBegin;

    default:
      return state;
  }
};

export const isGameLoading = (state = true, action) => { // true so can easily changed
  switch (action.type) {
    case SET_GAME_LOADING:
      return action.isGameLoading;

    default:
      return state;
  }
};

export const playerTurn = (state = '', action) => {
  switch (action.type) {
    case SET_PLAYER_TURN:
      return action.playerTurn;

    default:
      return state;
  }
};

export const boardTiles = (state = initialState.boardTiles, action) => {
  switch (action.type) {
    case SET_BOARD_TILES:
      return action.boardTiles;

    default:
      return state;
  }
};
