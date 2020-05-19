import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { connect } from 'react-redux'
import {policeStyles} from '../Styles/police_styles'

class FriendsFriendListPageTitle extends React.Component {
  render() {
    return (
      <Text
      style = {policeStyles.TopBarText}>
       {this.props.friend_user.friend.first_name} {this.props.friend_user.friend.last_name} friends
      </Text>


    )
  }
}


const mapStateToProps = (state) => {
  return {
    friend_user: state.handleFriend.friend
  }
}


export default connect(mapStateToProps)(FriendsFriendListPageTitle)
