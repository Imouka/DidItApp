
import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import ProgressBar from '../Components/ProgressBar'
import ProjectIcon from '../Components/ProjectIcon'
import Description from '../Components/Description'

class ProjectItem extends React.Component {
  render() {
    return (
      <View
      style={styles.main_container}>
        <View style = {{flex:1}} >
          <View >
             <ProjectIcon/>
          </View>
          <View
          style={{marginTop:10}}>
             <ProgressBar
             progression_projet="30%"
             progression_temps="10%"/>
          </View>
        </View>
        <View
        style={styles.text_container}>
        <View>
          <Text
          style={styles.project_title_text}>
          Project title
          </Text>
          </View>
          <View>
          <Description/>
          </View>
        </View>
      </View>
    )
  }
}
// imageSource='../Images/plus.png'/>

const styles = StyleSheet.create({
  main_container: {
    flexDirection:'row',
    marginTop: 20,
    width: "100%",
  },
  project_title_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_container:{
    flexDirection:'column',
    flex:3.5
  }
})

export default ProjectItem
