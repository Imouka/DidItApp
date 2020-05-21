
import { StyleSheet} from 'react-native'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from '../Utils/react-native-responsive-screen'

const a_h = Math.min(hp('2.5%'),26) // fontsize target : 15
const b_h = Math.min(hp('2%'),22) // fontsize target : 12
const c_h = Math.min(hp('2.3%'),23) // fontsize target : 13
const d_h = Math.min(hp('2.4%'),24) // fontsize target : 14
const e_h = Math.min(hp('3%'),27) // fontsize target : 17
const f_h= Math.min(hp('3.2%'),29) // fontsize target : 19
const g_h =Math.min(hp('3.3%'),30) // fontsize target : 20
const h_h =Math.min(hp('3.6%'),32) // fontsize target : 22

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
    fontSize: a_h,
  },
  standard_text_center:{
    fontSize: a_h,
     textAlign:'center',
   },
   update_date:{
     fontSize: b_h,
     textAlign: 'left',
     fontWeight:'bold',
     color:'#777878'
   },
   standard_grey:{
     fontSize: a_h,
     color:'#777878'
   },
   update_automatic_message: {
     fontStyle: 'italic',
     color: '#666666',
     textAlign:'center',
     paddingTop:1,
     fontSize: c_h,
   },
   standard_bold: {
     fontSize: a_h,
     textAlign: 'left',
     fontWeight:'bold',
   },
   small_bold: {
     fontSize: c_h,
     textAlign: 'left',
     fontWeight:'bold',
   },
   project_title_text: {
     fontWeight: 'bold',
     fontSize: g_h,
   },
   small_project_title_text: {
     fontWeight: 'bold',
     fontSize: e_h,
   },
   project_title_text_ITALIC:{
     fontSize: a_h,
     textAlign:"center",
     fontStyle:"italic"
   },
   project_details_small_text:{
     fontSize: a_h,
     fontStyle: 'italic',
     color: '#666666',
     marginLeft: "5%",
   },
   standard_text:{
     fontSize: a_h,
     color:'black',
   },
   standard_text_right: {
     fontSize: a_h,
     textAlign: 'right',
   },
   text_Large_Number:{
     fontSize: f_h,
     fontWeight: 'bold',
     textAlign: 'center',
   },
   new_friends_notif: {
     fontSize:a_h,
     fontWeight: 'bold',
     textAlign: 'center',
   },
   small:{
     fontSize:c_h
   },
   medium_text_center:{
      fontSize: e_h,
      textAlign:'center',
    },
    medium_text:{
       fontSize: e_h,
       textAlign:'left',
     },
    TopBarText:{
       fontSize: Math.min(hp('3.2%'),25),
     },
     description_text:{
       fontSize: d_h,
       textAlign: 'left',
       fontStyle: 'italic',
     },
     description_text_disabled:{
       fontSize: d_h,
       textAlign: 'left',
       fontStyle: 'italic',
       color:"#9B9B9B"
     },
     label_text_input:{
       fontSize:a_h,
       fontWeight: 'bold',
       color:"#4A4A4A"
     },
     label_text_input_disabled:{
       fontSize:a_h,
       fontWeight: 'bold',
       color:"#9B9B9B"
     },
     standard_italic_underlined:{
       fontSize:a_h,
       fontStyle:"italic",
       textDecorationLine:"underline"
     },
     standard_text_disabled: {
       fontSize: a_h,
       textAlign: 'left',
       color:"#9B9B9B"
     },
     standard_text_disabled_center: {
       fontSize: a_h,
       textAlign: 'center',
       color:"#9B9B9B"
     },
})


export {policeStyles}
