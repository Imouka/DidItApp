import { combineReducers } from 'redux'
import handleProject from './ProjectReducer'
import handleUser from './UserReducer'

export default combineReducers({
  handleProject,
  handleUser
})
