
import React from 'react'
import {View, StyleSheet,Text,Image} from 'react-native'
import ProgressBarProgressionView from '../Components/ProgressBarProgressionView'
import ButtonSmallImage from '../Components/ButtonSmallImage'
import moment from 'moment'
import {policeStyles} from '../Styles/police_styles'


class UpdateItem extends React.Component {

  constructor(props) {
     super(props)
   }

_displayProgression(oldProgressionProjet,newProgressionProjet) {
      if ((oldProgressionProjet != null) && (newProgressionProjet!=null)) { {
          return (
          <View style={{marginTop:5}}>
            <View style={{alignSelf:'center'}}>
              <ProgressBarProgressionView
              oldProgressionProjet={Math.round(oldProgressionProjet * 100) + "%"}
              newProgressionProjet={Math.round(newProgressionProjet * 100) + "%"}/>
            </View>
            <Text style={policeStyles.update_automatic_message}>{Math.round(newProgressionProjet * 100) + "% Already accomplished"} </Text>
          </View>)
        }
    }
}

_displayMessage(message) {
   if (message!="" && message!=null) {
       return (
       <Text>
        {message}
        </Text>)
      }
    else {
      if (! this.props.UsernameIsDisplayed) {
        return(
          <Text
          style={policeStyles.standard_bold}>
          {"  Progress !  "}
          </Text>)
      }
    }
}

_displayUserName(first_name, last_name) {
   if (this.props.UsernameIsDisplayed) {
       return (
         <Text>
           <Text
           style={policeStyles.standard_bold}>
           {first_name}  {last_name}
           </Text>
           <Text>
           {" "}
           </Text>
        </Text>
      )
 }
}

_displayUserImage(action,update) {
   if (this.props.UsernameIsDisplayed) { {
       return (
         <View>
         <ButtonSmallImage
           imageSource= {require("../Images/profile_icon.png")}
           action={()=>action(update.user_id)}/>
         </View>)
     }
 }
}


  render() {
    const { update, user_first_name, user_last_name, action}=this.props
    return (
      <View
      style={styles.main_container}>
        {this._displayUserImage(action,update)}
        <View  style={{ flex:1, marginLeft:"2%"}}>
          {this._displayUserName(user_first_name,user_last_name)}
            <Text  style={policeStyles.update_message}>
              {this._displayMessage(update.message)}
            </Text>
          {this._displayProgression(update.old_value,update.new_value)}
          <View style={{marginTop:3}}>
            <Text
            style={policeStyles.update_date}>
             {moment(new Date(update.date)).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>
    </View>


    )
  }
}
export default UpdateItem

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems :'center',
    alignItems:'flex-start'
  },
})
