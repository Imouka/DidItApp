
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import {imageStyles} from '../Styles/Image_styles'

class ButtonSmallImage extends React.Component {
  render() {
    const{text, imageSource, action}=this.props
    return (
      <View>
        <TouchableOpacity
        style={styles.main_container}
        onPress={() => action()}>
          <Image
            style={imageStyles.small_user_avatar}
            source= {imageSource}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems :'center',
  },
})

export default ButtonSmallImage
