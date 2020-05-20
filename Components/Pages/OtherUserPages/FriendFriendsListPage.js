import React from 'react'
import { connect } from 'react-redux'
import {View, StyleSheet, TextInput, FlatList, Alert, ActivityIndicator} from 'react-native'
import FriendItem from '../../../Components/FriendItem'
import SearchBar from '../../../Components/SearchBar'
import {postHandleFriendship, searchInFriend_FriendList} from '../../../API/APITest'
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';
import update from '../../../Utils/Updaters.js';
import {imageStyles} from '../../../Styles/Image_styles'
import {policeStyles} from '../../../Styles/police_styles'

import FriendProfilePage from '../../../Components/Pages/OtherUserPages/FriendProfilePage'
import ProfilePage from '../../../Components/Pages/ProfilePage'

class FriendFriendsListPage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       isLoading:false,
       usersList:[],
       showFriendsOnly : true,
       validatedSearchEntry : ""
     }
     this.handleFriendship=this.handleFriendship.bind(this)
     this.searchUser=this.searchUser.bind(this)
   }


   componentDidMount=()=>{
    this.setState({
        usersList: this.props.friend_user.friends,
     })
   }

   componentDidUpdate(prevProps){
     if((prevProps.friend_user.friends != this.props.friend_user.friends ) && this.state.showFriendsOnly){
       console.log("FriendFriendsListPage -> componentDidUpdate frienduser"+this.props.friend_user.friend.first_name)
       this.setState({
           usersList: this.props.friend_user.friends,
        })
     }

   }



   _displayLoading() {
       if (this.state.isLoading) {
         return (
           <View style={imageStyles.loading_container}>
             <ActivityIndicator size='large' />
           </View>
         )
       }
     }

     _renderHeader=()=>{
     return (
     <View>
       <SearchBar
       action={this.searchUser}>
       </SearchBar>
     </View>
     )
     };



displayFriendProfilePage=(friend_item)=>{
  console.log("FriendListPage -> displayFriendProfilePage")
   update.update_friend_user(this, friend_item.id,this.props.user.id).then(()=>{
    this.props.navigation.navigate('FriendProfilePage', { friend_id:friend_item.id})
    }
    )
  }

  displayProfilePage=()=>{
    this.props.navigation.navigate('ProfilePage')
  }


  displayCorrectProfilePage=(friend_item)=>{
    if (friend_item.status=="MYSELF"){
        console.log("FriendListPage ->displayCorrectProfilePage -> frienditem.status")
      this.displayProfilePage()
    }
    else {
      this.displayFriendProfilePage(friend_item)
    }
  }

  searchUser(search_entry){
    console.log("FriendFriendsListPage -> search_entry ="+search_entry)
    console.log("FriendFriendsListPage -> this.props.user.id, ="+this.props.user.id,)
    console.log("FriendFriendsListPage ->  this.props.friend_user.id ="+ this.props.friend_user.friend.id)
    if (search_entry==""){
        this.setState({
            usersList:this.props.friend_user.friends,
            showFriendsOnly : true,
            validatedSearchEntry : ""
         })
        console.log("search_entry null ")
        console.log("usersList =")
        console.log(this.state.usersList)
     }
    else {
      searchInFriend_FriendList(this.props.user.id, search_entry,this.props.friend_user.friend.id).then((data)=>{
        console.log(data)
         this.setState({
             usersList: data.search,
             showFriendsOnly: false,
             validatedSearchEntry : search_entry
         })
         console.log("search entry != '' ")
           console.log("usersList =")
           console.log( this.state.usersList)
       }
      )
    }
  }

handleFriendship(friend, action_type){
  this.setState({ isLoading: true })
  console.log("FriendsListPage->handleFriendship-> appel API, friend id" + friend)
  postHandleFriendship(this.props.user.id, friend.id, action_type)
  .then(data => {
    update.update_friendlist(this,this.props.user.id)
    this.searchUser(this.state.validatedSearchEntry)
    update.update_friend_user(this,this.props.friend_user.friend.id,this.props.user.id)
    update.update_user(this, this.props.user.id )
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
      console.log("FriendsListPage->handleFriendship-> error")
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
          <FlatList
            data={this.state.usersList}
            keyExtractor={(item) => item.id.toString()}
            ref={(ref) => { this.flatListRef = ref; }}
            ItemSeparatorComponent={this._renderSeparator}
            ListHeaderComponent={this._renderHeader}
            renderItem={({item}) =>
            <FriendItem
              frienditem={item}
              imageSource={require('../../../Images/profile_icon.png')}
              handleFriendship={this.handleFriendship}
              displayFriendProfilePage ={this.displayCorrectProfilePage}
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
})

const mapStateToProps = (state) => {
  return {
    user: state.handleUser.user,
    friends : state.handleUser.friends,
    friend_user: state.handleFriend.friend
  }
}


export default connect(mapStateToProps)(FriendFriendsListPage)
