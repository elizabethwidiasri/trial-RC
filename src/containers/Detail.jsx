import React, {useEffect} from 'react'
import {
  Link
} from 'react-router-dom'


function Detail(props) {
  const style = { 
    textDecoration: 'none' 
  }

  const {detail} = props.match.params
  const {uzai} = props.location.state

  return (
    <div>
    
       <Link to="/" style={style}>Home</Link>
      <p>ini detail {detail} nanti</p>
       <p>{uzai}</p>
    </div>
  )
}

export default Detail