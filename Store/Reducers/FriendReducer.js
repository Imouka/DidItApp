const initialState ={friend :{id:""}
,friends : [],relashionship_status:"ACCEPTED"}

function handleFriend(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'UPDATE_FRIEND':
      nextState = {
        ...state,
        friend: action.value
      }
      return nextState || state
    default:
      return state
    }
}
export default handleFriend
