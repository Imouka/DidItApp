import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity, ImageBackground} from 'react-native'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'

class IconTextAndNumber extends React.Component {


  _displayNewRequests(request_nb, number, notification_icon){
    if ((request_nb!=0) && (notification_icon==true)){
        return (
          <View style={{ alignSelf: 'center', paddingRight:35}} >
            <Text
            style={policeStyles.text_Large_Number}>
            {number}
            </Text>
            <View
            style={imageStyles.new_friends_notif}>
            {this._displayNewRequestsNumber(request_nb)}
            </View>
          </View>
        )
      }
    else {
        return (
      <View style={{ alignSelf: 'center'}} >
        <Text
          style={policeStyles.text_Large_Number} >
          {number}
        </Text>
      </View>
     )
    }
  }

  _displayNewRequestsNumber(request_nb){
    if (request_nb>99){
      return (
        <Text style={policeStyles.new_friends_notif} >
        {"+99"}
        </Text>
      )
    }
    else {
      return (
        <Text style={policeStyles.new_friends_notif} >
        {request_nb}
        </Text>
      )
    }
  }


  render() {
    const {text,number, action, request_nb,notification_icon}=this.props
    return (
        <TouchableOpacity
        onPress={() => action()}>
          {this._displayNewRequests(request_nb, number, notification_icon)}
          <Text
          style={policeStyles.medium_text} >
          {text}
          </Text>
        </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
     backgroundColor:'red',
     width: "60%",
     alignSelf:'center'
  },
})

export default IconTextAndNumber
