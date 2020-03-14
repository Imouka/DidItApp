
import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import ProgressBar from '../Components/ProgressBar'
import ProjectIcon from '../Components/ProjectIcon'
import Description from '../Components/Description'

class ProjectItem extends React.Component {

  display_overlay_image(is_over) {
    if (is_over==true){
      return(
        <View style={styles.overlay}>
          <Image
          style={styles.award_image}
          source={require('../Images/app_logo2_transp.png')}/>
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
    const{imageSource,project, displayDetailForProject, is_over}=this.props
    return (
      <View>
        <TouchableOpacity
        onPress={ () => displayDetailForProject(project.id)}>
          <View style={[styles.main_container, {opacity:this.opacify_item(is_over)}]}>

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
              style={styles.project_title_text}
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
         {this.display_overlay_image(is_over)}
        </TouchableOpacity>
      </View>
    )
  }
}
// imageSource='../Images/plus.png'/>

const styles = StyleSheet.create({
  main_container: {
    flexDirection:'row',
    marginTop: 15,
    width: "100%",
    marginBottom:5,

  //  backgroundColor:'red'
  },
  project_title_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  project_image_container: {
    flex:1,
    alignSelf:'flex-start'
  },
  text_container:{
    flexDirection:'column',
    flex:3.5,
    marginRight:"3%",
  },
  project_image_container:{
    flex:1,
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
  award_image:{
    width:160,
    height:50,
}
})

export default ProjectItem
/*
<View
style={{marginTop:8}}>
   <TwoProgressBars/>
</View>*/
