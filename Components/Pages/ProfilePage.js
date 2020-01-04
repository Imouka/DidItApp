
import React from 'react'
import {View,StyleSheet,Text, FlatList} from 'react-native'
import ProfileHeader from '../../Components/Headers/ProfileHeader'
import ButtonBigImageAndText from '../../Components/ButtonBigImageAndText'
import ProjectItem from '../../Components/ProjectItem'
import { getUserFromId, getProjectFromUserId } from '../../API/APITest'


class ProfilePage extends React.Component {
 constructor(props) {
    super(props)
    this.state = {
      projects: [],
      user:{},
    }
  //this._scrollToIndex=this._scrollToIndex.bind(this)
  }

  componentDidMount(){
    getUserFromId("1").then(data => {
      this.setState ({
        user:data
      })
    })
    getProjectFromUserId("1").then(data => {
      this.setState ({
        projects:data.projects
      })
    })
  }


  _displayDetailForProject=(project)=>{
    this.props.navigation.navigate('ProjectPage',{project :project})
      console.log("Display project with id " + project.id)
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
       user={this.state.user}
       friendsNb='43'
       projectNb={this.state.projects.length}
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
  console.log(this.flatListRef)
  this.flatListRef.scrollToIndex({animated: true, index:0});
}

  render() {
    return (
      <View
      style={styles.main_container}>
      <FlatList
        data={this.state.projects}
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

export default ProfilePage
