
import { StyleSheet} from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from '../Utils/react-native-responsive-screen'

const a = '11.5%' //target value : 70
const b = '5.4%' //target value :30
const c = '19%' //target value :110
const d = '6.1%' //target value :35
const e = '9%' //target value :55
const f = '3.4%' //target value :20
const g = '4%' //target value :25
const h = '6.7%' //target value :40
const i = '48%' //target value :250
const j ='9.5%' //target value :60
const k = '2%' //target value :10
const l = '2.2%' //target value :12
const m = '13%' //target value :80
const n = '33%' //target value :200
const o = '17%' //target value :100

const imageStyles = StyleSheet.create({
  user_avatar:{
    width:hp(a),
    height:hp(a),
    borderRadius:360,
    borderColor: '#2ccce4',
    borderWidth:2,
  },
  friendList_user_avatar:{
    width: hp(e),
    height: hp(e),
    borderRadius:360,
    borderColor: '#2ccce4',
    borderWidth:2,
  },
  big_user_avatar:{
    width:hp(c),
    height: hp(c),
    borderRadius: 360,
    borderColor: 'skyblue',
    borderWidth:3,
    backgroundColor:'white'
  },
  small_user_avatar:{
    width:hp(b),
    height: hp(b),
    borderRadius:360,
    borderWidth:2,
    borderColor:'#55cfb3',
  },
  big_editing_pen: {
    backgroundColor:'white',
    borderRadius: 360,
    width:hp(d),
    height:hp(d),
  },
  big_editing_pen_container: {
    backgroundColor:'white',
    position: 'absolute',
    borderRadius: 360,
    left:hp(c)*0.7,
    bottom:-hp(c)*0.05,
  },
  text_input_image:{
    borderRadius:360,
    borderWidth:2,
    borderColor:'#000000',
    width: hp(b),
    height: hp(b),
  },
  support_image:{
    width: hp(b),
    height: hp(b),
    borderRadius:360,
  },
  support_button:{
    width:hp(h),
    height: hp(h),
    borderRadius:360,
  },
  research_icon:{
    width: hp(f),
    height: hp(f),
    borderRadius:360,
  },
  award_image:{
    width:hp(i),
    height:hp(a),
},
award_image_little:{
  width:hp(j),
  height:hp(j),
},
editing_pen: {
 backgroundColor:'white',
 borderRadius: 360,
 width: hp(g),
 height:hp(g),
},
editing_pen_container: {
 backgroundColor:'white',
 position: 'absolute',
 borderRadius: 360,
 left: hp(a)*0.7,
 bottom: -hp(a)*0.05,
},
project_icon:{
  width:hp(a),
  height:hp(a),
  borderRadius: 10,
  borderColor: 'skyblue',
  borderWidth:3,
  backgroundColor:'white'
},
project_icon_SMALL:{
  width:hp(h),
  height: hp(h),
  borderRadius: 10,
  borderColor: 'skyblue',
  borderWidth:2,
  backgroundColor:'white'
},
progress_bar_image:{
  width: hp(f),
  height:hp(f),
},
progress_bar_border: {
  flex:1,
  height:hp(k),
  backgroundColor: 'white',
  borderColor: '#605f62',
  borderWidth: 1,
  borderRadius: 5,
},
progress_bar_border_UPDATE: {
  height:hp(l),
  width: hp(n),
  backgroundColor: 'white',
  borderColor: '#605f62',
  borderWidth: 1,
  borderRadius: 5,
},
progress_bar_border_SMALL: {
  height: hp(k),
  width: hp(a),
  backgroundColor: 'white',
  borderColor: '#605f62',
  borderWidth: 1,
  borderRadius: 5,
  justifyContent:'center',
},
top_scrollable_bar_titleView:{
 width:hp(m),
 alignSelf:"center"
},
panel_button : {
    width   :Math.min(hp(f),30),
    height  :Math.min(hp(f),30),
},
new_friends_notif: {
  backgroundColor:'#79D2A6',
  position: 'absolute',
  borderRadius: 360,
  right:- (hp(b)/3),
  width: hp(b),
  height: hp(f),
},
more_button_image:{
  width: hp(g),
  height: hp(g),
},
new_project_button_image:{
  width: hp(d),
  height: hp(d),
  borderRadius:360,
  borderWidth:2,
  borderColor:'#000000'
},
add_update_button:{
  width: hp(h),
  height:hp(h),
},
loading_container: {
  position: 'absolute',
  left: 0,
  right: 0,
  top:hp(o),
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center'
},
home_page_image:{
  width:hp("70%"),
  height:hp("70%"),
}



})


export {imageStyles}
