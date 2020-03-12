import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    if (!this.state.data) return null
    return (
      <div>
        {this.state.data.map(house => {
          return (
            <div key={house._id}>
              <h1 className="header"> {house.name} </h1>
              <small className='founder'>{house.founder}</small>
              <h3>House Head: {house.headOfHouse}</h3>
              <h3>House Ghost: {house.houseGhost}</h3>
              {house.members.map(member => {
                return (
                  <div key={member._id}>
                    <Link to={`/characters/${member._id}`}>{member.name}</Link>
                  </div>
                )
              })}
            </div>

          )
        })}
      </div>
    )
  }
}

export default SingleHouse