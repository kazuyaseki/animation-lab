import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CircleWave from './pages/CircleWave'
import GraphicsProgrammingNyumon from './pages/GraphicsProgrammingNyumon'

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
          </ul>
        </nav>

        <Switch>
          <Route path="/graphics-programming-nyumon">
            <GraphicsProgrammingNyumon />
          </Route>
          <Route path="/circleWave">
            <CircleWave />
          </Route>
          <Route path="/">
            <GraphicsProgrammingNyumon />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
