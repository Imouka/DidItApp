
import React from 'react'
import {View,StyleSheet} from 'react-native'
import UserIcon from '../Components/UserIcon'
import IconTextAndNumber from '../Components/IconTextAndNumber'
import Description from '../Components/Description'


class ProfileHeader extends React.Component {


  render() {
    return (
      <View>
        <View
        style={styles.main_container}>
          <View
            style={styles.user_image_container}>
            <UserIcon/>
          </View>
          <View
            style={styles.projects_nb_container}>
            <IconTextAndNumber
            text="Projects"
            number="8"/>
          </View>
          <View
            style={styles.friends_nb_container}>
            <IconTextAndNumber
            text="Friends"
            number="43"/>
          </View>
        </View>
        <View
          style={styles.description}>
          <Description/>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
  },
  user_image_container:{
    flex:1,
  },
  projects_nb_container:{
    flex:1,
  },
  friends_nb_container:{
    flex:1,
  },
  description:{
    marginRight: 10,
    marginTop:20
  },
})

export default ProfileHeader
