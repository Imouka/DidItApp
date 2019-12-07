
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,} from 'react-native'

class ProgressBar extends React.Component {

/* _convert_time_passed_in_hourglass_pos(progression_temps) {
    return (
    progression_temps-10;
    )
  }
}*/

  render() {
   const {progression_projet,progression_temps}=this.props
    return (
      <View
      style={styles.main_container}>
        <View
        style={styles.progress_bar_border}>
          <View
          style={[ StyleSheet.absoluteFill, styles.progress_bar_filler, {width: progression_projet} ]}>
          </View>
          <Image
            style={[styles.hourglass, {marginLeft:progression_temps}]}
            source={require('../Images/hourglass4.png')}/>
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
