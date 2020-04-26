
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
     if(prevProps.projects != this.props.projects){
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
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _render_add_comment(is_over){
    if (! is_over){
      return(
        <View style={[styles.add_update_container]} >
           <TextInputWithImage
           text={"Add a comment"}
           imageSource= {require("../../../Images/profile_icon.png")}
           size={35}
           action={console.log}/>
       </View>
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
           friendId={this.props.friend_user.friend.id}
           disabled={this.state.project.is_done}/>
        </ProjectPageHeader>
        </View>
          {this._render_add_comment(this.state.project.is_done)}
      </View>
     )
  }

 send_support=(userId,friendId) => {
   console.log("FriendProjectPage send_support userId"+userId)
   console.log("FriendProjectPage send_support friendId"+friendId)
    this.setState({ isLoading: true })
    this.setState({ isLoading: false })
    if (true) {
      Alert.alert("Confirmed", "Your supported this project !")
          // this.props.navigation.navigate('ProfilePage')
    }else {
       Alert.alert("Error", "Something went wrong please try again later" )

 }
}

  _display_item=(item)=>{
   if (item.type=="COMMENT") {
     return (
      <View style={{  paddingLeft:'2%'}}>
        <CommentItem
          fontsize={15}
          date_is_displayed={true}
          comment={item}/>
      </View>
     )
   }
   if (item.type=="UPDATE"){
     return (
       <View style={{backgroundColor:'#F1F4F8', paddingLeft:'2%', paddingTop:'1%', paddingBottom:'1%'}}>
         <UpdateItem
           UsernameIsDisplayed={true}
           update={item}
           user_first_name={this.props.friend_user.friend.first_name}
           user_last_name={this.props.friend_user.friend.last_name}/>
       </View>
     )
   }
   if (item.type=="SUPPORT"){
      return (
      <View style={{  paddingLeft:'2%'}}>
        <SupportItem
          support={item}/>
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
        keyExtractor={(item) => item.id.toString()}
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
      friend_user: state.handleFriend.friend
    }
  }


export default  connect(mapStateToProps) (FriendProjectPage)
