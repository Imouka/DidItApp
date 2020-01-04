import React from 'react'
import {View, StyleSheet, TouchableOpacity,Text, Image,Button} from 'react-native'
import UserIcon from '../Components/UserIcon'
import ConfirmDeleteButton from '../Components/ConfirmDeleteButton'
import MoreButton from '../Components/MoreButton'
import AddFriendButton from '../Components/AddFriendButton'

class FriendItem extends React.Component {

  _renderButton =(status) => {
    console.log(status)
    if (status=="SENDED") {
        return (
          <View>
            <AddFriendButton
            text={"Request send"}
            backgroundcolor={'#EEF0F1'}
            textcolor={'#A4A4A4'}
            action={console.log}
            disabled={true}/>
          </View>
        );
    }
    else if (status=="RECEIVED") {
        return (
          <View style={{flexDirection: 'row'}}>
            <ConfirmDeleteButton
            text={"Confirm"}
            color={"#2ccce4"}
            action={console.log}/>
            <ConfirmDeleteButton
            text={"Delete"}
            color={"#EEF0F1"}
            action={console.log}/>
          </View>
        );
    }
    else if (status=="ACCEPTED") {
      return (
        <View>
          <MoreButton
          action={console.log}/>
        </View>
      );
    }
      else {
        return (
          <View>
            <AddFriendButton
            text={"Add Friend"}
            backgroundcolor={'#2ccce4'}
            textcolor={'#000000'}
            action={console.log}
            disabled={false}/>
          </View>
        );
      }
  };


  render() {
    const{userfirstname,userlastname, imageSource,friendRequest}=this.props
    return (
      <View style={styles.main_container}>
        <View style={{flex:4}}>
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
              {userfirstname} {userlastname}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex:3,flexDirection: 'row',  alignItems:'center',justifyContent:'flex-end' }}>
            {this._renderButton(friendRequest.status)}
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
  },
  container_image_name:{
    flexDirection: 'row',
    alignItems:'center',
    //backgroundColor:'red'
  },
  user_name_text: {
    fontSize: 15,
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
    flex:2.5,
  },
})

export default FriendItem
