import React from 'react'
import axios from 'axios'
import Spinner from '../assets/Spinner'

class Spells extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/spells/?key=$2a$10$C5ErCiBe9RX1.TIYBfqSluLQBWeV5zSdyTNoA09OvmHlS1sNdyaXC')
      .then(res => {
        this.setState({
          data: res.data
        })
        console.log(this.state.data)
      })
  }

  render() {

    if (!this.state.data) return <Spinner />
    const { data } = this.state
    return (
      <section>
        <h1>Spells</h1>
        <div className='HouseSection'>
          {data.map(spell => {
            return (
              <div key={spell._id} className='HouseCard'>
                <h3>{spell.spell}</h3>
                <p>{spell.type}</p>
                <p>{spell.effect}</p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Spells