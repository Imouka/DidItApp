import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'

class ButtonImageAndText extends React.Component {
  render() {
    const{text, imageSource, action}=this.props
    return (
      <View>
        <TouchableOpacity
        style={styles.main_container}
        onPress={() => action()}>
          <Image
            style={imageStyles.new_project_button_image}
            source= {imageSource}
          />
          <View style={ styles.text_container}>
            <Text
            style={policeStyles.medium_text}>
            {text}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems :'center'
  },
  text_container: {
    marginLeft: "2%",
  },
})

export default ButtonImageAndText
