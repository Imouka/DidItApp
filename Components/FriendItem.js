import React from 'react'
import {View, StyleSheet, TouchableOpacity,Text, Image,Button, Alert} from 'react-native'
import UserIcon from '../Components/UserIcon'
import ConfirmDeleteButton from '../Components/ConfirmDeleteButton'
import AddFriendButton from '../Components/AddFriendButton'
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'

class FriendItem extends React.Component {

  _renderButton =(frienditem,handleFriendship) => {

    if (frienditem.status=="SENDED") {
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
    else if (frienditem.status=="RECEIVED") {
        return (
          <View style={{flexDirection: 'row'}}>
            <ConfirmDeleteButton
            text={"Confirm"}
            color={"#2ccce4"}
            friend={frienditem}
            action={handleFriendship}
            action_type={"confirm"}/>
            <ConfirmDeleteButton
            text={"Delete"}
            color={"#EEF0F1"}
            friend={frienditem}
            action={handleFriendship}
            action_type={"refuse"}/>
          </View>
        );
    }
    else if (frienditem.status=="ACCEPTED") {
      return (
        <View>
        <Menu onSelect={() => handleFriendship(frienditem, "unfriend")}>
            <MenuTrigger>
            <Image
              style={imageStyles.more_button_image}
              source= {require('../Images/more.png')}
            />
           </MenuTrigger>
            <MenuOptions>
              <MenuOption value={ String(frienditem.first_name)}
              text={'  Unfriend'} />
          </MenuOptions>
        </Menu>
        </View>
      );
    }
    else if (frienditem.status=="STRANGER_DANGER") {
      return (
          <View>
            <AddFriendButton
            text={"Add Friend"}
            backgroundcolor={'#2ccce4'}
            textcolor={'#000000'}
            friend={frienditem}
            action={handleFriendship}
            disabled={false}/>
          </View>
        );
    }
  };


  render() {
    const{imageSource,frienditem,handleFriendship, displayFriendProfilePage}=this.props
    return (
      <View style={styles.main_container}>
        <View style={{flex:4}}>
          <TouchableOpacity
          onPress={() => displayFriendProfilePage(frienditem)}
          style={styles.container_image_name}>
            <View style={styles.user_image_container}>
              <Image
                style={imageStyles.friendList_user_avatar}
                source= {imageSource}
              />
            </View>
            <View style={styles.user_name_container}>
              <Text
              style={policeStyles.standard_text}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {frienditem.first_name} {frienditem.last_name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex:3,flexDirection: 'row',  alignItems:'center',justifyContent:'flex-end' }}>
            {this._renderButton(frienditem,handleFriendship)}
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
  },
  user_image_container:{
    flex:1,
  },
  user_name_container:{
    flex:2.5,
  },
})

export default FriendItem
