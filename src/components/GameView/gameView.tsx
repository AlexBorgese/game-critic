import { videoGame } from '@/src/types/video-game'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { Rating } from 'react-simple-star-rating'
import gameApi from '@/src/api/game'
import Image from 'next/image'
import LoadingSpinner from '../Spinner/Spinner'

const GameView = ({
  onClick,
  selectedGame,
}: {
  onClick: () => void
  selectedGame: string
}) => {
  const [showMore, setShowMore] = useState(false)
  // TODO move to redux
  const [gameData, setGameData] = useState<videoGame>({
    slug: '',
    description_raw: '',
    background_image: '',
    metacritic: 0,
    name: '',
  })
  useEffect(() => {
    const getGame = async () => {
      const formattedGame = selectedGame.replace(' ', '-')
      const gamesResponse = await gameApi.getSelectedGame(formattedGame)
      if (gamesResponse !== undefined) {
        setGameData(gamesResponse)
      }
    }
    getGame()
  }, [])

  const getScore = () => {
    return localStorage.getItem(gameData.name) === null
      ? 0
      : Number(localStorage.getItem(gameData.name))
  }

  return (
    <>
      {createPortal(
        <>
          <Modal>
            {gameData.name === '' ? (
              <LoadingSpinner />
            ) : (
              <ModalContent>
                <Image
                  onClick={onClick}
                  src="/assets/cross.svg"
                  alt="exit"
                  height={50}
                  width={50}
                  style={{
                    color: 'black',
                    right: 0,
                    position: 'absolute',
                    margin: '8px',
                    zIndex: 2,
                  }}
                />
                <ImageWrapper>
                  <Image
                    src={gameData.background_image}
                    alt={gameData.name}
                    fill
                    style={{
                      borderTopLeftRadius: '5%',
                      borderTopRightRadius: '5%',
                      objectFit: 'cover',
                    }}
                  />
                </ImageWrapper>
                <TextContent>
                  <h1>{gameData.name}</h1>
                  <Description showMore={showMore}>
                    {gameData.description_raw}
                  </Description>

                  <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show Less' : 'Show More'}
                  </ShowMoreButton>

                  <ScoreAndRating>
                    <div>
                      <h3>Metacritic Score</h3>
                      {gameData.metacritic !== null ? gameData.metacritic : '-'}
                      /100
                    </div>
                    <div>
                      <h3>Your Rating</h3>
                      <Rating
                        onClick={(rate: number) =>
                          localStorage.setItem(gameData.name, `${rate}`)
                        }
                        initialValue={getScore()}
                      />
                    </div>
                  </ScoreAndRating>
                </TextContent>
              </ModalContent>
            )}
          </Modal>
        </>,
        document.body
      )}
    </>
  )
}

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

const ModalContent = styled.div`
  background-color: #151515;
  margin: 5% auto;
  border: 1px solid #242323;
  width: auto;
  max-width: 1024px;
  height: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  position: relative;
`

const ImageWrapper = styled.div`
  height: 50%;
  width: auto;
  position: relative;
`

const TextContent = styled.div`
  padding: 20px;
  text-align: center;
`

const Description = styled.p`
  ${(p: { showMore: boolean }) =>
    p.showMore !== true
      ? `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  `
      : ''}
`

const ScoreAndRating = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const ShowMoreButton = styled.button`
  border: none;
  background: none;
  color: blue;
`

export default GameView
