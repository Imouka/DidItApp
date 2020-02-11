import React from 'react'
import { connect } from 'react-redux'
import {View, StyleSheet, TextInput, FlatList, Alert, ActivityIndicator} from 'react-native'
import FriendItem from '../../Components/FriendItem'
import SearchBar from '../../Components/SearchBar'
import {getFriendsFromUserId } from '../../API/APITest'
import {postHandleFriendship} from '../../API/APITest'
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';

class FriendsListPage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       user_id: "",
       isLoading:false,
     }
       this.handleFriendship=this.handleFriendship.bind(this)
   }

   componentDidMount(){
     this.setState ({
       user_id:this.props.navigation.state.params.user_id
     })
     this._update_friendlist()
   }

   _update_friendlist(){
     getFriendsFromUserId(this.props.navigation.state.params.user_id).then(data => {
       console.log(data)
       this.props.dispatch({ type: "UPDATE_FRIENDSHIP", value: data.friends })
     })
   }

   _displayLoading() {
       if (this.state.isLoading) {
         return (
           <View style={styles.loading_container}>
             <ActivityIndicator size='large' />
           </View>
         )
       }
     }

  _renderHeader = () => {
  return (
  <View>
    <SearchBar/>
  </View>
  )
  };

handleFriendship=(friend, action_type) =>{
  this.setState({ isLoading: true })
  console.log(friend)
  if (action_type=="refuse") {
    postHandleFriendship(this.state.user_id, friend.id, action_type)
    .then(data => {
      this._update_friendlist()
      this.setState({ isLoading: false })
      if (data.status=="ok") {
        Alert.alert("Deleted", "The friend request from "+friend.first_name+ " has been deleted")
      }
      else {
        Alert.alert("Error", "Something went wrong please try again later" )
      }
      })
      .catch((error)=>console.log("error"))
  }
  else if (action_type=="confirm")  {
    postHandleFriendship(this.state.user_id, friend.id, action_type)
    .then(data => {
      this._update_friendlist()
      this.setState({ isLoading: false })
      if (data.status=="ok") {
        Alert.alert("Confirmed", "The friend request from "+ friend.first_name+ " has been confirmed")
     }
      else {
        Alert.alert("Error", "Something went wrong please try again later" )
    }
    })
    .catch((error)=>console.log("error"))
  }
  else if (action_type=="send")  {
    postHandleFriendship(this.state.user_id, friend.id, action_type)
    .then(data => {
      this._update_friendlist()
      this.setState({ isLoading: false })
      if (data.status=="ok") {
       Alert.alert("Request send", "You sent a friend request to "+ friend.first_name)
     }
      else {
        Alert.alert("Error", "Something went wrong please try again later" )
    }
    })
    .catch((error)=>console.log("error"))
  }
  else if (action_type=="unfriend")  {
     postHandleFriendship(this.state.user_id, friend.id, action_type)
    .then(data => {
      this._update_friendlist()
      this.setState({ isLoading: false })
      if (data.status=="ok") {
       Alert.alert("Unfriended", friend.first_name+ "  has been unfriended")
     }
      else {
        Alert.alert("Error", "Something went wrong please try again later" )
    }
  })
  .catch((error)=>console.log("error"))
  }

}

  _renderSeparator = () => {
  return (
    <View
      style={{
        marginTop:'5%',
      }}
    />
  );
  };

 render() {
    return (
        <View style={styles.main_container}>
        <FlatList
          data={this.props.friends}
          keyExtractor={(item) => item.id.toString()}
          ref={(ref) => { this.flatListRef = ref; }}
          ItemSeparatorComponent={this._renderSeparator}
          ListHeaderComponent={this._renderHeader}
          renderItem={({item}) =>
          <FriendItem
            frienditem={item}
            imageSource={require('../../Images/profile_icon.png')}
            handleFriendship={this.handleFriendship}

          />}
        />
        {this._displayLoading()}
        </View>
    )
  }
}



const styles = StyleSheet.create({
  main_container: {
    marginLeft: '3%',
  },
  loading_container: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 100,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center'
}
})

const mapStateToProps = (state) => {
  return {
    friends : state.handleUser.friends
  }
}
/*
const mapStateToProps = (state) => {
  return {
    friends : state.friends
  }
}
*/

export default connect(mapStateToProps)(FriendsListPage)
