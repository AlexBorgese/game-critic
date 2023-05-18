import React from 'react'
import Image from 'next/image'
import { videoGame } from '@/src/types/video-game'
import styled from 'styled-components'

const Tile = ({
  name,
  background_image,
  onClick,
}: videoGame & { onClick: () => void }) => (
  <a onClick={onClick}>
    <GameTile>
      <TileHeader>{name}</TileHeader>
      <Image src={background_image} alt={name} fill sizes="100vw" priority />
    </GameTile>
  </a>
)

const GameTile = styled.div`
  position: relative;
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
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`

const TileHeader = styled.h2`
  z-index: 1;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  margin: 0;
  padding: 16px;
  color: white;
`

export default Tile
