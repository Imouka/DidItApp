
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground} from 'react-native'
import Icon from 'react-native-elements'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'


class ProjectIcon extends React.Component {

  _displayeditbutton(iseditable, action){
    if (iseditable=="true"){
      return (
        <TouchableOpacity
            onPress={action}
            style={imageStyles.editing_pen_container}>
             <Image
              source={require("../Images/pencil.png")}
              style={imageStyles.editing_pen}/>
          </TouchableOpacity>
      )
    }
  }

  render() {
    const{imageSource, iseditable, action}=this.props
    return (
      <View >
        <Image
          style={imageStyles.project_icon}
          source={imageSource}
        />
        {this._displayeditbutton(iseditable, action)}
      </View>

    )
  }
}

export default ProjectIcon
