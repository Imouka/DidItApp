
import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet,Text, FlatList, ActivityIndicator, TouchableOpacity, Alert} from 'react-native'
import ProjectPageHeader from '../../../Components/Headers/ProjectPageHeader'
import CommentItem from '../../../Components/CommentItem'
import UpdateItem from '../../../Components/UpdateItem'
import SupportItem from '../../../Components/SupportItem'
import ButtonBigImageAndText from '../../../Components/ButtonBigImageAndText'
import TextInputWithImage from '../../../Components/TextInputWithImage'
import SupportButton from '../../../Components/SupportButton'
import update from '../../../Utils/Updaters.js';
import {sendSupport, sendComment} from '../../../API/APITest'
import moment from 'moment'
import {imageStyles} from '../../../Styles/Image_styles'


class FriendProjectPage extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       project: {},
       isLoading: false,
     }
   }


   componentDidMount(){
      console.log("FriendProjectPage ->componentDidMount -> this.props.friend_user"+this.props.friend_user)
     this._retrieve_project()
   }

   componentDidUpdate(prevProps){
      console.log("FriendProjectPage ->componentDidUpdate ")
     if(prevProps.friend_user != this.props.friend_user){
         this._retrieve_project()
     }
   }

   _retrieve_project(){
     const arrayLength = this.props.friend_user.friend.nb_projects;
     const id = this.props.navigation.state.params.project_id
     console.log("FriendProjectPage -> _retrieve_project -> project_id"+id)
      console.log("FriendProjectPage -> _retrieve_project -> arrayLength"+arrayLength)
     for (var i = 0; i < arrayLength; i++) {
       if( this.props.friend_user.projects[i].id == id ){
         this.setState({
           project:this.props.friend_user.projects[i]
         })
         break
       }
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

  _render_add_comment(){
      return(
        <View style={[styles.add_update_container]} >
           <TextInputWithImage
           text={"Add a comment"}
           imageSource= {require("../../../Images/profile_icon.png")}
           action={this.send_comment}/>
       </View>
      )
  }

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

  _renderHeader = () => {
     return(
       <View>
        <View style={styles.header_container}>
         <ProjectPageHeader
         project={this.state.project}
         imageProject={require('../../../Images/project.png')}
         displayProjectSettings={console.log}
         deleteProject={console.log}
         optionsIsDisplayed={false}>
           <SupportButton
           action={this.send_support}
           userId={this.props.user.id}
           projectid={this.state.project.id}
           disabled={this.state.project.is_done}/>
        </ProjectPageHeader>
        </View>
          {this._render_add_comment()}
      </View>
     )
  }

  send_support=(projectid,senderid) => {
     this.setState({ isLoading: true })
     sendSupport(projectid,senderid, moment(new Date()).format("YYYY-MM-DD HH:mm:ss")).then(data => {
       this.setState({ isLoading: false })
       update.update_friend_user(this,this.props.friend_user.friend.id,this.props.user.id)
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

     send_comment=(message) => {
        this.setState({ isLoading: true })
        sendComment(this.state.project.id,this.props.user.id, moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), message).then(data => {
          this.setState({ isLoading: false })
          update.update_friend_user(this,this.props.friend_user.friend.id,this.props.user.id)
          update.update_feed(this,this.props.user.id)
          if (data.status!="ok") {
            Alert.alert("Error", "Something went wrong please try again later2" )
          }
          })
          .catch((error)=>{
            console.log("FriendsListPage->send_support-> error")
            this.setState({ isLoading: false })
           Alert.alert("Error", "Something went wrong please try again later" )})
        }

  _display_item=(item)=>{
   if (item.TYPE=="COMMENT") {
     return (
      <View style={{  paddingLeft:'2%'}}>
        <CommentItem
          date_is_displayed={true}
          comment={item}
          id={item.user_id}
          action={this.displayProfilePage}/>
      </View>
     )
   }
   if (item.TYPE=="UPDATE"){
     return (
       <View style={{backgroundColor:'#F1F4F8', paddingLeft:'2%', paddingTop:'1%', paddingBottom:'1%'}}>
         <UpdateItem
           UsernameIsDisplayed={true}
           update={item}
           user_first_name={this.props.friend_user.friend.first_name}
           user_last_name={this.props.friend_user.friend.last_name}
           action={this.displayProfilePage}/>
       </View>
     )
   }
   if (item.TYPE=="SUPPORT"){
      return (
      <View style={{  paddingLeft:'2%'}}>
        <SupportItem
          support={item}
          action={this.displayProfilePage}/>
      </View>
      )
   }
   else{
     console.log("FriendprojectPage -> _display_item -> type not recognized")
   }
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

  render() {
    return (
      <FlatList
        data={this.state.project.feed}
        keyExtractor={(item) => item.feed_id.toString()}
        ref={(ref) => { this.flatListRef = ref; }}
        ListHeaderComponent={ this._renderHeader}
        ItemSeparatorComponent={this._renderSeparator}
        renderItem={({item}) =>this._display_item(item) }
        />
    )
  }
  }


  const styles = StyleSheet.create({
  header_container: {
    marginTop: "1%",
    marginRight:"2%"  ,
    marginLeft:"2%",
  },
  add_update_container:{
    marginBottom:'2%',
    marginLeft:"2%",
  },
  })

  const mapStateToProps = (state) => {
    return {
      user: state.handleUser.user,
      friends : state.handleUser.friends,
      friend_user: state.handleFriend.friend,
      feed: state.handleUser.feed,
    }
  }


export default  connect(mapStateToProps) (FriendProjectPage)
