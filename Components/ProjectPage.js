
import React from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity} from 'react-native'
import ProjectPageHeader from '../Components/ProjectPageHeader'

class ProjectPage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       project: [],
     }
   }

   componentDidMount(){
       this.setState ({
         project:this.props.navigation.state.params.project
       })
   }

  render() {
    return (
      <View>
      <ProjectPageHeader
      project={this.state.project}
      imageProject={require('../Images/project.png')}
      progressionProject={'50%'}
      progressionTemps={'20%'}/>
     </View>
    )
  }
}

export default ProjectPage
