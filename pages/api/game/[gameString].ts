import axios from 'axios'

export default async function handler(req, res) {
  const { gameString } = req.query
  const formattedGame = gameString.replace(' ', '-').replace('%20', '-')
  const response = await axios.get(
    `https://rawg.io/api/games?search=${formattedGame}&key=${process.env.API_KEY}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  )

  res.status(200).json(response.data.results[0])
}
