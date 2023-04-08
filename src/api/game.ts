import axios from 'axios'

const game = {
  getGame: async (game: string) => {
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

  getSelectedGame: async (gameName: string) => {
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

  getPopular: async () => {
    try {
      const response = await axios.get(`/api/popular`, {
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
