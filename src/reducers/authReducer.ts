import { SET_BEARER } from '../constants/authConstants'

const initialState = {
  bearerToken: '',
}

export default function authReducer(
  state = initialState,
  // TODO make each action a type
  action: {
    type: string
    payload: string
  }
) {
  switch (action.type) {
    case SET_BEARER:
      return { ...state, bearerToken: action.payload }
    default:
      return state
  }
}
