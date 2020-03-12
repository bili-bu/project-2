import React from 'react'
import axios from 'axios'

import Spinner from '../assets/Spinner'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      initialData: '',
      data: '',
      chosenHouse: ''
    }
  }


  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then((res) => {
        this.setState({ initialData: res.data })

      })
  }


  PickHouse() {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then((res) => {
        this.setState({ data: res.data })
        console.log(this.state.data)
      })
  }

  HandleRoute() {
    if (this.state.data === 'Ravenclaw') {
      <Link to='/houses/'/>
    }
  }





  render() {

    if (!this.state.initialData) return <Spinner />

    else return <div className="title-container">
      <div className="title">
        <h1>Welcome to Hogwarts!</h1>
      </div>
      <div>
        <h2 className="title is-4">
          Click the Sorting Hat to find a home</h2>
      </div>
      <div className="sortingHat"
        onClick={() => this.PickHouse()}
      >
        <img src='./assets/sortingHat.png' />
      </div>
      <div>
        <input
          className="input has-text-centered"
          readOnly='defaultValue'
          type="text"
          value={this.state.data} />

        {this.state.data ?  
          <button>
            <Link to={this.state.data === 'Ravenclaw' ? '/houses/5a05da69d45bd0a11bd5e06f' 
              : this.state.data === 'Gryffindor' ? 'houses/5a05e2b252f721a3cf2ea33f' 
                : this.state.data === 'Hufflepuff' ? 'houses/5a05dc58d45bd0a11bd5e070' 
                  : 'houses/5a05dc8cd45bd0a11bd5e071'}>

            Click here to explore your house! </Link> 
          </button>
          :

          <h2></h2>
        }
      </div>
    </div>
  }
}

export default Home

