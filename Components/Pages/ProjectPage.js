
import React from 'react'
import {View,StyleSheet,ScrollView,} from 'react-native'
import ProjectPageHeader from '../../Components/Headers/ProjectPageHeader'

import CommentItem from '../../Components/CommentItem'
import UpdateItem from '../../Components/UpdateItem'
import SupportItem from '../../Components/SupportItem'
import ButtonBigImageAndText from '../../Components/ButtonBigImageAndText'
import TextInputWithImage from '../../Components/TextInputWithImage'

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

   displayProjectSettings=()=>{
       console.log("Display settings")
 }

 _renderHeader = () => {
 return (
   <View>
    <View style={styles.header_container}>
     <ProjectPageHeader
     project={this.state.project}
     imageProject={require('../../Images/project.png')}
     displayProjectSettings={this.displayProjectSettings}/>
    </View>
    <View style={styles.add_update_container} >
       <TextInputWithImage
       text="Add Update"
       imageSource= {require("../../Images/profile_icon.png")}
       action={console.log}/>
     </View>
  </View>
 )}

  render() {
    return (
      <ScrollView style={styles.main_container} >
      <View>
        {this._renderHeader()}
       </View>
       <View>
         <CommentItem
          comment='Voici mon commentaire, Je commente ton projet avec un long commentaire blablabla bravo franchement tu geres. Ton projet est vraiment super'/>
         <View style={{marginTop:20, backgroundColor:'#F1F4F8'}}>
          <UpdateItem
          didProgress={true}
          withMessage={true}
          oldProgressionProjet='38%'
          newProgressionProjet='60%'
          message="C'est le meilleur projet dans lequel je me suis jamais lancé ! Encouragez moi !"/>
         </View>
         <SupportItem/>
      </View>
    </ScrollView>

    )
  }
}

/*<FlatList
  data={this.state.projects}
  keyExtractor={(item) => item.id.toString()}
  ref={(ref) => { this.flatListRef = ref; }}
  ItemSeparatorComponent={this._renderSeparator}
  ListHeaderComponent={this._renderHeader}
  renderItem={({item}) =>
  <ProjectItem
      project={item}
      imageSource={require('../../Images/project.png')}
      progressionProjet={'10%'}
      progressionTemps={'0%'}
      displayDetailForProject={this._displayDetailForProject}
  />}
/>*/

export default ProjectPage


const styles = StyleSheet.create({
  main_container: {
    flex:1,
  },
  header_container: {
    marginTop: "1%",
    marginLeft:"3%",
    marginRight:"2%"  ,
  },
  support_container:{
    flexDirection :'row',
    alignItems:"center",
    marginTop:"2%",

  },
  add_update_container:{
    marginBottom:'2%'
  },
})
/* <View>
   <CommentItem
    comment='Voici mon commentaire, Je commente ton projet avec un long commentaire blablabla bravo franchement tu geres. Ton projet est vraiment super'/>
   <View style={{marginTop:20, backgroundColor:'#F1F4F8'}}>
    <UpdateItem
    didProgress={true}
    withMessage={true}
    oldProgressionProjet='38%'
    newProgressionProjet='60%'
    message="C'est le meilleur projet dans lequel je me suis jamais lancé ! Encouragez moi !"/>
   </View>
   <SupportItem/>
</View>
*/
