import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { connect } from 'react-redux'

class FriendsFriendListPageTitle extends React.Component {
  render() {
    return (
      <Text
      style = {styles.title}>
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

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
  },})

export default connect(mapStateToProps)(FriendsFriendListPageTitle)
