
import React from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity} from 'react-native'
import ProjectIcon from '../Components/ProjectIcon'
import ProgressBar from '../Components/ProgressBar'
import ProgressBarWithImage from '../Components/ProgressBarWithImage'

class ProjectPage extends React.Component {
  render() {
    return (
      <View>
        <View
        style={styles.main_container}>
          <View
            style={styles.project_image_container}>
            <ProjectIcon
            imageSource={require('../Images/project.png')}/>
          </View>
          <View
            style={styles.project_text_container}>
            <Text
            style={styles.project_title_text}>
            Project Title
            </Text>
            <View
            style={styles.progress_and_button}>
              <View
              style={styles.progress_container}>
                <ProgressBarWithImage
                  progression={'50%'}
                  imageSource={require('../Images/goal.png')}/>
                <ProgressBarWithImage
                  progression={'20%'}
                  imageSource={require('../Images/hourglass.png')}/>
              </View>
                <TouchableOpacity>
                  <Image
                    style={styles.button_image}
                    source= {require('../Images/plus.png')}
                  />
                </TouchableOpacity>
            </View>
          </View>
        </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
  },
  project_text_container:{
    flex:4,
    flexDirection: 'column',
  },
  progress_and_button:{
    flexDirection:'row',
  },
  progress_container: {
      flex:0.75,
      flexDirection: 'column'
  },
  project_image_container:{
    flex:1,
  },
  button_image:{
    width: 40,
    height: 40,
    borderRadius:360,
  },
  project_title_text: {
    fontWeight: 'bold',
    fontSize: 25,
  },

})
export default ProjectPage
