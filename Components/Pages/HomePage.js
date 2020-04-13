
import React from 'react'
import {connect} from 'react-redux'
import {View, ScrollView,FlatList, StyleSheet} from 'react-native'
import LateralBar from '../../Components/LateralBar'
import HomepagePostItem from '../../Components/HomepagePostItem'
import UpdateItem from '../../Components/UpdateItem'
import { getUserFromId, getProjectFromUserId } from '../../API/APITest'


const DATA = [
  {
    id:0,
    projectname:"Here we put the sjlk ldfjhffffs hjdfh jhjfhsdkj hjhdsfjk hjksdfhkjh khk",
    userName:"User nameffff kk jl kljleeee eeeeeeeeeffffffffffffffffjl",
    commentitems:[
                    {id:0,
                    message: 'Voici mon commentaire, Je commente ton projet avec un long commentaire blablabla bravo franchement tu geres. Ton projet est vraiment super'}

                ],
  didProgress:true,
  withMessage:true,
  UsernameIsDisplayed:false,
  oldProgressionProjet:'38%',
  newProgressionProjet:'60%',
  message:"C'est le meilleur projet dans lequel je me suis jamais lancé ! Encouragez moi !" ,
  },
  {
    id:1,
    projectname:"Here we put the sjlk ldfjhffffs hjdfh jhjfhsdkj hjhdsfjk hjksdfhkjh khk",
    userName:"User nameffff kk jl kljleeee eeeeeeeeeffffffffffffffffjl",
    commentitems:[


                ],
  didProgress:true,
  withMessage:true,
  UsernameIsDisplayed:false,
  oldProgressionProjet:'38%',
  newProgressionProjet:'60%',
  message:"C'est le meilleur projet dans lequel je me suis jamais lancé ! Encouragez moi !" ,
  },
  {
    id:2,
    projectname:"Here we put the sjlk ldfjhffffs hjdfh jhjfhsdkj hjhdsfjk hjksdfhkjh khk",
    userName:"User nameffff kk jl kljleeee eeeeeeeeeffffffffffffffffjl",
    commentitems:[
                    {id:0,
                    message: 'Voici mon commentaire, Je commente ton projet avec un long commentaire blablabla bravo franchement tu geres. Ton projet est vraiment super'}
                  ,
                  {id:1,
                  message: 'Voici mon commentaire, Je commente ton projet avec un long commentaire blablabla bravo franchement tu geres. Ton projet est vraiment super'}
                  ,
                  {id:2,
                  message: 'Voici mon commentaire, Je commente ton projet avec un long commentaire blablabla bravo franchement tu geres. Ton projet est vraiment super'}
                ],
  didProgress:true,
  withMessage:true,
  UsernameIsDisplayed:false,
  oldProgressionProjet:'38%',
  newProgressionProjet:'60%',
  message:"C'est le meilleur projet dans lequel je me suis jamais lancé ! Encouragez moi !" ,
  },
  {
    id:3,
    projectname:"Here we put the sjlk ldfjhffffs hjdfh jhjfhsdkj hjhdsfjk hjksdfhkjh khk",
    userName:"User nameffff kk jl kljleeee eeeeeeeeeffffffffffffffffjl",
    commentitems:[
                    {id:0,
                    message: 'Voici mon commentaire, Je commente ton projet avec un long commentaire blablabla bravo franchement tu geres. Ton projet est vraiment super'}
                  ,
                  {id:1,
                  message: 'Voici mon commentaire, Je commente ton projet avec un long commentaire blablabla bravo franchement tu geres. Ton projet est vraiment super'}
                  ,
                  {id:2,
                  message: 'Voici mon commentaire, Je commente ton projet avec un long commentaire blablabla bravo franchement tu geres. Ton projet est vraiment super'}
                ],
  didProgress:false,
  withMessage:true,
  UsernameIsDisplayed:false,
  message:"C'est le meilleur projet dans lequel je me suis jamais lancé ! Encouragez moi !" ,
  },

];

class HomePage extends React.Component{

  constructor(props) {
     super(props)
   }

componentDidMount(){
  this._update_user()
  //this._update_projects()
}

componentDidUpdate(prevProps){
  if(prevProps.user.id != this.props.user.id){
      this._update_projects()
  }
}

_update_user(){
  getUserFromId(this.props.loggedid).then(data => {
    this.props.dispatch({ type: "UPDATE_USER", value: data })
  })
}

_update_projects(){
  getProjectFromUserId(this.props.user.id).then(data => {
    this.props.dispatch({ type: "UPDATE_PROJECTS", value: data.projects })
  })
}

_renderSeparator () {
return (
  <View
    style={{
    //  marginTop:'5%',
      marginBottom:'5%',
      height: 1,
      backgroundColor: "#CED0CE",
      marginLeft: "10%",
      marginRight: "10%"
    }}
  />
);
};

_renderSeparatortop () {
return (
  <View
    style={{
      marginBottom:'5%',
      height: 1,
      backgroundColor: "#CED0CE",
      marginLeft: "10%",
      marginRight: "10%"
    }}
  />
);
};

_displayDetailForProject=(project_id)=>{
  this.props.navigation.navigate('ProjectPage',{project_id : project_id})
};

_renderHeader=()=>{
  return (
    <View >
      <LateralBar
      imageSource={require('../../Images/project.png')}
      projects={this.props.projects.reverse()}
      displayDetailForProject={this._displayDetailForProject}/>
      {this._renderSeparatortop()}
    </View>
  )
}



  render() {
    return (
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          ref={(ref) => { this.flatListRef = ref; }}
          ItemSeparatorComponent={this._renderSeparator}
          ListHeaderComponent={ this._renderHeader}
          renderItem={({item}) =>
          <HomepagePostItem
            projectImageSource={require("../../Images/project.png")}
            userImageSource={require("../../Images/profile_icon.png")}
            post={item}>
              <UpdateItem
              didProgress={item.didProgress}
              withMessage={item.withMessage}
              UsernameIsDisplayed={item.UsernameIsDisplayed}
              oldProgressionProjet='38%'
              newProgressionProjet='60%'
              message={item.message}/>
            </HomepagePostItem>}
          />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    projects : state.handleProject.projects,
    user: state.handleUser.user,
    loggedid: state.handleLogin.id,
  }
}
export default connect(mapStateToProps)(HomePage)
