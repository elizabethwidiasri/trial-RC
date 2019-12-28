export const getMakeups = () => async dispatch => {
  const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique`)
  const responseJSON = await response.json()
  dispatch({
    type: 'SET_MAKEUPS',
    makeups: responseJSON
  })
}

