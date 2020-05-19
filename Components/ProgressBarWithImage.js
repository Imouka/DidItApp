import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,} from 'react-native'
import {imageStyles} from '../Styles/Image_styles'

class ProgressBarWithImage extends React.Component {

  render() {
   const {progression,imageSource}=this.props
    return (
      <View
      style={styles.main_container}>
        <Image
        style={imageStyles.progress_bar_image}
        source={imageSource}/>
        <View
        style={imageStyles.progress_bar_border}>
          <View
          style={[ StyleSheet.absoluteFill, styles.progress_bar_filler, {width: progression} ]}>
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
  },
 progress_bar_filler:{
    backgroundColor: '#2ccce4' ,
    borderRadius:5,
 },
});

export default ProgressBarWithImage
