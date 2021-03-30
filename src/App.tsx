import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CircleWave from './pages/CircleWave'
import FramerMotion from './pages/FramerMotion'
import FramerMotionTransitioned from './pages/FramerMotionTransitioned'
import FramerMotionTransitionFrom from './pages/FramerMotionTransitionedFrom'
import GraphicsProgrammingNyumon from './pages/GraphicsProgrammingNyumon'
import { AnimatedRoutes, RouteTransition } from './transition/RouteTransition'

export default function App() {
  return (
    <Router>
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
          <Route path="/framer-motion">
            <FramerMotion />
          </Route>
          <AnimatedRoutes exitBeforeEnter initial={false}>
            <RouteTransition exact path="/framer-motion-from" slide={10}>
              <FramerMotionTransitionFrom />
            </RouteTransition>
            <RouteTransition exact path="/framer-motion-transitioned" slide={10}>
              <FramerMotionTransitioned />
            </RouteTransition>
          </AnimatedRoutes>
          <Route path="/">
            <GraphicsProgrammingNyumon />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
