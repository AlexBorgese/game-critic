import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  gameString: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { gameString } = req.query
  const formattedGame = gameString.replace(' ', '-').replace('%20', '-')
  const response = await axios.get(
    `https://rawg.io/api/games/${formattedGame}?key=${process.env.API_KEY}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  )

  res.status(200).json(response.data)
}
