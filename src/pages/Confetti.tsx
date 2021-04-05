import * as React from 'react'
import styled from 'styled-components'
import { ButtonWithConfetti } from '../components/ButtonWithConfetti'

export default function Confetti() {
  const [isFavorite, setIsFavotire] = React.useState(false)

  return (
    <Layout>
      <ButtonWithConfetti isFavorite={isFavorite} onClick={() => setIsFavotire((_fav) => !_fav)} />
    </Layout>
  )
}

const Layout = styled.div`
  position: relative;
  padding: 100px;
`
