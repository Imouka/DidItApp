
import React from 'react'
import {connect} from 'react-redux'
import {View, ScrollView,FlatList, StyleSheet, Text, Alert} from 'react-native'
import LateralBar from '../../Components/LateralBar'
import HomepagePostItem from '../../Components/HomepagePostItem'
import UpdateItem from '../../Components/UpdateItem'
import {  getProjectFromUserId, sendComment } from '../../API/APITest'
import update from '../../Utils/Updaters.js';
import {NavigationEvents} from 'react-navigation';
import moment from 'moment'


class HomePage extends React.Component{

  constructor(props) {
     super(props)
     this.state = {
       isLoading: false
   }
   }

componentDidMount(){
    update.update_user(this)

}

componentDidUpdate(prevProps){
  if(prevProps.user.id != this.props.user.id){
    update.update_projects(this)
    update.update_feed(this)
  }
}

send_comment=(projectid,message) => {
   this.setState({ isLoading: true })
   sendComment(projectid,this.props.user.id, moment(new Date()).format('YYYY/MM/DD'), message).then(data => {
     this.setState({ isLoading: false })
     update.update_friend_user(this,this.props.friend_user.friend.id)
     update.update_feed(this)
     if (data.status=="ok") {
       Alert.alert("Confirmed", "You commented this project !")
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


_renderSeparator () {
return (
  <View
    style={{
    //  marginTop:'5%',
      marginBottom:'5%',
      height: 1,
      backgroundColor: "#CED0CE",
      marginLeft: "10%",
      marginRight: "10%"
    }}
  />
);
};

_renderSeparatortop () {
return (
  <View
    style={{
      marginBottom:'5%',
      height: 1,
      backgroundColor: "#CED0CE",
      marginLeft: "10%",
      marginRight: "10%"
    }}
  />
);
};

_displayDetailForProject=(project_id)=>{
  this.props.navigation.navigate('ProjectPage',{project_id : project_id})
};

displayProfilePage=(friend_id)=>{
  if (friend_id==this.props.user.id){
      this.props.navigation.navigate('ProfilePage')
  } else{
     update.update_friend_user(this, friend_id).then(()=>{
      this.props.navigation.navigate('FriendProfilePage', { friend_id:friend_id})
     }
   )
  }
}

displayProjectPage=(friend_id, project_id)=>{
  if (friend_id==this.props.user.id){
    this.props.navigation.navigate('ProjectPage',{project_id : project_id})
  } else{
     update.update_friend_user(this, friend_id).then(()=>{
      this.props.navigation.navigate('FriendProjectPage',{project_id : project_id})
     }
   )
  }
}

_renderHeader=()=>{
  return (
    <View >
      <LateralBar
      imageSource={require('../../Images/project.png')}
      projects={this.props.projects}
      displayDetailForProject={this._displayDetailForProject}/>
      {this._renderSeparatortop()}
    </View>
  )
}



  render() {
    return (
        <View>
          <NavigationEvents onWillFocus={() => update.update_feed(this)} />
          <FlatList
            data={this.props.feed}
            keyExtractor={(item) => item.id.toString()}
            ref={(ref) => { this.flatListRef = ref; }}
            ItemSeparatorComponent={this._renderSeparator}
            ListHeaderComponent={ this._renderHeader}
            renderItem={({item}) =>
            <HomepagePostItem
              projectImageSource={require("../../Images/project.png")}
              userImageSource={require("../../Images/profile_icon.png")}
              displayProfilePage={this.displayProfilePage}
              displayProjectPage={this.displayProjectPage}
              sendComment={this.send_comment}
              isMyProject={(item.user.id==this.props.user.id)}
              post={item}>
              <UpdateItem
                UsernameIsDisplayed={false}
                update={item.update}/>
              </HomepagePostItem>}
            />
          </View>
    )
  }
}

/*render() {
    return (
      <View>
      <Text> WORK IN PROGRESS </Text>
      </View>)
  }
}*/


const mapStateToProps = (state) => {
  return {
    projects : state.handleProject.projects,
    user: state.handleUser.user,
    feed: state.handleUser.feed,
    loggedid: state.handleLogin.id,
    friend_user: state.handleFriend.friend,
  }
}
export default connect(mapStateToProps)(HomePage)
