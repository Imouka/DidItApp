const initialState ={user :{id:""},friends : [], feed :[]}

function handleUser(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'UPDATE_USER':
      nextState = {
        ...state,
        user: action.value
      }
      return nextState || state
    case 'UPDATE_FRIENDSHIP':
      nextState = {
        ...state,
        friends : action.value
      }
      return nextState || state
    case 'UPDATE_FEED':
    nextState = {
      ...state,
      feed : action.value
    }
    return nextState || state
    default:
      return state
    }


}
export default handleUser
