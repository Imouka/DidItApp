import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity, ImageBackground} from 'react-native'


class IconTextAndNumber extends React.Component {


  _displayNewRequests(request_nb, number){
    if (request_nb!=0){
        return (
          <View style={{ alignSelf: 'center', paddingRight:35}} >
            <Text
            style={styles.nb_of_friends} >
            {number}
            </Text>
            <View
            style={styles.icon}>
            {this._displayNewRequestsNumber(request_nb)}
            </View>
          </View>
        )
      }
    else {
        return (
      <View style={{ alignSelf: 'center'}} >
        <Text
          style={styles.nb_of_friends} >
          {number}
        </Text>
      </View>
     )
    }
  }

  _displayNewRequestsNumber(request_nb){
    if (request_nb>99){
      return (
        <Text style={styles.badge} >
        {"+99"}
        </Text>
      )
    }
    else {
      return (
        <Text style={styles.badge} >
        {request_nb}
        </Text>
      )
    }
  }


  render() {
    const {text,number, action, request_nb}=this.props
    return (
        <TouchableOpacity
        onPress={() => action()}>
          {this._displayNewRequests(request_nb, number)}
          <Text
          style={styles.text_friends} >
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
  nb_of_friends: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text_friends:{
    fontSize: 15,
    textAlign: 'center',
  },
  icon: {
    backgroundColor:'#79D2A6',
    position: 'absolute',
    borderRadius: 360,
    right:0,
    top: 0,
    width: 30,
    height: 22,
  },
  badge:{
    fontWeight: 'bold',
    textAlign: 'center',
    },
})

export default IconTextAndNumber
