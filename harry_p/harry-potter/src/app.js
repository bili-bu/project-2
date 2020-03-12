import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'
import axios from 'axios'

import Home from './component/Home'
import Houses from './component/Houses'
import SingleHouse from './component/SingleHouse'
import Characters from './component/Characters'
import SingleCharacter from './component/SingleCharacter'
import NavBar from './component/NavBar'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/houses/:id' component={SingleHouse} />
      <Route exact path='/houses' component={Houses} />
      <Route exact path='/characters' component={Characters} />
      <Route exact path='/characters/:id' component={SingleCharacter} />

    </Switch>
  </BrowserRouter>
)






ReactDOM.render(
  <App />,
  document.getElementById('root')
)
