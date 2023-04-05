import axios from 'axios'
import { videoGame } from '../types/video-game'
import moment from 'moment'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const game = {
  getGame: async (game: string) => {
    const formattedGame = game.replace(' ', '-').replace('%20', '-')
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

  getSelectedGame: async (gameName: string) => {
    const formattedGame = gameName.replace(' ', '-')

    try {
      const response = await axios.get(
        `https://rawg.io/api/games/${formattedGame}?key=${API_KEY}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )

      return response.data
    } catch (e) {
      console.log(e)
    }
  },

  getPopular: async () => {
    const date = moment()
    const dateNow = date.format('YYYY/DD/MM').replaceAll('/', '-')
    const dateMonthAgo = moment()
      // day is month for some reason
      .subtract('2', 'day')
      .format('YYYY/DD/MM')
      .replaceAll('/', '-')
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?dates=${dateMonthAgo},${dateNow}&platforms=18,1,7&&ordering=-added&key=${API_KEY}`,
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
