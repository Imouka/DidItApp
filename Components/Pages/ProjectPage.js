
import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet,ScrollView, Alert, ActivityIndicator} from 'react-native'
import ProjectPageHeader from '../../Components/Headers/ProjectPageHeader'

import CommentItem from '../../Components/CommentItem'
import UpdateItem from '../../Components/UpdateItem'
import SupportItem from '../../Components/SupportItem'
import ButtonBigImageAndText from '../../Components/ButtonBigImageAndText'
import TextInputWithImage from '../../Components/TextInputWithImage'

import { getUserFromId} from '../../API/APITest'


class ProjectPage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       project: {},
       isLoading: false,
     }
   }


   componentDidMount(){
       console.log(this.props.navigation.state.params.project_id)
       this._retrieve_project()
   }

   componentDidUpdate(prevProps){
     if(prevProps.projects != this.props.projects){
         this._retrieve_project()
     }
   }

   _retrieve_project(){
     const arrayLength = this.props.projects.length;
     const id = this.props.navigation.state.params.project_id
     for (var i = 0; i < arrayLength; i++) {
       if( this.props.projects[i].id == id ){
         this.setState({
           project:this.props.projects[i]
         })
         break
       }
     }
   }

  displayProjectSettings=()=>{
      this.props.navigation.navigate('ModifyProjectPage',{project :this.state.project})
 }

  deleteProject=()=>{
  Alert.alert(
  'Project Deletion',
  'Are you sure that you want to delete this project ?',
  [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    { text: 'OK',
     onPress: () => {
       this.setState({ isLoading: true })
       getUserFromId("1")
       .then(data => {
         this.setState({ isLoading: false })
         if (true) {
           Alert.alert("Confirmed", "Your project has been deleted")
           this.props.navigation.navigate('ProfilePage')
        }
         else {
           Alert.alert("Error", "Something went wrong please try again later" )
       }
     })
     }
    },
  ],
);
}

_displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

 _renderHeader = () => {
 return (
   <View>
    <View style={styles.header_container}>
     <ProjectPageHeader
     project={this.state.project}
     imageProject={require('../../Images/project.png')}
     displayProjectSettings={this.displayProjectSettings}
     deleteProject={this.deleteProject}/>
    </View>
    <View style={styles.add_update_container} >
       <TextInputWithImage
       text={"Add Update"}
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
      {this._displayLoading()}
    </ScrollView>


    )
  }
}

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
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
}
})

const mapStateToProps = (state) => {
  return {
    projects : state.handleProject.projects,
  }
}

export default connect(mapStateToProps)(ProjectPage)
