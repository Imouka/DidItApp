
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,} from 'react-native'
import Icon from 'react-native-elements'

class EditableUserIcon extends React.Component {

  _edit_project_icon(){
    console.log("Edit project icon")
  }


  render() {
    const{imageSource, iseditable}=this.props
    return (
      <View >
        <Image
          style={styles.project_image}
          source={imageSource}/>
        <TouchableOpacity
            onPress={ this._edit_project_icon}
            style={styles.icon}>
             <Image
              source={require("../Images/pencil.png")}
              style={styles.image}/>
          </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  project_image:{
   width:110,
   height: 110,
   borderRadius: 360,
   borderColor: 'skyblue',
   borderWidth:3,
   backgroundColor:'white'
  },
  icon: {
   backgroundColor:'white',
   position: 'absolute',
   borderRadius: 360,
   left:90,
   bottom: -1,
   width: 35,
   height: 35,
},
  image: {
   backgroundColor:'white',
   borderRadius: 360,
   width:35,
   height:35,
}
})

export default EditableUserIcon
