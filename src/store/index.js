import { createStore, applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'

const initialMakeup = {
  makeups : [],
  makeup : null
}

function makeup(state = initialMakeup, action) {
  switch (action.type) {
    case 'SET_MAKEUPS' : 
    return {
      ...state,
      makeups: action.makeups
    }
    case 'SET_MAKEUP' :
      return {
        ...state,
        makeup: action.makeup
      }
    default : 
      return state
  }

}

let store = createStore(makeup, applyMiddleware(Thunk))

export default store