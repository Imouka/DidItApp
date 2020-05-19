
import { StyleSheet} from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from '../Utils/react-native-responsive-screen'

const standard_font_size = '2.5%' // fontsize target : 15
const small_font_size = '2%' // fontsize target : 12

const policeStyles = StyleSheet.create({
  user_name_for_Icon: {
    fontSize: hp(standard_font_size),
  },
  update_message:{
     fontSize: hp(standard_font_size),
     textAlign:'center',
   },
   update_date:{
     fontSize: 12,
     textAlign: 'left',
     fontWeight:'bold',
     color:'#777878'
   },
   update_automatic_message: {
     fontStyle: 'italic',
     color: '#666666',
     textAlign:'center',
     paddingTop:1,
     fontSize: hp(standard_font_size),
   },
   standard_bold: {
     fontSize: hp(standard_font_size),
     textAlign: 'left',
     fontWeight:'bold',
   },
   small_bold: {
     fontSize: 13,
     textAlign: 'left',
     fontWeight:'bold',
   },
   project_title_text: {
     fontWeight: 'bold',
     fontSize: 20,
   },
   project_title_text_ITALIC:{
     textAlign:"center",
     fontStyle:"italic"
   },
   project_details_small_text:{
     fontSize: hp(standard_font_size),
     fontStyle: 'italic',
     color: '#666666',
     marginLeft: "5%",
   },
   standard_text:{
     fontSize:hp(standard_font_size),
   },
   standard_text_right: {
     fontSize: hp(standard_font_size),
     textAlign: 'right',
   },
   text_Large_Number:{
     fontSize: 22,
     fontWeight: 'bold',
     textAlign: 'center',
   },
   new_friends_notif: {
     fontSize:hp(standard_font_size),
     fontWeight: 'bold',
     textAlign: 'center',
   },
   small:{
     fontSize:13
   },
   medium_text:{
      fontSize: 17,
      textAlign:'center',
    },
    TopBarText:{
       fontSize: 19,
     },
     description_text:{
       fontSize: 14,
       textAlign: 'left',
       fontStyle: 'italic',
     }
})


export {policeStyles}
