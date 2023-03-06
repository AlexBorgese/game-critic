import React from 'react'
import { videoGame } from '@/src/types/video-game'
import styled from 'styled-components'

const Tile = ({
  name,
  background_image,
  description_raw,
  onClick,
}: videoGame & { onClick: () => void }) => (
  <a onClick={onClick}>
    <GameTile>
      <h2>{name}</h2>
      <p>{description_raw}</p>
      <img src={background_image} alt={name} />
    </GameTile>
  </a>
)

const GameTile = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 256px;
  text-align: center;
  border-radius: 5%;
  background-color: white;
  margin: auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);

  p {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin: 8px;
  }

  img {
    border-bottom-right-radius: 5%;
    border-bottom-left-radius: 5%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`

export default Tile
