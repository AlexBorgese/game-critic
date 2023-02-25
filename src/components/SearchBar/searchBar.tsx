import React from 'react'
import styled from 'styled-components'

const searchBar = ({ onEnter }: { onEnter: (value: string) => void }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      onEnter(event.target.value)
    }
  }
  return <SearchBar onKeyDown={handleKeyDown} placeholder="Search Here!" />
}

const SearchBar = styled.input`
  width: 100%;
  text-align: center;
  margin: 16px auto;
  border: none;
  font-weight: bold;

  :focus-visible {
    outline: none;
    border-bottom: 0.5px solid black;
  }
`

export default searchBar
