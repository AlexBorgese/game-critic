import axios from 'axios'
import { videoGame } from '../types/video-game'

const game = {
  getGame: async (game: string) => {
    try {
      const response = await axios.get<videoGame>(
        `https://rawg.io/api/games/${game}?key=`,
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
}

export default game
