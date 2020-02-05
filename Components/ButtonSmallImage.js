
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'


class ButtonSmallImage extends React.Component {
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
 button_image:{
   width: 25,
   height: 25,
   borderRadius:360,
   borderWidth:2,
   borderColor:'#55cfb3',
  },
})

export default ButtonSmallImage
