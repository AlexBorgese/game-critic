import React from 'react'
import styled from 'styled-components'

export default function LoadingSpinner() {
  return <Spinner />
}

const Spinner = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`
