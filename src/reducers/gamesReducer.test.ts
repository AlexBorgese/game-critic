import gamesReducer from './gameReducer'

const initialState = {
  openGameModal: false,
  games: [],
}

describe('Given the games reducer', () => {
  describe('when the type is OPEN_GAME_MODAL', () => {
    it('should return the correct state', () => {
      const returnedState = gamesReducer(initialState, {
        type: 'OPEN_GAME_MODAL',
        payload: true,
      })

      expect(returnedState).toStrictEqual({ openGameModal: true, games: [] })
    })
  })
})
