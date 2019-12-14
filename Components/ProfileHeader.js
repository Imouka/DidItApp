
import React from 'react'
import {View,StyleSheet} from 'react-native'
import UserIcon from '../Components/UserIcon'
import IconTextAndNumber from '../Components/IconTextAndNumber'
import Description from '../Components/Description'


class ProfileHeader extends React.Component {


  render() {
    const{user, imageSource, friendsNb, projectNb, scrollToIndex}=this.props
    return (
      <View>
        <View
        style={styles.main_container}>
          <View
            style={styles.user_image_container}>
            <UserIcon
            userName={user.first_name}
            imageSource={imageSource}/>
          </View>
          <View
            style={styles.projects_nb_container}>
            <IconTextAndNumber
            text="Projects"
            number={projectNb}
            action={scrollToIndex}/>
          </View>
          <View
            style={styles.friends_nb_container}>
            <IconTextAndNumber
            text="Friends"
            number={friendsNb}
            action={() => console.log("pressed friends")}/>
          </View>
        </View>
        <View
          style={styles.description}>
          <Description
          description={user.description}
          lineNb={4}/>
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
    marginTop:20
  },
})

export default ProfileHeader
