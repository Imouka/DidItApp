
import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native'

class ConfirmDeleteButton extends React.Component {
  render() {
    const{text, color, action}=this.props
    return (
      <View>
        <TouchableOpacity
                 style={[styles.button, {backgroundColor: color} ]}
                 onPress={() => action()}>
                 <Text> {text} </Text>
         </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 5,
    borderColor:'#D9E3F0',
    borderWidth:1,
    borderRadius:5,
    marginRight:4,
    width:68
  }
})

export default ConfirmDeleteButton
