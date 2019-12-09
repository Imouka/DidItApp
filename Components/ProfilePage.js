
import React from 'react'
import {View,StyleSheet} from 'react-native'
import ProfileHeader from '../Components/ProfileHeader'
import ButtonImageAndText from '../Components/ButtonImageAndText'
import ProjectItem from '../Components/ProjectItem'
import ProjectList from '../Components/ProjectList'

class ProfilePage extends React.Component {

  _displayDetailForProject=()=>{
    this.props.navigation.navigate('ProjectPage')
}

  render() {
    return (
      <View
      style={styles.main_container}>
        <View>
            <ProfileHeader
             imageSource={require('../Images/profile_icon.png')}
             userName='userName'
             description='Pendant deux ans, Cyril Dion a sillonné 18 pays, près de 200 villes pour accompagner le succès de son documentaire Demain, co-réalisé avec Mélanie Laurent. Pendant ce temps, la litanie des mauvaises nouvelles sallongeait : accélération du réchauffement planétaire, disparition de 80% des insectes en Europe et de 50% des populations de vertébrés ces 40 dernières années, explosion des inégalités, des migrations, des déchets... Comment faire face à une telle conjonction de catastrophes alors que de nombreux scientifiques parlent désormais dune poignée dannées pour réagir?'/>
        </View>
        <View
        style={styles.button_create_new_project}>
           <ButtonImageAndText
           text="Create a new project"
           imageSource= {require("../Images/plus.png")}/>
        </View>
        <View
        style={{marginTop:10}}>
           <ProjectItem
           imageSource={require('../Images/project.png')}
           projectTitle='Project Title'
           description='Pendant deux ans, Cyril Dion a sillonné 18 pays, près de 200 villes pour accompagner le succès de son documentaire Demain, co-réalisé avec Mélanie Laurent. Pendant ce temps, la litanie des mauvaises nouvelles sallongeait : accélération du réchauffement planétaire, disparition de 80% des insectes en Europe et de 50% des populations de vertébrés ces 40 dernières années, explosion des inégalités, des migrations, des déchets... Comment faire face à une telle conjonction de catastrophes alors que de nombreux scientifiques parlent désormais dune poignée dannées pour réagir?'
           progressionProjet='20%'
           progressionTemps='50%'
           displayDetailForProject={this._displayDetailForProject}
           />
        </View>
        <View
        style={{marginTop:10}}>
           <ProjectList/>
        </View>
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
  },
  button_create_new_project:{
    marginTop: 10,
  }
})

export default ProfilePage
