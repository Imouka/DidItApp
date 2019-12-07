
import React from 'react'
import {View,StyleSheet} from 'react-native'
import ProfileHeader from '../Components/ProfileHeader'
import ButtonImageAndText from '../Components/ButtonImageAndText'
import ProjectItem from '../Components/ProjectItem'

class ProfilePage extends React.Component {
  render() {
    return (
      <View
      style={styles.main_container}>
        <View>
            <ProfileHeader/>
        </View>
        <View
        style={styles.button_create_new_project}>
           <ButtonImageAndText
           text="Create a new project"
           imageSource='plus'/>
        </View>
        <View
        style={{marginTop:10}}>
           <ProjectItem/>
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
  },
  button_create_new_project:{
    marginTop: 10,
  }
})

export default ProfilePage
