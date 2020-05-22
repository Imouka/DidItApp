
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

  display_overlay_image(is_over) {
    if (is_over===true){
      return(
        <View style={styles.overlay}>
          <Image
          style={imageStyles.award_image_little}
          source={require('../Images/award.png')}/>
       </View>
      )
    }
   }

   opacify_item(is_over) {
     if (is_over===true){
       return(0.3)}
      else {return(1)}
     }

  render() {
    const{imageSource, iseditable, action, must_opacify}=this.props
    return (
      <View>
        <View style={{opacity:this.opacify_item(must_opacify)}}>
          <Image
            style={imageStyles.project_icon}
            source={imageSource}
          />
          {this._displayeditbutton(iseditable, action)}
        </View>
        {this.display_overlay_image(must_opacify)}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  overlay:{
    position: 'absolute',
    top:0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems:'center',
    justifyContent:'center',
  },
})

export default ProjectIcon
