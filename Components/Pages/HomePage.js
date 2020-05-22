
import React from 'react'
import {connect} from 'react-redux'
import {View, ScrollView,FlatList, StyleSheet, Text, Alert,ActivityIndicator} from 'react-native'
import LateralBar from '../../Components/LateralBar'
import HomepagePostItem from '../../Components/HomepagePostItem'
import UpdateItem from '../../Components/UpdateItem'
import {  getProjectFromUserId, sendComment } from '../../API/APITest'
import update from '../../Utils/Updaters.js';
import {NavigationEvents} from 'react-navigation';
import moment from 'moment'
import {imageStyles} from '../../Styles/Image_styles'
import {policeStyles} from '../../Styles/police_styles'



class HomePage extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }

  componentDidMount(){
    update.update_user(this, this.props.loggedid )
  }

  componentDidUpdate(prevProps){
    if(prevProps.user.id != this.props.user.id){
      update.update_projects(this, this.props.user.id)
      update.update_feed(this,this.props.user.id)
    }
  }

  send_comment=(projectid,message) => {
    this.setState({ isLoading: true })
    sendComment(projectid,this.props.user.id, moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), message).then(data => {
      this.setState({ isLoading: false })
      if (this.props.friend_user.id != ""){
        update.update_friend_user(this,this.props.friend_user.friend.id,this.props.user.id)
      }
      update.update_feed(this,this.props.user.id)
      if (data.status!="ok") {
        Alert.alert("Error", "Something went wrong please try again later" )
      }
    })
    .catch((error)=>{
      console.log("HomePage->send_comment-> error")
      this.setState({ isLoading: false })
      Alert.alert("Error", "Something went wrong please try again later" )})
    }


    _renderSeparator () {
      return (
        <View
        style={{
           marginTop:'2%',
          marginBottom:'2%',
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

    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={imageStyles.loading_container}>
          <ActivityIndicator size='large' />
          </View>
        )
      }
    }


    _displayDetailForProject=(project_id)=>{
      this.props.navigation.navigate('ProjectPage',{project_id : project_id})
    };

    displayProfilePage=(friend_id)=>{
      if (friend_id==this.props.user.id){
        this.props.navigation.navigate('ProfilePage')
      } else{
        update.update_friend_user(this, friend_id,this.props.user.id).then(()=>{
          this.props.navigation.navigate('FriendProfilePage', { friend_id:friend_id})
        }
      )
    }
  }

  displayProjectPage=(friend_id, project_id)=>{
    if (friend_id==this.props.user.id){
      this.props.navigation.navigate('ProjectPage',{project_id : project_id})
    } else{
      update.update_friend_user(this, friend_id,this.props.user.id).then(()=>{
        this.props.navigation.navigate('FriendProjectPage',{project_id : project_id})
      }
    )
  }
}

_renderHeader=()=>{
  return (
    <View >
    <LateralBar
    projects={this.props.projects}
    displayDetailForProject={this._displayDetailForProject}/>
    {this._renderSeparatortop()}
    </View>
  )
}

_renderPosts(){
  if (this.props.feed.length==0){
    return(
      <View>
        <View style={styles.NoResultsContainer}>
            <Text style={policeStyles.standard_text_disabled_center}>
             {" Your feed is still empty, create projects and add new friends ! "}
            </Text>
        </View>
      </View>
    )
  } else {
    return(
      <FlatList
      data={this.props.feed}
      keyExtractor={(item) => item.id.toString()}
      ref={(ref) => { this.flatListRef = ref; }}
      ItemSeparatorComponent={this._renderSeparator}
      ListHeaderComponent={ this._renderHeader}
      renderItem={({item}) =>
      <HomepagePostItem
      userImageSource={{uri:this.props.user.icon}}
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
    )
  }
}


render() {
  return (
    <View>
    {this._displayLoading()}
    <NavigationEvents onWillFocus={() => update.update_feed(this,this.props.loggedid)} />
    {this._renderPosts()}
    </View>
  )
}
}

const styles = StyleSheet.create({
  NoResultsContainer:{
     alignItems:'center',
     justifyContent:'flex-end',
     marginLeft:"4%" ,
     marginRight:"4%" ,
     marginTop:"10%" ,
     flex:1,
  },
})

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
