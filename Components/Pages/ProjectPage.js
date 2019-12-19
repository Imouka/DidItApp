
import React from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity,TouchableHighlight,Animated} from 'react-native'
import ProjectPageHeader from '../../Components/Headers/ProjectPageHeader'
import Panel from '../../Components/Panel';  // Step 1
import ButtonBigImageAndText from '../../Components/ButtonBigImageAndText'
import ButtonSmallImageAndText from '../../Components/ButtonSmallImageAndText'
import ProjectDetails from '../../Components/ProjectDetails'


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
       console.log(this.props.navigation.state.params.project)
   }

   _displayProjectSettings=()=>{
       console.log("Display settings")
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
         <ProjectDetails
          project={this.state.project}/>
       </Panel>
       <ButtonSmallImageAndText
       text="Settings"
       imageSource= {require("../../Images/settings.png")}
       action={this._displayProjectSettings}/>
       <ButtonBigImageAndText
       text="Add Update"
       imageSource= {require("../../Images/profile_icon.png")}
       action={console.log}/>
    </View>
    )
  }
}



export default ProjectPage
