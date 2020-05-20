
import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import ProgressBar from '../Components/ProgressBar'
import ProjectIcon from '../Components/ProjectIcon'
import Description from '../Components/Description'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'
import ProgressBarWithImage from '../Components/ProgressBarWithImage'
import moment from 'moment'


class ProjectItem extends React.Component {

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
    const{imageSource,project, displayDetailForProject}=this.props
    return (
      <View>
        <TouchableOpacity
        onPress={ () => displayDetailForProject(project.id)}>
          <View style={[styles.main_container, {opacity:this.opacify_item(project.is_done)}]}>
            <View style = {styles.project_image_container}>
              <View style={{alignSelf:'center'}}>
                 <ProjectIcon
                 imageSource={imageSource}/>
              </View>
            </View>

            <View
              style={styles.text_container}>
              <View>
                <Text
                style={policeStyles.small_project_title_text}
                numberOfLines={2}>
                  {project.title}
                </Text>
                </View>

                  <View >
                      <View
                      style={{marginTop:8, flexDirection:'row'}}>
                      <View style={{flex:4, marginRight:"1%",  marginLeft:"1%"}}>
                        <ProgressBarWithImage
                          progression={Math.round(project.progression_percentage * 100) + "%"}
                          imageSource={require('../Images/goal.png')}/>
                      </View>
                      <View style={{flex:2}}>
                      <Text style={policeStyles.update_date}>
                          {project.progression}  &#8594; {project.objective}
                      </Text>
                      </View>
                      </View>

                      <View
                      style={{marginTop:8, flexDirection:'row'}}>
                      <View style={{flex:4, marginRight:"1%",  marginLeft:"1%"}}>
                        <ProgressBarWithImage
                          progression={Math.round(project.time_progression * 100) + "%"}
                          imageSource={require('../Images/hourglass6.png')}/>
                      </View>
                      <View style={{flex:2}}>
                      <Text style={policeStyles.update_date}>
                            {moment(new Date(project.project_start_date)).format('DD/MM/YY')} &#8594; {moment(new Date(project.project_end_date)).format('DD/MM/YY')}
                      </Text>
                      </View>

                    </View>
                  </View>


            </View>
          </View>

          <View style={styles.support_container} >
            <Image
              style={imageStyles.support_image}
              source= {require('../Images/support.png')}  />
            <View style={{marginLeft:"2%"}}>
              <Text style={policeStyles.standard_grey} >
                {project.nb_supports}
                {" people supported this project"}
              </Text>
            </View>
          </View>
          <View style={{marginBottom:"1%"}}>
            <Description
              description={project.description}
              lineNb={2}/>
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
  //  backgroundColor:'red'
  },
  project_image_container: {
    alignSelf:'center',
    paddingRight:"3%",
  },
  text_container:{
    flexDirection:'column',
    marginRight:"3%",
    flex:1,
    justifyContent :"space-around",
    // backgroundColor:'red'
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
  support_container:{
    flexDirection: 'row',
    alignItems:'center',
    marginTop:"1%",
    marginBottom:"1%"
  },
})

export default ProjectItem
