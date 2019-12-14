
import React from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity} from 'react-native'
import ProjectIcon from '../Components/ProjectIcon'
import ProgressBar from '../Components/ProgressBar'
import ProgressBarWithImage from '../Components/ProgressBarWithImage'
import Description from '../Components/Description'

class ProjectPageHeader extends React.Component {


  render() {
    const {project,imageProject,progressionTemps,progressionProject}=this.props
    return (
      <View>
      <Text
      style={styles.project_title_text}>
      {project.title}
      </Text>
      <View
      style={styles.main_container}>
        <View
          style={styles.image_container}>
          <ProjectIcon
          imageSource={imageProject}/>
        </View>
        <View
        style={styles.progress_container}>
          <ProgressBarWithImage
            progression={progressionProject}
            imageSource={require('../Images/goal.png')}/>
          <ProgressBarWithImage
            progression={progressionTemps}
            imageSource={require('../Images/hourglass.png')}/>
        </View>
        <View
        style={styles.image_container}>
          <TouchableOpacity>
            <Image
              style={styles.button_image}
              source= {require('../Images/progress.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View
      style={styles.support_container} >
        <Image
          style={styles.button_image}
          source= {require('../Images/support.png')}
        />
        <Text>
        55 people supported this project
        </Text>
      </View>
      <Description
      description={project.description}
      lineNb={4}/>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"stretch"
  },
  progress_container: {
      flex:0.90,
      flexDirection: 'column',
      justifyContent:"space-around"
  },
   image_container:{
    alignSelf:"center"
  },
  button_image:{
    width: 40,
    height:40,
    //borderRadius:360,
  },
  project_title_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  support_container:{
    flexDirection :'row',
    alignItems:"center"
  }
})
export default ProjectPageHeader
