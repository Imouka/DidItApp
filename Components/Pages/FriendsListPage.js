import React from 'react'
import { connect } from 'react-redux'
import {View, StyleSheet, TextInput, FlatList, Alert, ActivityIndicator} from 'react-native'
import FriendItem from '../../Components/FriendItem'
import SearchBar from '../../Components/SearchBar'
import {getFriendsFromUserId } from '../../API/APITest'
import {postHandleFriendship} from '../../API/APITest'
import { getUserFromId} from '../../API/APITest'
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';

class FriendsListPage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       isLoading:false,
     }
      this.handleFriendship=this.handleFriendship.bind(this)
   }

   componentDidMount=()=>{
    this._update_user()
    this._update_friendlist()
   }

   componentDidUpdate(prevProps){
     if(prevProps.user.id != this.props.user.id){
         this._update_friendlist()
     }
   }

   _update_user(){
     this.setState({ isLoading: true })
     getUserFromId("3").then(data => {
       this.props.dispatch({ type: "UPDATE_USER", value: data })
       this.setState({
             isLoading: false
           })
     })
   }


   _update_friendlist(){
     getFriendsFromUserId(this.props.user.id).then(data => {
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

  _renderHeader (){
  return (
  <View>
    <SearchBar/>
  </View>
  )
  };

handleFriendship(friend, action_type){
  this.setState({ isLoading: true })
  console.log("FriendsListPage->handleFriendship-> appel API, friend id" + friend)
  if (action_type=="refuse") {
    postHandleFriendship(this.props.user.id, friend.id, action_type)
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
      .catch((error)=>{
        console.log("error")
        this.setState({ isLoading: false })
       Alert.alert("Error", "Something went wrong please try again later" )})
  }
  else if (action_type=="confirm")  {
    postHandleFriendship(this.props.user.id, friend.id, action_type)
    .then(data => {
      console.log("FriendsListPage->handleFriendship-> appel API")
      this._update_friendlist()
      this.setState({ isLoading: false })
      if (data.status=="ok") {
        Alert.alert("Confirmed", "The friend request from "+ friend.first_name+ " has been confirmed")
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
  else if (action_type=="send")  {
    postHandleFriendship(this.props.user.id, friend.id, action_type)
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
    .catch((error)=>{
      console.log("error")
      this.setState({ isLoading: false })
     Alert.alert("Error", "Something went wrong please try again later" )})
  }
  else if (action_type=="unfriend")  {
     postHandleFriendship(this.props.user.id, friend.id, action_type)
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
  .catch((error)=>{
    console.log("error")
    this.setState({ isLoading: false })
   Alert.alert("Error", "Something went wrong please try again later" )})
  }

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
    user: state.handleUser.user,
    friends : state.handleUser.friends
  }
}


export default connect(mapStateToProps)(FriendsListPage)
