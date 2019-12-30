import React from 'react'
import {
  Link
} from 'react-router-dom'
function Detail() {
  const style = { 
    textDecoration: 'none' 
  }
  return (
    <div>
       <Link to="/" style={style}>Home</Link>
      ini detail nanti
    </div>
  )
}

export default Detail