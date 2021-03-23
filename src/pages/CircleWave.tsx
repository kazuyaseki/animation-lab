import * as React from 'react'
import styled, { keyframes } from 'styled-components'

export default function CircleWave() {
  return <Layout></Layout>
}

const animation = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(0);
  }
  80%, 100% {
    opacity: 0;
    transform: scale(1);
  }
`

const Layout = styled.div`
  width: 400px;
  height: 400px;
  background-color: #0000ff;
  border-radius: 50%;

  animation: 1.5s ${animation} infinite ease-in-out;
`
