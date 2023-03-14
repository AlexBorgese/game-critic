import { TOGGLE_GAME_MODAL, SET_GAMES } from '../constants/gameConstants'
import { videoGame } from '../types/video-game'

const initialState = {
  openGameModal: false,
  selectedGame: {},
  games: [],
}

export default function gamesReducer(
  state = initialState,
  // TODO make each action a type
  action: {
    type: string
    payload: string | boolean | { open: boolean; selectedGame: videoGame }
  }
) {
  switch (action.type) {
    case SET_GAMES:
      return { ...state, games: action.payload }
    case TOGGLE_GAME_MODAL:
      return {
        ...state,
        openGameModal: action.payload.open,
        selectedGame: action.payload.selectedGame,
      }
    default:
      return state
  }
}
