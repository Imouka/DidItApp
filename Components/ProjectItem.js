
import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import ProgressBar from '../Components/ProgressBar'
import ProjectIcon from '../Components/ProjectIcon'
import Description from '../Components/Description'

class ProjectItem extends React.Component {
  render() {
    const{imageSource, projectTitle, description, progressionProjet, progressionTemps, displayDetailForProject}=this.props
    return (
      <TouchableOpacity
      style={styles.main_container}
      onPress={ () => displayDetailForProject()}>
        <View style = {{flex:1}} >
          <View >
             <ProjectIcon
             imageSource={imageSource}/>
          </View>
          <View
          style={{marginTop:10}}>
             <ProgressBar
             progressionProjet={progressionProjet}
             progressionTemps={progressionTemps}/>
          </View>
        </View>
        <View
        style={styles.text_container}>
        <View>
          <Text
          style={styles.project_title_text}>
            {projectTitle}
          </Text>
          </View>
          <View>
          <Description
            description={description}/>
          </View>
        </View>
      </TouchableOpacity>
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
