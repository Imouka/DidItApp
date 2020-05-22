
import React from 'react'
import {View,StyleSheet} from 'react-native'
import UserIcon from '../../Components/UserIcon'
import IconTextAndNumber from '../../Components/IconTextAndNumber'
import Description from '../../Components/Description'


class ProfileHeader extends React.Component {


  render() {
    const{user,scrollToIndex, displayFriendsList, notification_icon}=this.props
    return (
      <View>
        <View
        style={styles.main_container}>
          <View
            style={styles.user_image_container}>
            <UserIcon
            userFirstName={user.first_name}
            userLastName={user.last_name}
            imageSource={{uri:user.icon}}/>
          </View>
          <View
            style={styles.nb_container}>
            <IconTextAndNumber
            text="Projects"
            number={user.nb_projects}
            action={scrollToIndex}
            notification_icon={notification_icon}
            request_nb={"0"}/>
          </View>
          <View
            style={styles.nb_container}>
            <IconTextAndNumber
            text="Friends"
            number={user.nb_friends}
            notification_icon={notification_icon}
            request_nb={user.nb_requests}
            action={()=>displayFriendsList(user.id)}/>
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
  nb_container:{
    flex:1,
  },
  description:{
    marginTop:"3%"
  },
})

export default ProfileHeader
