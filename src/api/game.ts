import axios from 'axios'

const game = {
  getGame: async (bearerToken: string, game: string) => {
    try {
      const response = await axios.get(`api/game/${game}`, {
        headers: {
          Accept: 'application/json',
        },
      })

      return response.data
    } catch (e) {
      console.log(e)
    }
  },

  getSelectedGame: async (bearerToken: string, gameName: string) => {
    try {
      const response = await axios.get(`/api/games/${gameName}`, {
        headers: {
          Accept: 'application/json',
        },
      })

      return response.data
    } catch (e) {
      console.log(e)
    }
  },

  getPopular: async (bearerToken: string) => {
    try {
      const response = await axios.get(`/api/popular?bearer=${bearerToken}`, {
        headers: {
          Accept: 'application/json',
        },
      })

      return response.data
    } catch (e) {
      console.log(e)
    }
  },
}

export default game
