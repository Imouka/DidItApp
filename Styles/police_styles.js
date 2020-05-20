
import { StyleSheet} from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from '../Utils/react-native-responsive-screen'

const standard_font_size = '2.5%' // fontsize target : 15
const small_font_size = '2%' // fontsize target : 12
const thirteen = '2.3%' // fontsize target : 13
const fourteen = '2.4%' // fontsize target : 14
const seventeen = '3%' // fontsize target : 17
const nineteen='3.2%' // fontsize target : 19
const twenty ='3.3%' // fontsize target : 20
const twentyTwo ='3.6%' // fontsize target : 20

const a_w = '4%' // fontsize target : 15
const b_w = '3.1%' // fontsize target : 12
const c_w = '2.3%' // fontsize target : 13
const d_w = '2.4%' // fontsize target : 14
const e_w = '3%' // fontsize target : 17
const f_w ='3.2%' // fontsize target : 19
const g_w ='3.3%' // fontsize target : 20
const h_w ='3.6%' // fontsize target : 20

const policeStyles = StyleSheet.create({
  user_name_for_Icon: {
    fontSize: hp(standard_font_size),
  },
  standard_text_center:{
    fontSize: hp(standard_font_size),
     textAlign:'center',
   },
   update_date:{
     fontSize: hp(small_font_size),
     textAlign: 'left',
     fontWeight:'bold',
     color:'#777878'
   },
   standard_grey:{
     fontSize: hp(standard_font_size),
     color:'#777878'
   },
   update_automatic_message: {
     fontStyle: 'italic',
     color: '#666666',
     textAlign:'center',
     paddingTop:1,
     fontSize: hp(thirteen),
   },
   standard_bold: {
     fontSize: hp(standard_font_size),
     textAlign: 'left',
     fontWeight:'bold',
   },
   small_bold: {
     fontSize: hp(thirteen),
     textAlign: 'left',
     fontWeight:'bold',
   },
   project_title_text: {
     fontWeight: 'bold',
     fontSize: hp(twenty),
   },
   small_project_title_text: {
     fontWeight: 'bold',
     fontSize: hp(seventeen),
   },
   project_title_text_ITALIC:{
     fontSize: hp(standard_font_size),
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
     fontSize: hp(standard_font_size),
     color:'black',
   },
   standard_text_right: {
     fontSize: hp(standard_font_size),
     textAlign: 'right',
   },
   text_Large_Number:{
     fontSize: hp(nineteen),
     fontWeight: 'bold',
     textAlign: 'center',
   },
   new_friends_notif: {
     fontSize:hp(standard_font_size),
     fontWeight: 'bold',
     textAlign: 'center',
   },
   small:{
     fontSize:hp(thirteen)
   },
   medium_text_center:{
      fontSize: hp(seventeen),
      textAlign:'center',
    },
    medium_text:{
       fontSize: hp(seventeen),
       textAlign:'left',
     },
    TopBarText:{
       fontSize: 19,
     },
     description_text:{
       fontSize: hp(fourteen),
       textAlign: 'left',
       fontStyle: 'italic',
     },
     description_text_disabled:{
       fontSize: hp(fourteen),
       textAlign: 'left',
       fontStyle: 'italic',
       color:"#9B9B9B"
     },
     label_text_input:{
       fontSize:hp(standard_font_size),
       fontWeight: 'bold',
       color:"#4A4A4A"
     },
     label_text_input_disabled:{
       fontSize:hp(standard_font_size),
       fontWeight: 'bold',
       color:"#9B9B9B"
     },
     standard_italic_underlined:{
       fontSize:hp(standard_font_size),
       fontStyle:"italic",
       textDecorationLine:"underline"
     },
     standard_text_disabled: {
       fontSize: hp(standard_font_size),
       textAlign: 'left',
       color:"#9B9B9B"
     },
})


export {policeStyles}
