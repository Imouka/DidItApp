
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground} from 'react-native'
import Icon from 'react-native-elements'

class ProjectIcon extends React.Component {

  _edit_project_icon(){
    console.log("Edit project icon")
  }
  _displayeditbutton(iseditable){
    if (iseditable=="true"){
      return (
        <TouchableOpacity
            onPress={ this._edit_project_icon} style={styles.icon}>
             <Image
              source={require("../Images/pencil.png")}
              style={styles.image}/>
          </TouchableOpacity>

      )
    }
  }

  render() {
    const{imageSource, iseditable}=this.props
    return (
      <View >
        <Image
          style={styles.project_image}
          source={imageSource}
        />
        {this._displayeditbutton(iseditable)}
      </View>

    )
  }
}
const styles = StyleSheet.create({
  project_image:{
   width: 70,
   height: 70,
   borderRadius: 10,
   borderColor: 'skyblue',
   borderWidth:3,
   backgroundColor:'white'
  },

  icon: {
   backgroundColor:'white',
   position: 'absolute',
   borderRadius: 360,
   left: 50,
   bottom: -3,
   width: 25,
   height: 25,
},
image: {
 backgroundColor:'white',
 borderRadius: 360,
 width: 25,
 height: 25,
}
})

export default ProjectIcon
