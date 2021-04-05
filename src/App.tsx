import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
import CircleWave from './pages/CircleWave'
import Confetti from './pages/Confetti'
import FramerMotion from './pages/FramerMotion'
import FramerMotionTransitioned from './pages/FramerMotionTransitioned'
import FramerMotionTransitionFrom from './pages/FramerMotionTransitionedFrom'
import GraphicsProgrammingNyumon from './pages/GraphicsProgrammingNyumon'
import { AnimatedRoutes, RouteTransition } from './transition/RouteTransition'

export default function App() {
  return (
    <Router>
      <Inside />
    </Router>
  )
}

function Inside() {
  const history = useHistory()
  const [keys, setKeys] = useState<string[]>([])

  useEffect(() => {
    return history.listen((location, action) => {
      console.log(location, action)
      if (action === 'PUSH') {
        setKeys((_keys) => [..._keys, location.pathname])
      }
      if (action === 'POP') {
        setKeys((_keys) => {
          const arr = [..._keys]
          arr.pop()
          return arr
        })
      }
    })
  }, [])

  console.log(keys)

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/graphics-programming-nyumon">graphics-programming-nyumon</Link>
          </li>
          <li>
            <Link to="/circleWave">CircleWave</Link>
          </li>
          <li>
            <Link to="/confetti">Confetti</Link>
          </li>
          <li>
            <Link to="/framer-motion">Framer Motion</Link>
          </li>
          <li>
            <Link to="/framer-motion-from">Framer Motion From</Link>
          </li>
          <li>
            <Link to="/framer-motion-transitioned">Framer Motion Transitioned</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/graphics-programming-nyumon">
          <GraphicsProgrammingNyumon />
        </Route>
        <Route path="/circleWave">
          <CircleWave />
        </Route>
        <Route path="/confetti">
          <Confetti />
        </Route>
        <Route path="/framer-motion">
          <FramerMotion />
        </Route>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <RouteTransition exact path="/framer-motion-from">
            <FramerMotionTransitionFrom />
          </RouteTransition>
          <RouteTransition
            exact
            path="/framer-motion-transitioned"
            moveIn={keys[keys.length - 1] === '/framer-motion-transitioned'}
            moveOut={keys[keys.length - 1] === '/framer-motion-transitioned'}
          >
            <FramerMotionTransitioned />
          </RouteTransition>
        </AnimatedRoutes>
        <Route path="/">
          <GraphicsProgrammingNyumon />
        </Route>
      </Switch>
    </div>
  )
}
