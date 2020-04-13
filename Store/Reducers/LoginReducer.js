const initialState ={id:"", logged:false}

function handleLogin(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'LOGIN':
      nextState = {
        ...state,
        id: action.value.id,
        logged :  action.value.logged
      }
      return nextState || state
      default:
      return state
    }
}
export default handleLogin
