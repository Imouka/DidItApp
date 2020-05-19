
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,} from 'react-native'
import {imageStyles} from '../Styles/Image_styles'


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
        style={imageStyles.progress_bar_border_SMALL}>
          <View
          style={[ StyleSheet.absoluteFill, styles.progress_bar_filler, {width: progressionProjet} ]}>
          </View>
          <Image
            style={[imageStyles.progress_bar_image, {marginLeft:this.convert_time_passed_in_hourglass_pos(progressionTemps)}]}
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
 progress_bar_filler:{
    backgroundColor: '#2ccce4' ,
    borderRadius:5,
 },
});

export default ProgressBar
