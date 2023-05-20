import styled from 'styled-components'
import { videoGame } from '@/src/types/video-game'
import Layout from '@/src/components/Layout/Layout'
import { Rating } from 'react-simple-star-rating'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export async function getStaticPaths() {
  let games = []
  try {
    const res = await fetch(`https://game-critic.vercel.app/api/popular`)
    games = await res.json()
  } catch (e) {
    console.log('error', e)
  }
  const paths = games.map((game: videoGame) => {
    return {
      params: { game: game.slug },
    }
  })

  // { fallback: false } means other routes should 404
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://game-critic.vercel.app/api/games/${params.game}`
  )
  const game = await res.json()
  // const screenshotsRes = await fetch(
  //   `https://game-critic.vercel.app/api/game/media/${params.game}/screenshots`
  // )
  // const screenshots = await screenshotsRes.json()

  return {
    props: { game: { ...game /*screenshots*/ } },
    revalidate: 1,
  }
}

export default function game({ game }: { game: videoGame }) {
  const getScore = () => {
    if (typeof localStorage === 'undefined') return
    return localStorage?.getItem(game.name) === null
      ? 0
      : Number(localStorage?.getItem(game.name))
  }

  return (
    <Layout
      seoDescription={`Information on the game ${game?.name}`}
      seoTitle={game?.name}
    >
      <BackgroundImage image={game?.background_image} />
      <Content>
        <Header>{game?.name}</Header>
        <CarouselWrapper>
          <Carousel
            width="100%"
            dynamicHeight
            autoPlay
            interval={3000}
            showIndicators={false}
            showStatus={false}
          >
            {/*{game?.screenshots?.map((screenshot) => (
              <img src={screenshot.image} />
            ))}*/}
          </Carousel>
        </CarouselWrapper>
        <ScoreAndRating>
          <div>
            <h3>Metacritic Score</h3>
            {game?.metacritic !== null ? game?.metacritic : '-'}
            /100
          </div>
          <div>
            <h3>Your Rating</h3>
            <Rating
              onClick={(rate: number) =>
                localStorage.setItem(game?.name, `${rate}`)
              }
              initialValue={getScore()}
            />
          </div>
        </ScoreAndRating>
        <Description>{game?.description_raw}</Description>
      </Content>
    </Layout>
  )
}

const BackgroundImage = styled.div`
  background-image: ${(p) =>
    `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${p.image})`};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  height: 500px;
  background-size: cover;
`

const CarouselWrapper = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 1;
  padding: 16px 0;

  @media (min-width: 768px) {
    display: grid;
    gap: 16px;
    grid-template-areas:
      'header header header header header header'
      'carousel carousel carousel carousel score score'
      'description description description description description description';
  }
`

// TODO typography
const Header = styled.h1`
  font-size: 50px;
  text-align: center;
  grid-area: header;
`

const ScoreAndRating = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  grid-area: score;
  justify-content: center;
  margin: 16px 0;
`

const Description = styled.p`
  margin: 0 16px;
  grid-area: description;
`
