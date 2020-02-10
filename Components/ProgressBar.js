
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,} from 'react-native'

class ProgressBar extends React.Component {


  convert_time_passed_in_hourglass_pos(progression_temps) {
    return(((Number.parseInt(progression_temps) -14)+"%").toString())
   }


  render() {
   const {progressionProjet, progressionTemps}=this.props
    return (
      <View
      style={styles.main_container}>
        <View
        style={styles.progress_bar_border}>
          <View
          style={[ StyleSheet.absoluteFill, styles.progress_bar_filler, {width: progressionProjet} ]}>
          </View>
          <Image
            style={[styles.hourglass, {marginLeft:this.convert_time_passed_in_hourglass_pos(progressionTemps)}]}
            source={require('../Images/hourglass6.png')}/>
        </View>
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
  },
  progress_bar_border: {
    //flex:1,
    height: 10,
    width: 70,
    backgroundColor: 'white',
    borderColor: '#605f62',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent:'center',
 },
 progress_bar_filler:{
    backgroundColor: '#2ccce4' ,
    borderRadius:5,
 },
 hourglass :{
   width: 20,
   height:20,
 },
});

export default ProgressBar
