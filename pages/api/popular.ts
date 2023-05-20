import axios from 'axios'
import moment from 'moment'

export default async function handler(req, res) {
  const date = moment()
  const dateNow = date.format('YYYY/MM/DD').replaceAll('/', '-')
  const dateTwoMonthAgo = moment()
    // day is month for some reason
    .subtract('2', 'month')
    .format('YYYY/MM/DD')
    .replaceAll('/', '-')
  const response = await axios.get(
    `https://api.rawg.io/api/games?dates=${dateTwoMonthAgo},${dateNow}&platforms=18,1,7&&ordering=-added&key=${process.env.API_KEY}&page_size=50`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  )

  res.status(200).json(response.data.results)
}
