import axios from 'axios'
import moment from 'moment'

export default async function handler(req, res) {
  const date = moment()
  const dateNow = date.format('YYYY/MM/DD').replaceAll('/', '-')
  const dateMonthAgo = moment()
    // day is month for some reason
    .subtract('1', 'month')
    .format('YYYY/MM/DD')
    .replaceAll('/', '-')
  const response = await axios.get(
    `https://api.rawg.io/api/games?dates=${dateMonthAgo},${dateNow}&platforms=18,1,7&&ordering=-added&key=${process.env.API_KEY}&page_size=20`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  )

  res.status(200).json(response.data.results)
}
