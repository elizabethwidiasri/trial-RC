export const getMakeups = () => async dispatch => {
  const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique`)
  const responseJSON = await response.json()
  dispatch({
    type: 'SET_MAKEUPS',
    makeups: responseJSON
  })
}

export const getMakeup = (id) => async dispatch => {
  // setMakeup(null)
  const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique`)
  const responseJSON = await response.json()
  const makeup = responseJSON.filter(data => String(data.id) === String(id))[0]  
  dispatch({
    type: 'SET_MAKEUP',
    makeup
  })
}

export const setMakeup = (value) => dispatch => {  
  dispatch({
    type: 'SET_MAKEUP',
    makeup: value
  })
}