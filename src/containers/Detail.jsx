import React, {useEffect} from 'react'
import {
  Link
} from 'react-router-dom'

const style = { 
  textDecoration: 'none' 
}

class Detail extends React.Component {

  state = {
    detail : this.props.match.params.detail,
    makeup : this.props.location.state.makeup
  }

  render () {
    return (
    <div>
        <Link to="/" style={style}>Home</Link>
       <p>ini detail {this.state.detail} nanti</p>
        {/* <p>{JSON.stringify(makeup)}</p> */}
       <p>{this.state.makeup.name}</p>
       <img src={this.state.makeup.image_link}></img>
       <p>{this.state.makeup.price_sign} {this.state.makeup.price}</p>
       <p>{this.state.makeup.product_type}</p>

     </div>
    )
  }
}

export default Detail