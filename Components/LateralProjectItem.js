import React from 'react'
import {View,StyleSheet,Text, TouchableOpacity,Image} from 'react-native'
import ProjectIcon from '../Components/ProjectIcon'
import ProgressBar from '../Components/ProgressBar'

class LateralProjectItem extends React.Component {

  display_overlay_image(is_over) {
    if (is_over==true){
      return(
        <View style={styles.overlay}>
          <Image
          style={styles.award_image}
          source={require('../Images/app_logo2_transp_small.png')}/>
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
           style = {styles.titleView}>
            <Text
             numberOfLines={2}
              style={styles.project_title_text}>
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
    //marginLeft:5,
    backgroundColor:"white",
    paddingBottom:20,
  //  backgroundColor:'green',
    justifyContent:'flex-end',

  },
  titleView:{
    width:80,
  // backgroundColor:'red',
   alignSelf:"center"
  },
  project_title_text:{
    textAlign:"center",
    fontStyle:"italic"
  },
  award_image:{
    width:50,
    height:50,
  },
  overlay:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems:'center',
    justifyContent:'center',
     //backgroundColor:'red',
  },
})

export default LateralProjectItem
