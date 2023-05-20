import { connect } from 'react-redux'
import Layout from '@/src/components/Layout/Layout'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import gameApi from '../src/api/game'
import { videoGame } from '@/src/types/video-game'
import Tile from '@/src/components/Tile/tile'
import SearchBar from '@/src/components/SearchBar/searchBar'
import { SET_GAMES } from '@/src/constants/gameConstants'
// import LoadingSpinner from '@/src/components/Spinner/Spinner'

export const Home = ({
  dispatch,
  games,
}: // selectedGame,
{
  games: Array<videoGame>
  selectedGame: videoGame
}) => {
  const [searchedGame, setSearchedGame] = useState<Array<videoGame>>([])

  useEffect(() => {
    const getGame = async () => {
      const gamesResponse = await gameApi.getPopular()
      if (gamesResponse !== undefined) {
        // could use a thunk here?
        dispatch({ type: SET_GAMES, payload: gamesResponse })
      }
    }
    getGame()
  }, [])

  const searchForGame = async (game: string) => {
    if (game.length === 0) {
      setSearchedGame([])
      return
    }
    // TODO make this an action
    const getGame = await gameApi.getGame(game)

    setSearchedGame(getGame)
  }

  return (
    <Layout seoDescription="Welome to game critic" seoTitle="Game Critic">
      <>
        <h1>Game Critic</h1>
        <SearchBar onEnter={searchForGame} />
        {searchedGame?.length !== 0 ? (
          <TileWrapper>
            {searchedGame?.map((gameResult) => (
              <Tile
                name={gameResult.name}
                background_image={
                  gameResult.background_image !== null
                    ? gameResult.background_image
                    : ''
                }
                description_raw={gameResult.description_raw}
                slug={gameResult.slug}
              />
            ))}
          </TileWrapper>
        ) : (
          <>
            <h2>The Latest Games</h2>
            <TileWrapper>
              {games.map((game) => (
                <Tile
                  slug={game.slug}
                  name={game.name}
                  background_image={
                    game.background_image !== null ? game.background_image : ''
                  }
                  description_raw={game.description_raw}
                />
              ))}
            </TileWrapper>
          </>
        )}
      </>
    </Layout>
  )
}

const mapStateToProps = function ({
  gameReducer,
}: {
  gameReducer: {
    // TODO move to type of reducer
    games: Array<videoGame>
    selectedGame: videoGame
  }
}) {
  return {
    games: gameReducer.games,
    selectedGame: gameReducer.selectedGame,
  }
}

export default connect(mapStateToProps)(Home)

const TileWrapper = styled.div`
  overflow-y: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;

  a {
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
    a {
      margin: 0 8px 8px 0;
    }
  }
`
