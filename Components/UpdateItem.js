
import React from 'react'
import {View, StyleSheet,Text,Image} from 'react-native'
import ProgressBarProgressionView from '../Components/ProgressBarProgressionView'

class UpdateItem extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       projectDidProgress:props.didProgress,
       withMessage:props.withMessage,
     }
   }

   _displayProgression(oldProgressionProjet,newProgressionProjet) {
      if (this.state.projectDidProgress) { {
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
   if (this.state.withMessage) { {
       return (
       <Text
        style={styles.update}>
        {message}
        </Text>)
     }
 }
}

  render() {
    const {oldProgressionProjet, newProgressionProjet,message}=this.props
    return (
      <View
      style={styles.main_container}>
        <View  style={{flex:1}}>
          <Image
            style={styles.user_image}
            source= {require("../Images/profile_icon.png")}
          />
        </View>
        <View style={{flex:10}} >
          <Text>
            <Text
            style={styles.USername_text}>
            User name
            </Text>
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
 user_image:{
    width: 25,
    height: 25,
    borderRadius:360,
    borderWidth:2,
    borderColor:'#55cfb3',
  },
})
