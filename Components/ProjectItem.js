
import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import ProgressBar from '../Components/ProgressBar'
import ProjectIcon from '../Components/ProjectIcon'
import Description from '../Components/Description'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'


class ProjectItem_LargeScreen extends React.Component {

  display_overlay_image(is_over) {
    if (is_over==true){
      return(
        <View style={styles.overlay}>
          <Image
          style={imageStyles.award_image}
          source={require('../Images/app_logo_.png')}/>
       </View>
      )
    }
   }

   opacify_item(is_over) {
     if (is_over==true){
       return(0.3)}
      else {return(1)}
     }

  render() {
    const{project, displayDetailForProject}=this.props
    return (
      <View>
        <TouchableOpacity
        onPress={ () => displayDetailForProject(project.id)}>
          <View style={[styles.main_container, {opacity:this.opacify_item(project.is_done)}]}>

            <View style = {styles.project_image_container}>
              <View>
                 <ProjectIcon
                 imageSource={{uri:project.logo}}/>
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
                style={policeStyles.project_title_text}
                numberOfLines={2}>
                  {project.title}
                </Text>
                </View>
                <View>
                <Description
                  description={project.description}
                  lineNb={2}/>
                </View>

            </View>
          </View>
          {this.display_overlay_image(project.is_done)}
        </TouchableOpacity>
      </View>
    )
  }
}
//   {this.display_overlay_image(project.description.is_done)}

const styles = StyleSheet.create({
  main_container: {
    flexDirection:'row',
    marginTop: 15,
    width: "100%",
    marginBottom:5,
    marginLeft:"1%",
    flex:1,
  },
  project_image_container: {
    flex:1,
    alignSelf:'flex-start',
  },
  text_container:{
    flexDirection:'column',
    flex:1,
    marginRight:"3%",
  },
  project_image_container:{
    paddingRight:"4%",
  },
  overlay:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems:'center',
    justifyContent:'center',
  },
})

export default ProjectItem_LargeScreen
