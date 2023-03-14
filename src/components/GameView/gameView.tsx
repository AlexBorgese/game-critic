import { videoGame } from '@/src/types/video-game'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const GameView = ({
  onClick,
  selectedGame,
}: {
  onClick: () => void
  selectedGame: videoGame
}) => {
  return (
    <>
      {createPortal(
        <>
          <Modal onClick={onClick}>
            <Content>
              <h1>{selectedGame.name}</h1>
              <img
                src={selectedGame.background_image}
                alt={selectedGame.name}
              />
              <p>{selectedGame.description_raw}</p>
            </Content>
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
const Content = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 80%;
  display: flex;
`

export default GameView
