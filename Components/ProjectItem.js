
import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import ProgressBar from '../Components/ProgressBar'
import ProjectIcon from '../Components/ProjectIcon'
import Description from '../Components/Description'

class ProjectItem extends React.Component {
  render() {
    const{imageSource,project, displayDetailForProject}=this.props
    return (
      <TouchableOpacity
      style={styles.main_container}
      onPress={ () => displayDetailForProject(project.id)}>
        <View style = {styles.project_image_container}>
          <View>
             <ProjectIcon
             imageSource={imageSource}/>
          </View>
          <View
          style={{marginTop:8}}>
             <ProgressBar
             progressionProjet={Math.round(project.progression_percentage * 100) + "%"}
             progressionTemps={Math.round(project.time_progression * 100) + "%"}/>
          </View>
        </View>
        <View
        style={styles.text_container}>
        <View>
          <Text
          style={styles.project_title_text}>
            {project.title}
          </Text>
          </View>
          <View>
          <Description
            description={project.description}
            lineNb={2}/>
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
  project_image_container: {
    flex:1,
  },
  text_container:{
    flexDirection:'column',
    flex:3.5,
    marginRight:"3%",
    marginLeft:"2%"
  },
  project_image_container:{
    flex:1,
    alignItems:'center'
  }
})

export default ProjectItem
/*
<View
style={{marginTop:8}}>
   <TwoProgressBars/>
</View>*/
