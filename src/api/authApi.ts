import axios from 'axios'

const authApi = {
  authenticate: async () => {
    try {
      const bearerToken = await axios.get('/api/auth')
      console.log(bearerToken)
      return bearerToken
    } catch (e) {
      console.log(e)
    }
  },
}

export default authApi
