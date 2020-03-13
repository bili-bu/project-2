import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Houses extends React.Component {

  constructor() {
    super()
    this.state = {
      data: null


    }
  }

  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/houses/?key=$2a$10$C5ErCiBe9RX1.TIYBfqSluLQBWeV5zSdyTNoA09OvmHlS1sNdyaXC')
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
      <div className="HouseBody">
        <h1>Houses</h1>
        <section className="HouseSection">
          {data.map(house => {
            return (
              <div key={house._id} className='HouseCard'>
                <Link to={`/houses/${house._id}`}>
                  <div>


                    <h2>{house.name}</h2>
                    {house.values.map((value, key) => {
                      return (
                        <h5 key={key}>{value}</h5>
                      )
                    })}

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

export default Houses