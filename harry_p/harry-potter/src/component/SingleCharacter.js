import React from 'react'
import axios from 'axios'


class SingleCharacter extends React.Component {

  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://www.potterapi.com/v1/characters/${id}?key=$2a$10$C5ErCiBe9RX1.TIYBfqSluLQBWeV5zSdyTNoA09OvmHlS1sNdyaXC`)
      .then((res) => {
        this.setState({
          data: res.data
        })
        console.log(this.state.data)

      })
  }

  render() {
    if (!this.state.data) return null
    const { name, role, house, school } = this.state.data
    
    return  <div className='title-container'>
      <h2>{name}</h2>
      <p>Occupation: {role} </p>
      <p>House: {house} </p>
      <p>{school}</p>

    </div>
    
  }
}

export default SingleCharacter