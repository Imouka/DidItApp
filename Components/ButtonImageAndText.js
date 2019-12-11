
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'


class ButtonImageAndText extends React.Component {
  render() {
    const{text, imageSource, displayCreateNewProjectPage}=this.props
    return (
      <View>
        <TouchableOpacity
        style={styles.main_container}
        onPress={() => displayCreateNewProjectPage()}>
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
//TODO : REGLER PB LINE 16

//const {text,sourceImage}=this.props
//source={require('../Images/plus.png')}
//{uri: sourceImage }
/*<Text
style={styles.user_name_text}
numberOfLines={1}
ellipsizeMode={'tail'}>
{text}
</Text>*/
const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems :'center'
  },
  button_text: {
    marginLeft: 5,
    fontSize: 15,
    textAlign: 'left',
  },
 button_image:{
    width: 40,
    height: 40,
    borderRadius:360,
  },
})

export default ButtonImageAndText
