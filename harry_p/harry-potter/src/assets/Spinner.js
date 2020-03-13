import React from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Spinner = () => {
  return (
    <div className='flexContainer'>
      <div className='Loading'>
        <Loader
          type="Triangle"
          color="#FFC500"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      </div>
    </div>
  )
}


export default Spinner