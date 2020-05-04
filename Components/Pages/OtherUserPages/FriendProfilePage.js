
import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet,Text, FlatList, ActivityIndicator, TouchableOpacity, Alert} from 'react-native'
import ProfileHeader from '../../../Components/Headers/ProfileHeader'
import ConfirmDeleteButton from '../../../Components/ConfirmDeleteButton'
import AddFriendButton from '../../../Components/AddFriendButton'
import ProjectItem from '../../../Components/ProjectItem'
import update from '../../../Utils/Updaters.js';
import {getUserInfoById, sendSupport} from '../../../API/APITest'
import {postHandleFriendship} from '../../../API/APITest'
import SupportButton from '../../../Components/SupportButton'
import moment from 'moment'
import FriendProjectPage from '../../../Components/Pages/OtherUserPages/FriendProjectPage'
import FriendFriendsListPage from '../../../Components/Pages/OtherUserPages/FriendFriendsListPage'

class FriendProfilePage extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       isLoading: false,
     };
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

     componentDidMount(){
       update.update_friend_user(this,this.props.navigation.state.params.friend_id,this.props.user.id)
     }

     componentDidUpdate(prevProps){
       if(prevProps.friend_user != this.props.friend_user){
        console.log("FriendProfilePage componentDidUpdate")
        console.log("FriendProfilePage componentDidUpdate -> friend_user.id"+this.props.friend_user.friend.id)
       }
     }


_renderHandleFriendshipButton =(frienditem, action) => {
   if (frienditem.status=="SENDED") {
       return (
         <View>
           <AddFriendButton
           text={"You already send a friend request"}
           backgroundcolor={'#EEF0F1'}
           textcolor={'#A4A4A4'}
           action={action}
           disabled={true}/>
         </View>
       );
   }
   else if (frienditem.status=="RECEIVED") {
       return (
         <View style={{flexDirection: 'row'}}>
           <ConfirmDeleteButton
           text={"Accept the frienship"}
           color={"#2ccce4"}
           friend={frienditem.friend}
           action={action}
           action_type={"confirm"}/>
           <ConfirmDeleteButton
           text={"Refuse the friendship"}
           color={"#EEF0F1"}
           friend={frienditem.friend}
           action={action}
           action_type={"refuse"}/>
         </View>
       );
     }
   else if (frienditem.status=="ACCEPTED") {
    }
   else if (frienditem.status=="STRANGER_DANGER") {
      return (
          <View>
            <AddFriendButton
            text={"Add Friend"}
            backgroundcolor={'#2ccce4'}
            textcolor={'#000000'}
            friend={frienditem}
            action={action}
            disabled={false}/>
          </View>
        );
    }
};

_displayDetailForProject=(project_id)=>{
  this.props.navigation.navigate('FriendProjectPage',{project_id : project_id})
  }

  _displayFriend_FriendsListPage=()=>{
  this.props.navigation.navigate("FriendFriendsListPage")
  }

_renderHeader = () => {
  return (
    <ProfileHeader
     imageSource={require('../../../Images/profile_icon.png')}
     user={this.props.friend_user.friend}
     nbNewRequests='xxx'
     projectNb={"XXXX"}
     scrollToIndex={this._scrollToIndex}
     displayFriendsList={this._displayFriend_FriendsListPage}
     notification_icon={false}/>
  )
}

send_support=(projectid,senderid) => {
   this.setState({ isLoading: true })
   sendSupport(projectid,senderid, moment(new Date()).format("YYYY-MM-DD HH:mm:ss")).then(data => {
     this.setState({ isLoading: false })
     update.update_friend_user(this,this.props.navigation.state.params.friend_id,this.props.user.id)
     if (data.status=="ok") {
       Alert.alert("Confirmed", "Your supported this project !")
     }
     else {
       Alert.alert("Error", "Something went wrong please try again later2" )
     }
     })
     .catch((error)=>{
       console.log("FriendsListPage->send_support-> error")
       this.setState({ isLoading: false })
      Alert.alert("Error", "Something went wrong please try again later" )})
   }

display_support_button(item) {
  if (!item.item.is_done){
    return(
      <View style={{flex:0.2}}>
        <SupportButton
        action={this.send_support}
        userId={this.props.user.id}
        projectid={item.item.id}
        disabled={item.item.is_done}/>
      </View>
    )}
  }

_renderProjectsView(){
  if (this.props.friend_user.status!="ACCEPTED") {
    return(
      <View   style={styles.main_container}>
        <View>
        {this._renderHeader()}
        </View>
        <View style={styles.NonFriendContainer}>
          <View   style={styles.NonFriendView}>
            <Text style={styles.non_friend_text}>
             {" You can only see the projects of your friends"}
            </Text>
             <View style={{marginTop:"5%"}}>
              {this._renderHandleFriendshipButton(this.props.friend_user, this.handleFriendship)}
             </View>
          </View>
        </View>
      </View>
    )
  }
  else {
    return(
      <View   style={styles.main_container}>
        <FlatList
          data={this.props.friend_user.projects}
          keyExtractor={(item) => item.id.toString()}
          ref={(ref) => { this.flatListRef = ref; }}
          ItemSeparatorComponent={this._renderSeparator}
          ListHeaderComponent={this._renderHeader}
          renderItem={({item}) =>
          <View style={styles.friend_item}>
            <View style={{flex:1}}>
              <ProjectItem
                  project={item}
                  imageSource={require('../../../Images/project.png')}
                  displayDetailForProject={this._displayDetailForProject}
              />
            </View>
            {this.display_support_button({item})}
          </View>}
        />
      </View>
    )

  }
}

_scrollToIndex = () => {
  if (this.props.friend_user.status=="ACCEPTED") {
    if (this.props.friend_user.nb_projects != 0) {
      this.flatListRef.scrollToIndex({animated: true, index:0});
    }
  }
}

_renderSeparator = () => {
return (
  <View
    style={{
      marginTop:'5%',
      height: 1,
      width: "86%",
      backgroundColor: "#CED0CE",
      marginLeft: "3%"
    }}
  />
);}

handleFriendship= (friend, action_type) => {
  this.setState({ isLoading: true })
  console.log("FriendsProfilePage->handleFriendship-> appel API, friend id" + friend.id)
  postHandleFriendship(this.props.user.id,friend.id, action_type)
  .then(data => {
    update.update_friendlist(this,this.props.user.id)
    update.update_friend_user(this, friend.id,this.props.user.id)
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

  render() {
    return (
      <View style ={{flex:1}}>
          {this._renderProjectsView()}
          {this._displayLoading()}
      </View>
      )
  }
}



const styles = StyleSheet.create({
  main_container: {
    marginTop: "5%",
    marginLeft:"2%" ,
    marginRight:"2%" ,
    flex:1,
  },
  button_edit_project:{
    marginTop: "2%",
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
},
non_friend_text:{
  color:"#4C4C4C",
  fontSize:15,
},
NonFriendContainer:{
  // backgroundColor:'#F2F2F2',
   alignItems:'center',
   justifyContent:'flex-end',
   flex:1,
},
 NonFriendView:{
   marginLeft:"4%" ,
   marginRight:"4%" ,
   alignItems:'center',
   flex:0.9,
   //justifyContent:'flex-end',
},
friend_item :{
  flexDirection:'row',
  flex:1,
  alignItems:"center",
}

})

const mapStateToProps = (state) => {
  return {
    user: state.handleUser.user,
    friends : state.handleUser.friends,
    friend_user: state.handleFriend.friend,
    feed: state.handleUser.feed,
  }
}


export default connect(mapStateToProps) (FriendProfilePage)
