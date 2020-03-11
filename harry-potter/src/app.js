import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'
import axios from 'axios'
import Spinner from './assets/Spinner'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />


    </Switch>
  </BrowserRouter>
)

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      initialData: '',
      data: ''
    }
  }


  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then((res) => {
        this.setState({ initialData: res.data })
        console.log(this.state)

      })
  }


  PickHouse() {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then((res) => {
        this.setState({ data: res.data })
        console.log(this.state)

      })
  }

  // .then(console.log(this.state.data))
  render() {

    if (!this.state.initialData) return <Spinner />

    else return <div className="title-container">
      <div className="title">
        <h1>Welcome to Hogwarts!</h1>
      </div>
      <h2 className="subtitle">
        Click the Sorting Hat to find a home</h2>
      <div className="sortingHat"
        onClick={() => this.PickHouse()}
      >
        <img src='./assets/sortingHat.png' />
      </div>
      <div>
        <input
          className="input"
          readOnly='defaultValue'
          type="text"
          value={this.state.data} />

        <div> Click here to explore your house!</div>
      </div>
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
