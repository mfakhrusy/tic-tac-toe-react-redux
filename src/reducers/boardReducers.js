import {
  SET_PLAY_MODE,
  SET_PLAYER_SYMBOL,
  SET_GAME_BEGIN,
  SET_GAME_LOADING,
} from '../constants/actionTypes';

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
export const isGameLoading = (state = false, action) => {
  switch (action.type) {
    case SET_GAME_LOADING:
      return action.isGameLoading;

    default:
      return state;
  }
};
