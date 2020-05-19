
import { StyleSheet} from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from '../Utils/react-native-responsive-screen'

const seventy = '11.5%' //target value : 70

const imageStyles = StyleSheet.create({
  user_avatar:{
    width:hp(seventy),
    height:hp(seventy),
    borderRadius:360,
    borderColor: '#2ccce4',
    borderWidth:2,
  },
  friendList_user_avatar:{
    width: 55,
    height: 55,
    borderRadius:360,
    borderColor: '#2ccce4',
    borderWidth:2,
  },
  big_user_avatar:{
    width:110,
    height: 110,
    borderRadius: 360,
    borderColor: 'skyblue',
    borderWidth:3,
    backgroundColor:'white'
  },
  small_user_avatar:{
    width:30,
    height: 30,
    borderRadius:360,
    borderWidth:2,
    borderColor:'#55cfb3',
  },
  big_editing_pen: {
    backgroundColor:'white',
    borderRadius: 360,
    width:35,
    height:35,
  },
  big_editing_pen_container: {
    backgroundColor:'white',
    position: 'absolute',
    borderRadius: 360,
    left:110*0.7,
    bottom: -3,
  },
  text_input_image:{
    borderRadius:360,
    borderWidth:2,
    borderColor:'#000000',
    width: 30,
    height: 30,
  },
  support_image:{
    width: 30,
    height: 30,
    borderRadius:360,
  },
  support_button:{
    width:40,
    height: 40,
    borderRadius:360,
  },
  research_icon:{
    width: 20,
    height: 20,
    borderRadius:360,
  },
  award_image:{
    width:250,
    height:hp(seventy),
},
award_image_little:{
  width:60,
  height:60,
},
editing_pen: {
 backgroundColor:'white',
 borderRadius: 360,
 width: 25,
 height:25,
},
editing_pen_container: {
 backgroundColor:'white',
 position: 'absolute',
 borderRadius: 360,
 left: hp(seventy)*0.7,
 bottom: -3,
},
project_icon:{
  width:hp(seventy),
  height:hp(seventy),
  borderRadius: 10,
  borderColor: 'skyblue',
  borderWidth:3,
  backgroundColor:'white'
},
project_icon_SMALL:{
  width:40,
  height: 40,
  borderRadius: 10,
  borderColor: 'skyblue',
  borderWidth:2,
  backgroundColor:'white'
},
progress_bar_image:{
  width: 20,
  height:20,
},
progress_bar_border: {
  flex:1,
  height:10,
  backgroundColor: 'white',
  borderColor: '#605f62',
  borderWidth: 1,
  borderRadius: 5,
},
progress_bar_border_UPDATE: {
  height:12,
  width: 200,
  backgroundColor: 'white',
  borderColor: '#605f62',
  borderWidth: 1,
  borderRadius: 5,
},
progress_bar_border_SMALL: {
  height: 10,
  width: hp(seventy),
  backgroundColor: 'white',
  borderColor: '#605f62',
  borderWidth: 1,
  borderRadius: 5,
  justifyContent:'center',
},
top_scrollable_bar_titleView:{
 width:80,
 alignSelf:"center"
},
panel_button : {
    width   :20,
    height  : 20
},
new_friends_notif: {
  backgroundColor:'#79D2A6',
  position: 'absolute',
  borderRadius: 360,
  right:0,
  top: 0,
  width: 30,
  height: 22,
},
more_button_image:{
  width: 25,
  height: 25,
}


})


export {imageStyles}
