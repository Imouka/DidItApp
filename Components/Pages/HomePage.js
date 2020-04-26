
import React from 'react'
import {connect} from 'react-redux'
import {View, ScrollView,FlatList, StyleSheet, Text} from 'react-native'
import LateralBar from '../../Components/LateralBar'
import HomepagePostItem from '../../Components/HomepagePostItem'
import UpdateItem from '../../Components/UpdateItem'
import {  getProjectFromUserId } from '../../API/APITest'
import update from '../../Utils/Updaters.js';

const DATA = [
  {
            comments: [
              {
                  date: "2019/12/31",
                  first_name: "Eve",
                  icon: "Good looking picture",
                  last_name: "What's my name",
                  message: "En faite j'aime pas",
                  user_id: 2,
                  comment_id:1
              },
            ],
            date: "2020/04/25",
            id: 3,
            project: {
                id: 12,
                logo: "Nice Logo",
                title: "Fuck Eve"
            },
            update: {
                date: "2020/04/25",
                message: "Project creation",
                old_value: 0,
                new_value: 0
            },
            user: {
                first_name: "Adam",
                icon: "Good looking picture",
                id: 1,
                last_name: "What's my name"
            }
        },
        {
            comments: [
                {
                    date: "2019/12/31",
                    first_name: "Eve",
                    icon: "Good looking picture",
                    last_name: "What's my name",
                    message: "En faite j'aime pas",
                    user_id: 2,
                    comment_id:1
                },
                {
                    date: "2019/12/30",
                    first_name: "Eve",
                    icon: "Good looking picture",
                    last_name: "What's my name",
                    message: "Trop bien ce projet!",
                    user_id: 2,
                    comment_id:2
                }
            ],
            date: "2019/12/31",
            id: 0,
            project: {
                id: 1,
                logo: "Nice picture",
                title: "Invite Eve to dinner twice a week"
            },
            update: {
                date: "2019/12/20",
                message: "",
                old_value: 0.8,
                new_value: 1
            },
            user: {
                first_name: "Adam",
                icon: "Good looking picture",
                id: 1,
                last_name: "What's my name"
            }
        },
        {
            comments: [],
            date: "2019/12/31",
            id: 1,
            project: {
                id: 2,
                logo: "Nice picture",
                title: "Invite Eve to dancing twice a week"
            },
            update: {
                date: "2019/12/20",
                message: "Nothing to show!",
                old_value: 0.2,
                new_value: 1
            },
            user: {
                first_name: "Adam",
                icon: "Good looking picture",
                id: 1,
                last_name: "What's my name"
            }
        },
        {
            comments: [],
            date: "2019/12/31",
            id: 2,
            project: {
                id: 3,
                logo: "Nice picture",
                title: "Invite Eve to the theater twice a week"
            },
            update: {
                date: "1995/12/30",
                message: "Project creation",
                old_value: 0.2,
                new_value: 0.3
            },
            user: {
                first_name: "GERARD",
                icon: "Good looking picture",
                id: 1,
                last_name: "What's my name"
            }
        }

];

class HomePage extends React.Component{

  constructor(props) {
     super(props)
     this.state = {
       isLoading: false
   }
   }

componentDidMount(){
    update.update_user(this)
    update.update_feed(this)
}

componentDidUpdate(prevProps){
  if(prevProps.user.id != this.props.user.id){
    update.update_projects(this)
  }
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
      projects={this.props.projects}
      displayDetailForProject={this._displayDetailForProject}/>
      {this._renderSeparatortop()}
    </View>
  )
}



  render() {
    return (
        <FlatList
          data={this.props.user.feed}
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
              UsernameIsDisplayed={false}
              update={item.update}/>
            </HomepagePostItem>}
          />
    )
  }
}

/*render() {
    return (
      <View>
      <Text> WORK IN PROGRESS </Text>
      </View>)
  }
}*/


const mapStateToProps = (state) => {
  return {
    projects : state.handleProject.projects,
    user: state.handleUser.user,
    loggedid: state.handleLogin.id,
  }
}
export default connect(mapStateToProps)(HomePage)
