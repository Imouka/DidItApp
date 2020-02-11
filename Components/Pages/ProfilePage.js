
import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet,Text, FlatList} from 'react-native'
import ProfileHeader from '../../Components/Headers/ProfileHeader'
import ButtonBigImageAndText from '../../Components/ButtonBigImageAndText'
import ProjectItem from '../../Components/ProjectItem'
import { getUserFromId, getProjectFromUserId } from '../../API/APITest'


class ProfilePage extends React.Component {

 constructor(props) {
    super(props)
  }

  componentDidMount(){
    this._update_user()
    //this._update_projects()
  }

  componentDidUpdate(prevProps){
    if(prevProps.user.id != this.props.user.id){
        this._update_projects()
    }
  }

  _update_user(){
    getUserFromId("1").then(data => {
      this.props.dispatch({ type: "UPDATE_USER", value: data })
    })
  }

  _update_projects(){
    getProjectFromUserId(this.props.user.id).then(data => {
      this.props.dispatch({ type: "UPDATE_PROJECTS", value: data.projects })
    })
  }

  _displayDetailForProject=(project_id)=>{
    this.props.navigation.navigate('ProjectPage',{project_id : project_id})
    }

_displayCreateNewProjectPage= () => {
  this.props.navigation.navigate('CreateNewProjectPage')

}

_displayFriendsListPage=(user_id)=>{
  this.props.navigation.navigate('FriendsListPage',{user_id :user_id})
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
);
};

_renderHeader = () => {
return (
<View>
  <View>
      <ProfileHeader
       imageSource={require('../../Images/profile_icon.png')}
       user={this.props.user}
       friendsNb='XXX'
       projectNb={this.props.projects.length}
       scrollToIndex={this._scrollToIndex}
       displayFriendsList={this._displayFriendsListPage}/>
  </View>
  <View
  style={styles.button_create_new_project}>
     <ButtonBigImageAndText
     text="Create a new project"
     imageSource= {require("../../Images/plus.png")}
     action={this._displayCreateNewProjectPage}/>
  </View>
</View>
)
};

_scrollToIndex = () => {
  this.flatListRef.scrollToIndex({animated: true, index:0});
}

  render() {
    return (
      <View
      style={styles.main_container}>
      <FlatList
        data={this.props.projects}
        keyExtractor={(item) => item.id.toString()}
        ref={(ref) => { this.flatListRef = ref; }}
        ItemSeparatorComponent={this._renderSeparator}
        ListHeaderComponent={this._renderHeader}
        renderItem={({item}) =>
        <ProjectItem
            project={item}
            imageSource={require('../../Images/project.png')}
            displayDetailForProject={this._displayDetailForProject}
        />}
      />
        </View>
    )
  }
}
// imageSource='../Images/plus.png'/>

const styles = StyleSheet.create({
  main_container: {
    marginTop: "5%",
    marginLeft:"3%" ,
    flex:1,
  },
  button_create_new_project:{
    marginTop: 10,
  },
})

const mapStateToProps = (state) => {
  return {
    projects : state.handleProject.projects,
    user: state.handleUser.user
  }
}

export default connect(mapStateToProps)(ProfilePage)
