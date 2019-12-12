
import React from 'react'
import {View,StyleSheet,Text, FlatList} from 'react-native'
import ProfileHeader from '../Components/ProfileHeader'
import ButtonImageAndText from '../Components/ButtonImageAndText'
import ProjectItem from '../Components/ProjectItem'
import { getUserFromId, getProjectFromUserId } from '../API/APITest'


class ProfilePage extends React.Component {
 constructor(props) {
    super(props)
    this.state = {
      projects: [],
      user:{}
    }
  }

  componentDidMount(){
    getUserFromId("2").then(data => {
      this.setState ({
        user:data
      })
    })
    getProjectFromUserId("2").then(data => {
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

_renderSeparator = () => {
return (
  <View
    style={{
      marginTop:'5%',
      height: 1,
      width: "86%",
      backgroundColor: "#CED0CE",
      marginLeft: "14%"
    }}
  />
);
};

_renderHeader = () => {
return (
<View>
  <View>
      <ProfileHeader
       imageSource={require('../Images/profile_icon.png')}
       user={this.state.user}
       friendsNb='43'
       projectNb='8'/>
  </View>
  <View
  style={styles.button_create_new_project}>
     <ButtonImageAndText
     text="Create a new project"
     imageSource= {require("../Images/plus.png")}
     displayCreateNewProjectPage={this._displayCreateNewProjectPage}/>
  </View>
</View>
)
};

  render() {
    return (
      <View
      style={styles.main_container}>
      <FlatList
        data={this.state.projects}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={this._renderSeparator}
        ListHeaderComponent={this._renderHeader}
        renderItem={({item}) =>
        <ProjectItem
            project={item}
            imageSource={require('../Images/project.png')}
            progressionProjet={'60%'}
            progressionTemps={'10%'}
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
    marginTop: 20,
    marginLeft:15 ,
    marginRight:15 ,
    flex:1,
  },
  button_create_new_project:{
    marginTop: 10,
  },
})

export default ProfilePage

/*
<View>
    <ProfileHeader
     imageSource={require('../Images/profile_icon.png')}
     user={this.state.user}
     friendsNb='43'
     projectNb='8'/>
</View>
<View
style={styles.button_create_new_project}>
   <ButtonImageAndText
   text="Create a new project"
   imageSource= {require("../Images/plus.png")}
   displayCreateNewProjectPage={this._displayCreateNewProjectPage}/>
</View>
<View
style={{flex:1}}>
<ProjectList
    projects={this.state.projects}
    imageSource={require('../Images/project.png')}
    progressionProjet={'60%'}
    progressionTemps={'10%'}
    displayDetailForProject={this._displayDetailForProject}
/>
</View>*/
