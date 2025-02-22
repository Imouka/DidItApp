
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
import {imageStyles} from '../../Styles/Image_styles'
import {policeStyles} from '../../Styles/police_styles'

class ProjectPageHeader extends React.Component {

  display_options(optionsIsDisplayed) {
    if (optionsIsDisplayed){
      return(
        <Menu>
            <MenuTrigger>
            <Image
              style={imageStyles.more_button_image}
              source= {require('../../Images/more.png')}
            />
           </MenuTrigger>
            <MenuOptions
              customStyles={{optionText: policeStyles.standard_text}}>
              <MenuOption
              onSelect={() => this.props.displayProjectSettings()}
              text={'  Edit project'} />
              <MenuOption
              onSelect={() => this.props.deleteProject()}
              text={'  Delete project'} />
          </MenuOptions>
        </Menu>
      )}
   }

  render() {
    const {project, optionsIsDisplayed}=this.props
    return (
      <View>
      <View style={{flexDirection:"row",justifyContent:"space-between",  alignItems:"center"}}>
        <View style={{flex:7}}>
          <Text
          style={policeStyles.project_title_text}>
          {project.title}
          </Text>
        </View>
        <View  style={{flex:1, alignItems:'flex-end'}}>
        {this.display_options(optionsIsDisplayed)}
        </View>
      </View>
      <View
      style={styles.row_container}>
        <View
          style={styles.image_container}>
          <ProjectIcon
          imageSource={{uri:project.logo}}
          must_opacify={project.is_done}/>
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
              <Text  style={policeStyles.update_date}>
               {moment(new Date(project.project_start_date)).format('DD/MM/YY')}
              </Text>
              <Text style={policeStyles.update_date}>
              {moment(new Date(project.project_end_date)).format('DD/MM/YY')}
              </Text>
            </View>
        </View>
        <View
        style={styles.image_container}>
        {this.props.children}
        </View>
      </View>
      <View
      style={styles.support_container} >
        <Image
          style={imageStyles.support_image}
          source= {require('../../Images/support.png')}
        />
        <View style={{marginLeft:"2%"}}>
          <Text   style={policeStyles.standard_grey} >
            {project.nb_supports}
            {" people supported this project"}
          </Text>
        </View>
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
  desc_container:{
    marginTop:"2%",
    marginBottom:"2%"
  },
  date_container:{
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  support_container:{
    flexDirection: 'row',
    alignItems:'center',
    marginTop:"3%"
  },
})
export default ProjectPageHeader
