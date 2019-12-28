import React, { useState, useEffect} from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getMakeups } from '../store/actions'
import './Home.sass'

function Home() {
  // const [makeups, setMakeups] = useState([])
  const makeups = useSelector(state => state.makeups) //...mapState
  const dispatch = useDispatch()


  // async function getMakeups() {
  //   const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique`)
  //   const responseJSON = await response.json()
  //   setMakeups(responseJSON)
  // }

  useEffect(() => {
    console.log("gas")
    dispatch(getMakeups())
  }, [])

  return (
    <div className="makeup-row">
      {
        makeups.map(makeup => 
          (makeup.id !== 819 && makeup.id !== 817) && ( 
          <div className="col">
            <Card makeup={makeup} />
          </div>
        ))
      }
    </div>
  )
}

export default Home