
import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {View,StyleSheet,ScrollView, Alert, ActivityIndicator, FlatList} from 'react-native'
import ProjectPageHeader from '../../Components/Headers/ProjectPageHeader'
import CommentItem from '../../Components/CommentItem'
import UpdateItem from '../../Components/UpdateItem'
import SupportItem from '../../Components/SupportItem'
import ButtonBigImageAndText from '../../Components/ButtonBigImageAndText'
import TextInputWithImage from '../../Components/TextInputWithImage'
import update from '../../Utils/Updaters.js';
import { postDeleteProject, postUpdateProject} from '../../API/APITest'
import AddProgression from '../../Components/AddProgression'


class ProjectPage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       project: {},
       isLoading: false,
     }
      this._add_update_to_project = this._add_update_to_project.bind(this)
      this._add_progression_to_project =this._add_progression_to_project.bind(this)
   }


   componentDidMount(){
       this._retrieve_project()
   }

   componentDidUpdate(prevProps){
     if(prevProps.projects != this.props.projects){
         this._retrieve_project()
     }
   }

   _retrieve_project(){
     const arrayLength = this.props.projects.length;
     const id = this.props.navigation.state.params.project_id
     for (var i = 0; i < arrayLength; i++) {
       if( this.props.projects[i].id == id ){
         this.setState({
           project:this.props.projects[i]
         })
         break
       }
     }
   }


  displayProjectSettings=()=>{
      this.props.navigation.navigate('ModifyProjectPage',{project :this.state.project})
 }

  deleteProject=()=>{
  Alert.alert(
  'Project Deletion',
  'Are you sure that you want to delete this project ?',
  [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    { text: 'OK',
     onPress: () => {
       this.setState({ isLoading: true })
       this.props.navigation.navigate('ProfilePage')
       postDeleteProject(this.state.project.id)
       .then(data => {
         this.setState({ isLoading: false })
         update.update_projects(this)
         update.update_user(this)
         if (true) {
           Alert.alert("Confirmed", "Your project has been deleted")
          // this.props.navigation.navigate('ProfilePage')
        }
         else {
           Alert.alert("Error", "Something went wrong please try again later" )
       }
     })
     }
    },
  ],
);
}

  _add_update_to_project=(message)=>{
    this.setState({ isLoading: true })
    postUpdateProject(this.state.project.id,this.props.user.id, moment(new Date()).format('YYYY/MM/DD'),null,message)
    .then(data => {
            this.setState({ isLoading: false })
            update.update_projects(this)
            update.update_feed(this)
            Alert.alert("Update", "You project has been updated")
          })
    .catch(data => {
            this.setState({ isLoading: false })
            Alert.alert("Error", "The action could not be performed, please try again later")
          })
    }

  _add_progression_to_project=(progressValue, message)=>{
     if (progressValue < 1 ) {
        Alert.alert("Error", "The progress value must be grater or equal to one")
      }
     else {
       if (progressValue + this.state.project.progression >= this.state.project.objective  ) {
         progressValue =  this.state.project.objective-this.state.project.progression
         this.setState({ isLoading: true })
         postUpdateProject(this.state.project.id,this.props.user.id, moment(new Date()).format('YYYY/MM/DD'),progressValue,message)
         .then(data => {
                 this.setState({ isLoading: false })
                 update.update_projects(this)
                 update.update_feed(this)
                 Alert.alert("Project finished", "You finished your project")
               })
         .catch(data => {
                 this.setState({ isLoading: false })
                 Alert.alert("Error", "The action could not be performed, please try again later")
               })
       }
       else  {
         this.setState({ isLoading: true })
         postUpdateProject(this.state.project.id,this.props.user.id, moment(new Date()).format('YYYY/MM/DD'), progressValue ,message)
         .then(data => {
                 this.setState({ isLoading: false })
                 update.update_projects(this)
                 Alert.alert("Project updated", "Your update is saved")
               })
         .catch(data => {
                 this.setState({ isLoading: false })
                 Alert.alert("Error", "The action could not be performed, please try again later")
               })
       }
     }
    }

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

_displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

_render_add_update_input(is_over){
  if (! is_over){
    return(
      <View style={[styles.add_update_container]} >
         <TextInputWithImage
         text={"Add an update"}
         imageSource= {require("../../Images/profile_icon.png")}
         size={35}
         action={this._add_update_to_project}/>
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
         imageProject={require('../../Images/project.png')}
         displayProjectSettings={this.displayProjectSettings}
         deleteProject={this.deleteProject}
         optionsIsDisplayed={true}>
           <AddProgression
           addProgression={this._add_progression_to_project}
           disabled={this.state.project.is_done}/>
          </ProjectPageHeader>
        </View>
        {this._render_add_update_input(this.state.project.is_done)}
      </View>
     )
  }



_display_item=(item)=>{
   if (item.TYPE=="COMMENT") {
     return (
      <View style={{  paddingLeft:'2%'}}>
         <CommentItem
         fontsize={15}
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
         user_first_name={this.props.user.first_name}
         user_last_name={this.props.user.last_name}
         action={this.displayProfilePage}/>
       </View>
     )
   }
   if (item.TYPE=="SUPPORT"){
          console.log("ProjectPage -> _display_item -> SUPPORT")
      return (
      <View style={{  paddingLeft:'2%'}}>
         <SupportItem
         support={item}
         action={this.displayProfilePage}/>
      </View>
      )
   }
   else{
     console.log("projectPage -> _display_item -> type not recognized")
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
    projects : state.handleProject.projects,
    user: state.handleUser.user,
    loggedid: state.handleLogin.id,
    friend_user: state.handleFriend.friend,
    feed: state.handleUser.feed,
  }
}

export default connect(mapStateToProps)(ProjectPage)
