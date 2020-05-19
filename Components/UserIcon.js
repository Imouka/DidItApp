import React from 'react'
import { StyleSheet, View, Image, Text} from 'react-native'
import {policeStyles} from '../Styles/police_styles'
import {imageStyles} from '../Styles/Image_styles'

class UserIcon extends React.Component {
  render() {
    const{userName, imageSource}=this.props
    return (
      <View
      style={styles.main_container}>
        <Image
        style={imageStyles.user_avatar}
        source= {imageSource}/>
        <Text
        style={policeStyles.user_name_for_Icon}
        numberOfLines={1}
        ellipsizeMode={'tail'}>
        {userName}
        </Text>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
  },
})

export default UserIcon
