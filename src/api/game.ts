import axios from 'axios'
import { videoGame } from '../types/video-game'

const game = {
  getGame: async (game: string) => {
    try {
      const response = await axios.get<videoGame>(
        `https://rawg.io/api/games/${game}?key=5731333b7d314f378973db17c7a152a5`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      return response
    } catch (e) {
      console.log(e)
    }
  },

  getPopular: async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=5731333b7d314f378973db17c7a152a5`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      return response.data.results
    } catch (e) {
      console.log(e)
    }
  },
}

export default game
