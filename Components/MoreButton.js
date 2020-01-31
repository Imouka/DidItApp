import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image} from 'react-native'


class MoreButton extends React.Component {
  render() {
    const{action}=this.props
    return (
      <View>
      <TouchableOpacity
      onPress={() => action()}>
        <Image
          style={styles.button_image}
          source= {require('../Images/more.png')}
        />
      </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
 button_image:{
   width: 25,
   height: 25,
  },
})

export default MoreButton
