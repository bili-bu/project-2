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
    const { name, role, house, school, ministryOfMagic, orderOfThePhoenix, dumbledoresArmy, deathEater } = this.state.data

    return <div className='flexContainer'>
      <div className="singleCharacter">
        <h2>{name}</h2>
        <p>{role} </p>
        <p>{house} </p>
        <p>{school}</p>

        { ministryOfMagic ? <p> Works at the Ministry of Magic</p> : null }
        { orderOfThePhoenix ? <p> Part of the Order Of The Phoenix</p> : null }
        { dumbledoresArmy ? <p> Part of Dumbledore's Army</p> : null }
        { deathEater ? <p> Hails Voldermort</p> : null }
      </div>
    </div>

  }
}

export default SingleCharacter