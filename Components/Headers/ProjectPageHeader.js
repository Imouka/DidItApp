
import React from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity} from 'react-native'
import ProjectIcon from '../../Components/ProjectIcon'
import ProgressBar from '../../Components/ProgressBar'
import ProgressBarWithImage from '../../Components/ProgressBarWithImage'
import Description from '../../Components/Description'
import moment from 'moment'
import Panel from '../../Components/Panel';  // Step 1
import ButtonSmallImage from '../../Components/ButtonSmallImage'
import ProjectDetails from '../../Components/ProjectDetails'
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import MoreButton from '../../Components/MoreButton'
import AddProgression from '../../Components/AddProgression'


class ProjectPageHeader extends React.Component {

  display_update_button(is_over,addProgression) {
    if (is_over==false){
      return(
        <View
        style={styles.image_container}>
          <AddProgression
          addProgression={addProgression}/>
        </View>
      )
    }
   }


  render() {
    const {project,imageProject,displayProjectSettings,deleteProject,addProgression,is_over}=this.props
    return (
      <View>
      <View style={{flexDirection:"row",justifyContent:"space-between",  alignItems:"center"}}>
        <Text
        style={styles.project_title_text}>
        {project.title}
        </Text>

        <Menu >
            <MenuTrigger>
            <Image
              style={styles.more_button_image}
              source= {require('../../Images/more.png')}
            />
           </MenuTrigger>
            <MenuOptions>
              <MenuOption
              onSelect={() => displayProjectSettings()}
              text={'  Edit project'} />
              <MenuOption
              onSelect={() => deleteProject()}
              text={'  Delete project'} />
          </MenuOptions>
        </Menu>
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
            progression={Math.round(project.progression_percentage * 100) + "%"}
            imageSource={require('../../Images/goal.png')}/>
          <ProgressBarWithImage
            progression={Math.round(project.time_progression * 100) + "%"}
            imageSource={require('../../Images/hourglass6.png')}/>
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
      {this.display_update_button(is_over, addProgression)}
      </View>
      <View
      style={styles.support_container} >
        <Image
          style={styles.support_image}
          source= {require('../../Images/support.png')}
        />
        <Text   style={styles.support_text} >
          {"  XXXX people supported this project"}
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
      title_expanded="Details"
      title_is_displayed={true}
      paddingLeft="3%">
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
      flex:0.9,
      flexDirection: 'column',
      justifyContent:"space-around"
  },
   image_container:{
    alignSelf:"center",
  },
  support_image:{
    width: 35,
    height:35,
  },
  update_image:{
    width: 40,
    height:40,
  },
  settings_image:{
    width: 25,
    height: 25,
    borderRadius:360,
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
  },
  more_button_image:{
    width: 25,
    height: 25,
   },
})
export default ProjectPageHeader
