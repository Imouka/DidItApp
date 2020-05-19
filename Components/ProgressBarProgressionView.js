import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,ImageBackground} from 'react-native'
import {imageStyles} from '../Styles/Image_styles'

class ProgressBar extends React.Component {



  render() {
   const {oldProgressionProjet,newProgressionProjet}=this.props
    return (
      <View
      style={styles.main_container}>
        <Image
        style={imageStyles.progress_bar_image}
        source={require("../Images/goal.png")}/>
        <View
        style={imageStyles.progress_bar_border_UPDATE}>
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


const styles = StyleSheet.create({
  main_container:{
    flexDirection: 'row',
    alignItems:'center',
    alignContent:"space-between",
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
});

export default ProgressBar
