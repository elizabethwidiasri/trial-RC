import React, { useState, useEffect} from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getMakeups } from '../store/actions'
import {
  Link
} from 'react-router-dom'
import './Home.sass'

function Home() {
  // const [makeups, setMakeups] = useState([])
  const makeups = useSelector(state => state.makeups) //...mapState
  const dispatch = useDispatch()
  const style = { 
    textDecoration: 'none' 
  }


  // async function getMakeups() {
  //   const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique`)
  //   const responseJSON = await response.json()
  //   setMakeups(responseJSON)
  // }

  useEffect(() => {
    dispatch(getMakeups())
  }, [])

  return (
    <>
    {makeups.length > 1 ? 
      (
        <div className="makeup-row">
          {
            makeups.map((makeup, i) => 
              (makeup.id !== 819 && makeup.id !== 817) && ( 
              <div key={'makeup' + i} className="col">

                {/* <Link to={{
                  pathname: `/${makeup.id}`
                }}  style={style}> */}

                <Link to={`/${makeup.id}`} style={style}> 

                {/* <Link to="/detail" style={style}> */}
                  {/* ini kirim makeup ke halaman home */}
                  <Card makeup={makeup} />
                  
                </Link>
              </div>
            ))
          }
        </div>
      )
      : 
      (
        <p>loading...</p>
      )
    }
    </>
  )
}

export default Home