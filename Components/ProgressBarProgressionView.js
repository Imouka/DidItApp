
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,ImageBackground} from 'react-native'

class ProgressBar extends React.Component {

/* _convert_time_passed_in_hourglass_pos(progression_temps) {
    return (
    progression_temps-10;
    )
  }
}*/

/*<View
style={[ StyleSheet.absoluteFill, styles.progress_bar_filler_update, {width: newProgressionProjet} ]}>
</View>

<ImageBackground
source={require("../Images/test.png")}
style={[ StyleSheet.absoluteFill, styles.progress_bar_filler_update, {width: newProgressionProjet} ]}>
</ImageBackground>
*/

  render() {
   const {oldProgressionProjet,newProgressionProjet}=this.props
    return (
      <View
      style={styles.main_container}>
        <Image
        style={styles.imageSource}
        source={require("../Images/goal.png")}/>
        <View
        style={styles.progress_bar_border}>
        <ImageBackground
        source={require("../Images/test.png")}
        style={[ StyleSheet.absoluteFill, styles.progress_bar_filler_update, {width: newProgressionProjet} ]}>
        </ImageBackground>
          <View
          style={[ StyleSheet.absoluteFill, styles.progress_bar_filler, {width: oldProgressionProjet} ]}>
          </View>
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
    alignContent:"space-between",
  },
  progress_bar_border: {
    height: 12,
    width: 200,
    marginLeft:5,
    backgroundColor: 'white',
    borderColor: '#605f62',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent:'center',
 },
 progress_bar_filler:{
    borderTopLeftRadius :5,
    borderBottomLeftRadius :5,
    backgroundColor: '#2ccce4' ,
 },
 progress_bar_filler_update:{
   backgroundColor: '#B9EFF7' ,
   borderRadius:5,
   overflow:'hidden',
 },
 imageSource :{
   width: 20,
   height: 20,
 },
});

export default ProgressBar
