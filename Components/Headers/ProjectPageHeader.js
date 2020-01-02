
import React from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity} from 'react-native'
import ProjectIcon from '../../Components/ProjectIcon'
import ProgressBar from '../../Components/ProgressBar'
import ProgressBarWithImage from '../../Components/ProgressBarWithImage'
import Description from '../../Components/Description'
import moment from 'moment'

import Panel from '../../Components/Panel';  // Step 1

import ButtonSmallImageAndText from '../../Components/ButtonSmallImageAndText'
import ProjectDetails from '../../Components/ProjectDetails'

class ProjectPageHeader extends React.Component {


  render() {
    const {project,imageProject,progressionTemps,progressionProject,displayProjectSettings}=this.props
    return (
      <View>
      <View style={{flexDirection:"row",justifyContent:"space-between",  alignItems:"center"}}>
        <Text
        style={styles.project_title_text}>
        {project.title}
        </Text>
        <ButtonSmallImageAndText
        text=" "
        imageSource= {require("../../Images/settings.png")}
        action={displayProjectSettings}/>
      </View>
      <View
      style={styles.row_container}>
        <View
          style={styles.image_container}>
          <ProjectIcon
          imageSource={imageProject}/>
        </View>
        <View
        style={styles.progress_container}>
          <ProgressBarWithImage
            progression={progressionProject}
            imageSource={require('../../Images/goal.png')}/>
          <ProgressBarWithImage
            progression={progressionTemps}
            imageSource={require('../../Images/hourglass.png')}/>
            <View
            style={styles.date_container}>
              <Text  style={styles.date}>
               {moment(new Date(project.project_start_date)).format('DD/MM/YY')}
              </Text>
              <Text style={styles.date}>
              {moment(new Date(project.project_end_date)).format('DD/MM/YY')}
              </Text>
            </View>
        </View>
        <View
        style={styles.image_container}>
          <TouchableOpacity>
            <Image
              style={styles.update_image}
              source= {require('../../Images/progress.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View
      style={styles.support_container} >
        <Image
          style={styles.support_image}
          source= {require('../../Images/support.png')}
        />
        <Text   style={styles.support_text} >
          {"  55 people supported this project"}
        </Text>
      </View>
      <View
      style={styles.desc_container} >
      <Description
      description={project.description}
      lineNb={1000}/>
      </View>
      <Panel
      title_closed="See Details"
      title_expanded="Details">
        <ProjectDetails
         project={project}/>
      </Panel>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  row_container: {
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"stretch",
    marginTop:"5%"
  },
  progress_container: {
      flex:0.90,
      flexDirection: 'column',
      justifyContent:"space-around"
  },
   image_container:{
    alignSelf:"center"
  },
  support_image:{
    width: 35,
    height:35,
  },
  update_image:{
    width: 40,
    height:40,
  },
  project_title_text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  support_text:{
    color:"#4A4A4A",
    fontWeight:"300",
  },
  desc_container:{
    marginTop:"2%",
    marginBottom:"2%"
  },
  date_container:{
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  date:{
    fontSize: 12,
    textAlign: 'left',
    fontWeight:'bold',
    color:'#777878'
  },
  support_container:{
    flexDirection: 'row',
    alignItems:'center',
    marginTop:"3%"
  }
})
export default ProjectPageHeader
