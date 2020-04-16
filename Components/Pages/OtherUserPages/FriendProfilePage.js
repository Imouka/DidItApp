
import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet,Text, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native'
import ProfileHeader from '../../../Components/Headers/ProfileHeader'
import ConfirmDeleteButton from '../../../Components/ConfirmDeleteButton'
import AddFriendButton from '../../../Components/AddFriendButton'
import update from '../../../Utils/Updaters.js';
import {getUserInfoById} from '../../../API/APITest'


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
       console.log("FriendProfilePage componentDidMount")
       console.log("friendid")
       console.log(this.props.navigation.state.params.friend_id)
      //  update.update_friend_user(this, this.props.navigation.state.params.friend_id)
     getUserInfoById(this.props.user.id,this.props.navigation.state.params.friend_id).then(data => {
        this.props.dispatch({ type: "UPDATE_FRIEND", value: data })
      })
          console.log(this.props.friend_user)
     }

     componentDidUpdate(prevProps){
       //if(prevProps.friend_user != this.props.friend_user){
        console.log("FriendProfilePage componentDidUpdate")
         
       //}
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
           friend={frienditem}
           action={action}
           action_type={"confirm"}/>
           <ConfirmDeleteButton
           text={"Refuse the friendship"}
           color={"#EEF0F1"}
           friend={frienditem}
           action={action}
           action_type={"refuse"}/>
         </View>
       );
     }
   else if (frienditem.status=="ACCEPTED") {
    }
   else {
       return (
         <View>
           <AddFriendButton
           text={"Send a friend request"}
           backgroundcolor={'#2ccce4'}
           textcolor={'#000000'}
           friend={frienditem}
           action={action}
           disabled={false}/>
         </View>
       );
    }
};

  render() {
    const handleFriendship = this.props.navigation.state.params.action
    console.log("FriendProfilePage")
    console.log(this.props.friend_user)
    return (
      <View
        style={styles.main_container}>
        {this._displayLoading()}
          <View >
              <ProfileHeader
               imageSource={require('../../../Images/profile_icon.png')}
               user={this.props.friend_user.friend}
               nbNewRequests='xxx'
               projectNb={"XXXX"}
               scrollToIndex={console.log}
               displayFriendsList={()=> console.log("display friend list")}
               notification_icon={false}/>
          </View>
          <View
            style={styles.NonFriendContainer}>
            <View
              style={styles.NonFriendView}>
              <Text style={styles.non_friend_text}>
               {" You can only see the projects of your friends"}
              </Text>
                {this._renderHandleFriendshipButton(this.props.friend_user, handleFriendship)}
            </View>
          </View>
      </View>
      )
  }
}
/*
<View style={{marginTop:"5%"}}>
  {this._renderHandleFriendshipButton(this.props.friend_user,handleFriendship )}
</View>

*/
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
   backgroundColor:'#F2F2F2',
   flex:1,
   alignItems:'center',
   justifyContent:'flex-end',
},
 NonFriendView:{
   marginLeft:"5%" ,
   marginRight:"5%" ,
   flex:0.9,
   alignItems:'center',
   //justifyContent:'flex-end',
},


})

const mapStateToProps = (state) => {
  return {
    user: state.handleUser.user,
    friends : state.handleUser.friends,
    friend_user: state.handleFriend.friend
  }
}


export default connect(mapStateToProps) (FriendProfilePage)
