const initialState = {
  openGameModal: false,
  games: [],
}

export default function gamesReducer(
  state = initialState,
  action: { type: string; payload: string | boolean | object }
) {
  switch (action.type) {
    case 'SET_GAMES':
      return { ...state, games: action.payload }
    case 'OPEN_GAME_MODAL':
      return { ...state, openGameModal: action.payload }
    default:
      return state
  }
}
