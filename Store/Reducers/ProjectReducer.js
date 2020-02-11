const initialState ={projects:[]}

function handleProject(state  = initialState, action) {
  let nextState
  switch (action.type) {
    case 'UPDATE_PROJECTS':
      nextState = {
        ...state,
        projects: action.value
      }
      return nextState || state
    default:
      return state
  }
}
export default handleProject
