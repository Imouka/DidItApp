import { combineReducers } from 'redux'
import handleProject from './ProjectReducer'
import handleUser from './UserReducer'
import handleLogin from './LoginReducer'

export default combineReducers({
  handleProject,
  handleUser,
  handleLogin,
})
