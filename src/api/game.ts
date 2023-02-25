import axios from 'axios'
import { videoGame } from '../types/video-game'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const game = {
  getGame: async (game: string) => {
    const formattedGame = game.replace(' ', '-')
    try {
      const response = await axios.get(
        `https://rawg.io/api/games?search=${formattedGame}&key=${API_KEY}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      return response.data.results[0]
    } catch (e) {
      console.log(e)
    }
  },

  getPopular: async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?dates=2022-12-30,2023-02-23&platforms=18,1,7&&ordering=-added&key=${API_KEY}`,
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
