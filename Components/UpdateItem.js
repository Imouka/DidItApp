
import React from 'react'
import {View, StyleSheet,Text,Image} from 'react-native'
import ProgressBarProgressionView from '../Components/ProgressBarProgressionView'
import ButtonSmallImage from '../Components/ButtonSmallImage'
import moment from 'moment'


class UpdateItem extends React.Component {

  constructor(props) {
     super(props)
   }

_displayProgression(oldProgressionProjet,newProgressionProjet) {
      if ((oldProgressionProjet != null) && (newProgressionProjet!=null) && (oldProgressionProjet !=newProgressionProjet) ) { {
          return (
          <View style={{marginTop:5}}>
            <View style={{alignSelf:'center'}}>
              <ProgressBarProgressionView
              oldProgressionProjet={Math.round(oldProgressionProjet * 100) + "%"}
              newProgressionProjet={Math.round(newProgressionProjet * 100) + "%"}/>
            </View>
            <Text style={styles.small_text}>{Math.round(newProgressionProjet * 100) + "% Already accomplished"} </Text>
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
          style={styles.USername_text}>
          {"  Progress !  "}
          </Text>)
      }
    }
}

_displayUserName(first_name, last_name) {
   if (this.props.UsernameIsDisplayed) {
     console.log("UpdateItem -> _displayUserName -> first_name "+ first_name)
       return (
         <Text>
           <Text
           style={styles.USername_text}>
           {first_name}  {last_name}
           </Text>
           <Text>
           {" "}
           </Text>
        </Text>
      )
 }
}

_displayUserImage() {
   if (this.props.UsernameIsDisplayed) { {
       return (
         <View  style={{flex:1}}>
         <ButtonSmallImage
           imageSource= {require("../Images/profile_icon.png")}
           action={console.log}/>
         </View>)
     }
 }
}


  render() {
    const { update, user_first_name, user_last_name}=this.props
    return (
      <View
      style={styles.main_container}>
        {this._displayUserImage()}
        <View style={{flex:10}}  >
          {this._displayUserName(user_first_name,user_last_name)}


            <Text  style={styles.message}>
              {this._displayMessage(update.message)}
            </Text>


          {this._displayProgression(update.old_value,update.new_value)}
          <View style={{marginTop:3}}>
            <Text
            style={styles.date}>
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
 message:{
    fontSize: 15,
    textAlign:'center',
  },
  date:{
    fontSize: 12,
    textAlign: 'left',
    fontWeight:'bold',
    color:'#777878'
  },
  small_text: {
    fontStyle: 'italic',
    color: '#666666',
    textAlign:'center',
    paddingTop:1,
  },
  USername_text: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight:'bold',
  },
})
