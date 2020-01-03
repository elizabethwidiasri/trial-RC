import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMakeup } from '../store/actions'

import {
  Link, useParams
} from 'react-router-dom'


function Detail() {
  const style = { 
    textDecoration: 'none' 
  }

  let {id} = useParams()
  const dispatch = useDispatch()
  const makeup = useSelector(state => state.makeup)


  useEffect(() => {
    dispatch(getMakeup(id))
  }, [])

  return (
    <div>
       <Link to="/" style={style}>Home</Link>
      {/* <p>ini detail {id} nanti</p> */}
       {/* <p>{JSON.stringify(makeup)}</p> */}
       { makeup && (
         <>
         <p>{makeup.name.split('&trade;')}</p>
         <img src={makeup.image_link}></img>
         <p>{makeup.price_sign} {makeup.price}</p>
         <p>{makeup.product_type}</p>
         </>
       )}
     

    </div>
  )
}

export default Detail