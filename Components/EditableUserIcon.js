
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,} from 'react-native'
import Icon from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'


class EditableUserIcon extends React.Component {

  render() {
    const{imageSource, action}=this.props
    return (
      <View >
        <Image
          style={imageStyles.big_user_avatar}
          source={imageSource}/>
        <TouchableOpacity
            onPress={ action}
            style={imageStyles.big_editing_pen_container}>
             <Image
              source={require("../Images/pencil.png")}
              style={imageStyles.big_editing_pen}/>
          </TouchableOpacity>
      </View>

    )
  }
}


export default EditableUserIcon
