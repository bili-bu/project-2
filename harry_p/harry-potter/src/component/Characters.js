import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Characters extends React.Component {

  constructor() {
    super()
    this.state = {
      data: null


    }
  }

  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/characters/?key=$2a$10$C5ErCiBe9RX1.TIYBfqSluLQBWeV5zSdyTNoA09OvmHlS1sNdyaXC')
      .then((res) => {
        console.log(res)
        this.setState({
          data: res.data
        })
        console.log(this.state.data)

      })
  }

  toSingleHouse(event) {
    console.log(event)
    // const id = this.props.match.params.id
    // this.props.history.push(`/houses/${id}`)
  }


  render() {
    if (!this.state.data) return null
    const data = this.state.data
    console.log(this.props)

    return (
      <div>
        <h1>Characters</h1>
        <section className="HouseSection">
          {data.map(character => {
            return (
              <div key={character._id} className='HouseCard'>
                <Link to={`/characters/${character._id}`}>
                  <div>


                    <h2>{character.name}</h2>
                  </div>
                </Link>
              </div>
            )
          })}
        </section>
      </div >

    )
  }
}

export default Characters
