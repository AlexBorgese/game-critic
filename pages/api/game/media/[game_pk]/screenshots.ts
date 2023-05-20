import axios from 'axios'

export default async function handler(req, res) {
  const { game_pk } = req.query
  const response = await axios.get(
    `https://api.rawg.io/api/games/${game_pk}/screenshots?key=${process.env.API_KEY}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  )

  res.status(200).json(response.data.results)
}
