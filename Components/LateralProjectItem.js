import React from 'react'
import {View,StyleSheet,Text, TouchableOpacity,Image} from 'react-native'
import ProjectIcon from '../Components/ProjectIcon'
import ProgressBar from '../Components/ProgressBar'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'

class LateralProjectItem extends React.Component {

  display_overlay_image(is_over) {
    if (is_over==true){
      return(
        <View style={styles.overlay}>
          <Image
          style={imageStyles.award_image_little}
          source={require('../Images/award.png')}/>
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
    const{imageSource, project, displayDetailForProject}=this.props
    return (
    <TouchableOpacity
    onPress={ () => displayDetailForProject(project.id)}
    style={styles.project_image_container} >
      <View
      style ={[{opacity:this.opacify_item(project.is_done), }]}>
          <View
           style = {imageStyles.top_scrollable_bar_titleView}>
            <Text
             numberOfLines={2}
              style={policeStyles.project_title_text_ITALIC}>
              {project.title}
            </Text>
          </View>
          <View
           style = {{alignSelf:"center"}}>
              <ProjectIcon
              style = {[{justifyContent:'center'}]}
              imageSource={imageSource}/>
          </View>
          <View
          style={{marginTop:8, alignSelf:"center"}}>
              <ProgressBar
              progressionProjet={Math.round(project.progression_percentage * 100) + "%"}
              progressionTemps={Math.round(project.time_progression * 100) + "%"}/>
          </View>
      </View>
      {this.display_overlay_image(project.is_done)}

    </TouchableOpacity>
  )
 }
}

const styles = StyleSheet.create({
  project_image_container:{
    flex:1,
    backgroundColor:"white",
    marginBottom:8,
    justifyContent:'flex-end',
    //backgroundColor:'red'
  },
  overlay:{
    position: 'absolute',
    top:"15%",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems:'center',
    justifyContent:'center',
  },
})

export default LateralProjectItem
