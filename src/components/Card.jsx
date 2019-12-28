import React from 'react'
import './Card.sass'

function Card({ makeup }) {
  return (
    <div className="card">
      <div className="name">{makeup.name.split('<BR>')[0].split('&trade;').join('').substring(0, 30)}</div>
      <img src={makeup.image_link} alt="makeup"/> 
  <div>{makeup.id}</div>
    </div>
     
  )
}

export default Card