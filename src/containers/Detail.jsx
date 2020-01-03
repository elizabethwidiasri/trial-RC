import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getMakeup, setMakeup } from '../store/actions'

import {
  Link, withRouter
} from 'react-router-dom'

const style = { 
  textDecoration: 'none' 
}

const mapStateToProps = (state) => { //useselector
  return {
    makeup: state.makeup
  }
}

const mapDispatchToProps = (dispatch) => { //useDispatch
  return {
    getMakeup(id) {
      dispatch(getMakeup(id))
    },
    setMakeup(value) {
      dispatch(setMakeup(value))
    }
  }
}


class Detail extends React.Component {
  componentDidMount () {
    const {id} = this.props.match.params
    this.props.getMakeup(id)
  }

  componentWillUnmount () {
    this.props.setMakeup(null)
  }

  render() {
    let { makeup } = this.props
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Detail))