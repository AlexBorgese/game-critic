import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import qs from 'qs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: 'client_credentials',
  }
  const response = await axios({
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(data),
    url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`,
    method: 'POST',
  })

  res.status(200).json(response.data.access_token)
}
