import React from 'react'
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native'
import ProjectIcon from '../Components/ProjectIcon'
import ProgressBar from '../Components/ProgressBar'

class LateralProjectItem extends React.Component {
  render() {
    const{imageSource, project, displayDetailForProject}=this.props
    return (
    <TouchableOpacity
    style = {styles.project_image_container}
    onPress={ () => displayDetailForProject(project.id)}>
      <View
       style = {styles.titleView}>
        <Text
         numberOfLines={2}
          style={styles.project_title_text}>
          {project.title}
        </Text>
      </View>
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
    </TouchableOpacity>
  )
 }
}

const styles = StyleSheet.create({
  project_image_container:{
    alignItems:'center',
    marginRight:15,
    flex:1,
    marginTop:"1%",
    backgroundColor:"white",
    paddingBottom:8,

  },
  titleView:{
    width:80,
  //  backgroundColor:'red'
  },
  project_title_text:{
    textAlign:"center",
    fontStyle:"italic"
  }
})

export default LateralProjectItem
