
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,} from 'react-native'

class NotificationItem extends React.Component {

_display_project_notification(notification, message){
  return(
    <TouchableOpacity
      style={styles.main_container}
      onPress={console.log}>
      <Image
        style={styles.user_image}
        source= {require("../Images/profile_icon.png")}/>
      <View style={styles.text_container}>
        <Text >
          <Text
          style={styles.bold_text}>
          {notification.user}
          </Text>
          <Text>
            {message}
          </Text>
          <Text
          style={styles.bold_text}>
          {notification.project}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  )
}


_display_notification=(notification)=>{
   if (notification.type=="support") {
     let message=" supported your project "
     return(this._display_project_notification(notification, message))
   }
   if (notification.type=="comment"){
     let message=" posted a comment in your project "
     return(this._display_project_notification(notification, message))
   }
   if (notification.type=="friendrequest"){
     let message=" send you a friend request "
     return(this._display_project_notification(notification, message))
   }
   if (notification.type=="newfrienship"){
     let message=" accepted your friend request "
     return(this._display_project_notification(notification, message))
   }
   else{
     console.log("NotificationItem -> _display_comment_notification -> type not recognized")
   }
 }

  render() {
   const {notification}=this.props
    return (
      <View>
        {this._display_notification(notification)}
      </View>

    )
  }
}
//style={[ StyleSheet.absoluteFill, { backgroundColor: 'powderblue' , width: progression_projet} ]}>
// marginLeft:progression_temps

const styles = StyleSheet.create({
  main_container:{
    flexDirection: 'row',
    alignItems:'center',
    //backgroundColor:'red',
  },
  bold_text:{
    fontWeight:'bold',
    fontSize: 15,
  },
  user_image:{
     width: 40,
     height: 40,
     borderRadius:360,
     borderWidth:2,
     borderColor:'skyblue',
   },
   text_container:{
     marginLeft:'2%',
    // backgroundColor:'blue',
     width: 0,
     flexGrow: 1,
   }
});

export default NotificationItem
