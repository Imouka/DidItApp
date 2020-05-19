import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'


class ButtonImageAndText extends React.Component {
  render() {
    const{text, imageSource, action}=this.props
    return (
      <View>
        <TouchableOpacity
        style={styles.main_container}
        onPress={() => action()}>
          <Image
            style={styles.button_image}
            source= {imageSource}
          />
          <Text
          style={styles.button_text}>
          {text}
          </Text>
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
    fontSize: 16,
    textAlign: 'left',
  //  fontWeight: 'bold',
  //  textDecorationLine:'underline'
  },
 button_image:{
    width: 35,
    height: 35,
    borderRadius:360,
    borderWidth:2,
    borderColor:'#000000'
  },
})

export default ButtonImageAndText
