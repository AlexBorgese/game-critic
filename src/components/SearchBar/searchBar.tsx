import React from 'react'
import styled from 'styled-components'

const searchBar = ({ onEnter }: { onEnter: (value: string) => void }) => {
  const searchId =
    typeof document !== 'undefined' && document.getElementById('game-search')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      onEnter(event.target.value)
    }
  }
  return (
    <>
      <SearchBar
        id="game-search"
        onKeyDown={handleKeyDown}
        placeholder="Search Here!"
      />
      {
        <button
          onClick={() => {
            if (searchId !== null) {
              searchId.value = ''
            }
            onEnter('')
          }}
        >
          Clear
        </button>
      }
    </>
  )
}

const SearchBar = styled.input`
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
