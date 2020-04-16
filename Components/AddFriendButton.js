

import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native'

class AddFriendButton extends React.Component {
  render() {
    const{text, color, action, disabled,friend, backgroundcolor, textcolor}=this.props
    return (
      <View>
        <TouchableOpacity
                 style={[styles.button, {backgroundColor: backgroundcolor} ]}
                 onPress={() => action(friend,"send")}
                 disabled={disabled}>
                 <Text style={{color: textcolor}}> {text} </Text>
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
  //  width:140
  },
})

export default AddFriendButton
