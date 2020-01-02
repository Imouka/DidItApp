
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'


class ButtonSmallImageAndText extends React.Component {
  render() {
    const{text, imageSource, action}=this.props
    return (
      <View>
        <TouchableOpacity
        style={styles.main_container}
        onPress={() => action()}>
        <Text
        style={styles.button_text}>
        {text}
        </Text>
          <Image
            style={styles.button_image}
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
    alignItems :'center'
  },
  button_text: {
    marginLeft: 5,
    fontSize: 14,
    textAlign: 'left',
  },
 button_image:{
    width: 20,
    height: 20,
    borderRadius:360,
  },
})

export default ButtonSmallImageAndText
