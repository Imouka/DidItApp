import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity,} from 'react-native'

class ProgressBarWithImage extends React.Component {

  render() {
   const {progression,imageSource}=this.props
    return (
      <View
      style={styles.main_container}>
        <Image
        style={styles.imageSource}
        source={imageSource}/>
        <View
        style={styles.progress_bar_border}>
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
  progress_bar_border: {
    flex:1,
    height: 10,
    //width: 70,
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
 imageSource :{
   width: 20,
   height:20,
 },
});

export default ProgressBarWithImage
