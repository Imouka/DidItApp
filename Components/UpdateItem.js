
import React from 'react'
import {View, StyleSheet,Text,Image} from 'react-native'
import ProgressBarProgressionView from '../Components/ProgressBarProgressionView'
import ButtonSmallImage from '../Components/ButtonSmallImage'

class UpdateItem extends React.Component {

  constructor(props) {
     super(props)
   }

   _displayProgression(oldProgressionProjet,newProgressionProjet) {
      if (this.props.didProgress) { {
          return (
          <View style={{marginTop:5}}>
            <View style={{alignSelf:'center'}}>
              <ProgressBarProgressionView
              oldProgressionProjet={oldProgressionProjet}
              newProgressionProjet={newProgressionProjet}/>
            </View>
            <Text style={styles.small_text}> Project complete at XX % </Text>
          </View>)
        }
    }
}

_displayMessage(message) {
   if (this.props.withMessage) {
       return (
       <Text
        style={styles.update}>
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

_displayUserName() {
   if (this.props.UsernameIsDisplayed) {
       return (
         <Text>
           <Text
           style={styles.USername_text}>
           User name
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
    const {oldProgressionProjet, newProgressionProjet,message}=this.props
    return (
      <View
      style={styles.main_container}>
        {this._displayUserImage()}
        <View style={{flex:10}}  >
          <Text>
          {this._displayUserName()}
          {this._displayMessage(message)}
          </Text>
          {this._displayProgression(oldProgressionProjet,newProgressionProjet)}
          <View style={{marginTop:3}}>
            <Text
            style={styles.date}>
              XX/XX/XXXX
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
 update:{
    fontSize: 15,
    textAlign: 'left',
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
