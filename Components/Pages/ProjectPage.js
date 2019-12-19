
import React from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity,TouchableHighlight,Animated} from 'react-native'
import ProjectPageHeader from '../../Components/Headers/ProjectPageHeader'
import Panel from '../../Components/Panel';  // Step 1

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
        <View>
          <ProjectPageHeader
          project={this.state.project}
          imageProject={require('../../Images/project.png')}
          progressionProject={'50%'}
          progressionTemps={'20%'}/>
       </View>
       <Panel
       title_closed="See Details"
       title_expanded="Details">
       <Text>Details du projetooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</Text>
       </Panel>
    </View>
    )
  }
}



export default ProjectPage
