import * as React from 'react'
import styled, { keyframes, css } from 'styled-components'
import favImg from '../assets/fav.svg'
import unFavImg from '../assets/unfav.svg'

const EffectFragment = (props: { index: number; numFragments: number }) => {
  return (
    <Fragment deg={(360 / props.numFragments) * props.index}>
      <span className="circle" />
      <span className="triangle" />
    </Fragment>
  )
}

const Fragment = styled.div<{ deg: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: rotate(${(props) => props.deg}deg);

  > .circle {
    position: absolute;
    width: 4px;
    height: 4px;
    left: 10px;
    border-radius: 50%;
    background-color: #027380;
    transform: rotate(40deg);
  }

  > .triangle {
    position: absolute;
    top: -10px;
    transform: rotate(10deg);
    border-left: 4px solid transparent;
    border-right: 1px solid transparent;
    border-top: 15px solid #fda7a8;
  }
`

interface Props {
  isFavorite: boolean
  onClick: () => void
}

export const ButtonWithConfetti = (props: Props) => {
  const [rotateDeg, setRotateDeg] = React.useState(0)
  const [numFragments, setNumFragments] = React.useState(5)

  React.useEffect(() => {
    setRotateDeg(Math.floor(Math.random() * 180))
    setNumFragments(Math.floor(Math.random() * 3) + 5)
  }, [props.isFavorite])

  return (
    <Button onClick={props.onClick} isFavorite={props.isFavorite}>
      <Effect style={{ transform: `rotate(${rotateDeg}deg)` }}>
        <EffectWrap isFaved={props.isFavorite}>
          {[...Array(6)].map((_, index) => (
            <EffectFragment key={index} index={index} numFragments={numFragments} />
          ))}
        </EffectWrap>
      </Effect>
      <span className="heartImg" />
    </Button>
  )
}

const FavedHeartAnimation = keyframes`
  0% {
    transform: scale(0.3);
  }
  10% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`

const Button = styled.button<{ isFavorite: boolean }>`
  position: relative;
  display: inline-block;
  height: 44px;
  width: 44px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  overflow: visible;

  > .heartImg {
    top: 1px;
    display: inline-block;
    width: 44px;
    height: 44px;
    background-image: url(${(props) => (props.isFavorite ? favImg : unFavImg)});
    background-position: center;
    background-size: 21px 21px;
    background-repeat: no-repeat;
    vertical-align: bottom;
    position: relative;
    ${(props) =>
      props.isFavorite
        ? css`
            animation: ${FavedHeartAnimation} 0.3s ease forwards;
          `
        : null};
  }
`

const Effect = styled.div`
  transform-origin: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const EffectWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation-delay: 0.2s;
  ${(props: { isFaved: boolean }) =>
    props.isFaved
      ? css`
          animation: ${FavedEffectAnimation} 0.3s ease forwards;
        `
      : null};
`

const FavedEffectAnimation = keyframes`
  0% {
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`
