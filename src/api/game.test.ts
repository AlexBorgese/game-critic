import { default as axios } from 'axios'
import game from './game'

jest.mock('Axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Given the game api is called with a game', () => {
  it('should call the correct api path and return', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: { results: [{ name: 'fallout' }] } })
    )
    const response = await game.getGame('fallout')

    expect(response?.name).toBe('fallout')
  })
})

describe('Given the game api is called with getPopular', () => {
  it('should call the correct api path and return', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: { results: [{ name: 'fallout' }] } })
    )
    const response = await game.getPopular()

    expect(response).toStrictEqual([{ name: 'fallout' }])
  })
})
