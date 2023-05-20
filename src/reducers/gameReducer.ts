import { SET_GAMES, SET_MODAL_GAME } from '../constants/gameConstants'
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
    case SET_MODAL_GAME:
      return { ...state, game: action.payload }
    default:
      return state
  }
}
