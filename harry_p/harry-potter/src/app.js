import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'

import Home from './component/Home'
import Houses from './component/Houses'
import SingleHouse from './component/SingleHouse'
import Characters from './component/Characters'
import SingleCharacter from './component/SingleCharacter'
import Spells from './component/Spells'
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
      <Route exact path='/spells' component={Spells} />

    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
