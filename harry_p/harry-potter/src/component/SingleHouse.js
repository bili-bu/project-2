import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../assets/Spinner'

class SingleHouse extends React.Component {

  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://www.potterapi.com/v1/houses/${id}?key=$2a$10$C5ErCiBe9RX1.TIYBfqSluLQBWeV5zSdyTNoA09OvmHlS1sNdyaXC`)
      .then((res) => {
        this.setState({
          data: res.data
        })
        console.log(this.state.data)

      })
  }

  render() {
    if (!this.state.data) return <Spinner />
    return (
      <div className='title-container'>
        {this.state.data.map(house => {
          return (
            <div key={house._id}>
              <h1 className="header"> {house.name} </h1>
              <h3 className='founder'> Founder: {house.founder}</h3>
              <h3 className='founder'>House Head: {house.headOfHouse}</h3>
              <h3 className='founder'>House Ghost: {house.houseGhost}</h3>
              <h2>Known Members:</h2>
              <div className='memberSection'>
                {house.members.map(member => {
                  return (
                    <div className='member' key={member._id}>
                      <Link to={`/characters/${member._id}`}>{member.name}</Link>
                    </div>
                  )
                })}
              </div>
            </div>

          )
        })}
      </div>
    )
  }
}

export default SingleHouse