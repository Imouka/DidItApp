
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'


class UserIcon extends React.Component {
  render() {
    const{userName, imageSource}=this.props
    return (
      <View
      style={styles.main_container}>
        <TouchableOpacity
        onPress={() => console.log("Pressed user avatar")}>
          <Image
            style={styles.user_image}
            source= {imageSource}
          />
        </TouchableOpacity>
        <Text
        style={styles.user_name_text}
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
  user_name_text: {
    fontSize: 15,
    textAlign: 'left',
  },
  user_image:{
    width: 70,
    height: 70,
    borderRadius:360,
    borderColor: '#2ccce4',
    borderWidth:2,
  },
})

export default UserIcon
//style={{flex: 1, flexDirection: 'column'}}
