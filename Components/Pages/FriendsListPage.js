import React from 'react'
import {View, StyleSheet, TextInput, FlatList, Alert, ActivityIndicator} from 'react-native'
import FriendItem from '../../Components/FriendItem'
import SearchBar from '../../Components/SearchBar'
import {getFriendsFromUserId } from '../../API/APITest'
import {handleFriendship} from '../../API/APITest'
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';


class FriendsListPage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       friends: [],
       user_id: "",
       isLoading:false,
     }
       this.handleFriendship=this.handleFriendship.bind(this)
   }

   componentDidMount(){
     this.setState ({
       user_id:this.props.navigation.state.params.user_id
     })
     getFriendsFromUserId(this.props.navigation.state.params.user_id).then(data => {
       this.setState ({
         friends:data.friends
       })
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
  if (action_type=="refuseFriendship") {
    //handleFriendship(this.state.user_id, friend.id, action_type)
    getFriendsFromUserId("2")
    .then(data => {
            this.setState({ isLoading: false })
            Alert.alert("Deleted", "The friend request from "+friend.first_name+ " has been deleted")
          })
    .catch(data => {
            this.setState({ isLoading: false })
            Alert.alert("Error", "The action could not be performed, please try again later")
          })
  }
  else if (action_type=="confirmFriendship")  {
    getFriendsFromUserId("2").then(data => {
            this.setState({ isLoading: false })
            Alert.alert("Confirmed", "The friend request from "+ friend.first_name+ " has been confirmed")
          })
  }
  else if (action_type=="sendFriendRequest")  {
    getFriendsFromUserId("2").then(data => {
            this.setState({ isLoading: false })
            Alert.alert("Request send", "You sent a friend request to "+ friend.first_name)
          })
  }
  else if (action_type=="unFriend")  {
    getFriendsFromUserId("2").then(data => {
            this.setState({ isLoading: false })
            Alert.alert("Unfriended", friend.first_name+ "  has been unfriended")
          })
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
          data={this.state.friends}
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

export default FriendsListPage
