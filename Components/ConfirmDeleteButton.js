
import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Alert} from 'react-native'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'

class ConfirmDeleteButton extends React.Component {
  render() {
    const{text, color, friend, action, action_type}=this.props
    return (
      <View>
        <TouchableOpacity
                 style={[styles.button, {backgroundColor: color} ]}
                 onPress={() => action(friend, action_type)}>
                 <Text style ={policeStyles.standard_text}> {text} </Text>
         </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: "5%",
    borderColor:'#D9E3F0',
    borderWidth:1,
    borderRadius:5,
    marginRight:4,
  }
})

export default ConfirmDeleteButton
