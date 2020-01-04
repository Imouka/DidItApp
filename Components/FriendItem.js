import React from 'react'
import {View, StyleSheet, TouchableOpacity,Text, Image,Button} from 'react-native'
import UserIcon from '../Components/UserIcon'


class FriendItem extends React.Component {
  render() {
    const{userfirstname,userlastname, imageSource}=this.props
    return (
      <View style={styles.main_container}>
        <View style={{flex:3}}>
          <TouchableOpacity
          onPress={() => console.log("Pressed user avatar")}
          style={styles.container_image_name}>
            <View style={styles.user_image_container}>
              <Image
                style={styles.user_image}
                source= {imageSource}
              />
            </View>
            <View style={styles.user_name_container}>
              <Text
              style={styles.user_name_text}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {userfirstname} {"aaaaaaaa"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
                   style={styles.button}
                   onPress={this.onPress}>
                   <Text> Unfriend </Text>
           </TouchableOpacity>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems:'center'
  },
  container_image_name:{
    flexDirection: 'row',
    alignItems:'center',
  },
  user_name_text: {
    fontSize: 16,
  },
  user_image:{
    width: 55,
    height: 55,
    borderRadius:360,
    borderColor: '#2ccce4',
    borderWidth:2,
  },
  user_image_container:{
    flex:1,
  },
  user_name_container:{
    flex: 3,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderColor:'#D9E3F0',
    borderWidth:1,
    borderRadius:5,
    //marginRight:'1%',
    marginLeft:'3%',
    width:100
  }
})

export default FriendItem
