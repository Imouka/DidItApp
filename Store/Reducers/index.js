import { combineReducers } from 'redux'
import handleProject from './ProjectReducer'
import handleUser from './UserReducer'
import handleLogin from './LoginReducer'
import handleFriend from './FriendReducer'

export default combineReducers({
  handleProject,
  handleUser,
  handleLogin,
  handleFriend,
})
