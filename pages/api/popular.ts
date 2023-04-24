import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('---------------------', req.query)
  const response = await axios({
    url: `https://api.igdb.com/v4/age_ratings`,
    headers: {
      Authorization: `Bearer ${req.query.bearer}`,
      'Client-ID': '5k9et8cpgz1dtnl71tsp11tu3ikwz7',
      'Content-Type': 'text/plain',
      Accept: 'application/json',
    },
    method: 'post',

    data: 'fields category,checksum,content_descriptions,rating,rating_cover_url,synopsis;',
  })
  console.log(response)
  res.status(200).json(response.data)
}
