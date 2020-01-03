import React, {useEffect} from 'react'
import {
  Link
} from 'react-router-dom'


function Detail(props) {
  const style = { 
    textDecoration: 'none' 
  }

  const {detail} = props.match.params
  const {makeup} = props.location.state

  return (
    <div>
       <Link to="/" style={style}>Home</Link>
      <p>ini detail {detail} nanti</p>
       {/* <p>{JSON.stringify(makeup)}</p> */}
      <p>{makeup.name}</p>
      <img src={makeup.image_link}></img>
      <p>{makeup.price_sign} {makeup.price}</p>
      <p>{makeup.product_type}</p>

    </div>
  )
}

export default Detail