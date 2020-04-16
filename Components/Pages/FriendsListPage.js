import React from 'react'
import { connect } from 'react-redux'
import {View, StyleSheet, TextInput, FlatList, Alert, ActivityIndicator} from 'react-native'
import FriendItem from '../../Components/FriendItem'
import SearchBar from '../../Components/SearchBar'
import {postHandleFriendship} from '../../API/APITest'
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';
import update from '../../Utils/Updaters.js';
import {NavigationEvents} from 'react-navigation';


import FriendProfilePage from '../../Components/Pages/OtherUserPages/FriendProfilePage'

class FriendsListPage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       isLoading:false,
     }
      this.handleFriendship=this.handleFriendship.bind(this)
   }

   componentDidMount=()=>{
    update.update_user(this)
    update.update_friendlist(this)
   }

   componentDidUpdate(prevProps){
     if(prevProps.user.id != this.props.user.id){
         this.update_friendlist()
     }
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

  _renderHeader (){
  return (
  <View>
    <SearchBar/>
  </View>
  )
  };


displayFriendProfilePage=(friend_item)=>{
  console.log("displayFriendProfilePage")
   update.update_friend_user(this, friend_item.id).then(()=>{
    this.props.navigation.navigate('FriendProfilePage', {action:this.handleFriendship, friend_id:friend_item.id})
  }
)
  }

handleFriendship(friend, action_type){
  this.setState({ isLoading: true })
  console.log("FriendsListPage->handleFriendship-> appel API, friend id" + friend)
  postHandleFriendship(this.props.user.id, friend.id, action_type)
  .then(data => {
    update.update_friendlist(this)
    this.setState({ isLoading: false })
    if (data.status=="ok") {
      if (action_type=="refuse") {
      Alert.alert("Deleted", "The friend request from "+friend.first_name+ " has been deleted")
      }
      else if (action_type=="confirm")  {
        Alert.alert("Confirmed", "The friend request from "+ friend.first_name+ " has been confirmed")
      }
      else if (action_type=="send"){
        Alert.alert("Request send", "You sent a friend request to "+ friend.first_name)
      }
      else if (action_type=="unfriend"){
        Alert.alert("Unfriended", friend.first_name+ "  has been unfriended")
      }
    }
    else {
      Alert.alert("Error", "Something went wrong please try again later" )
    }
    })
    .catch((error)=>{
      console.log("error")
      this.setState({ isLoading: false })
     Alert.alert("Error", "Something went wrong please try again later" )})
  }

  _renderSeparator() {
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
              <NavigationEvents onWillFocus={() => update.update_friendlist(this)} />
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
            displayFriendProfilePage ={this.displayFriendProfilePage}

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
    user: state.handleUser.user,
    friends : state.handleUser.friends,
    loggedid: state.handleLogin.id,
  }
}


export default connect(mapStateToProps)(FriendsListPage)
