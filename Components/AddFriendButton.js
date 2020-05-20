

import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native'
import {policeStyles} from '../Styles/police_styles'

class AddFriendButton extends React.Component {
  render() {
    const{text, action, disabled,friend, backgroundcolor, textcolor}=this.props
    return (
      <View>
        <TouchableOpacity
                 style={[styles.button, {backgroundColor: backgroundcolor} ]}
                 onPress={() => action(friend,"send")}
                 disabled={disabled}>
                 <Text style={[policeStyles.standard_text_center,{color: textcolor}]}> {text} </Text>
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
  },
})

export default AddFriendButton
