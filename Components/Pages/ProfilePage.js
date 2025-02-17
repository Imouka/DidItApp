
import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet,Text, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native'
import ProfileHeader from '../../Components/Headers/ProfileHeader'
import ButtonBigImageAndText from '../../Components/ButtonBigImageAndText'
import ProjectItem from '../../Components/ProjectItem'
import ProjectItem_LargeScreen from '../../Components/ProjectItem_LargeScreen'
import update from '../../Utils/Updaters.js';
import {imageStyles} from '../../Styles/Image_styles'
import {policeStyles} from '../../Styles/police_styles'

import DeviceInfo from 'react-native-device-info';

class ProfilePage extends React.Component {

 constructor(props) {
    super(props)
    this.state = {
      isLoading: false
  }
  }

  componentDidMount(){
    update.update_user(this, this.props.loggedid )
    update.update_projects(this, this.props.user.id)
  }

  componentDidUpdate(prevProps){
    if(prevProps.user.id != this.props.user.id){
        update.update_projects(this, this.props.user.id)
    }
  }


  _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={imageStyles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }

  _displayDetailForProject=(project_id)=>{
    this.props.navigation.navigate('ProjectPage',{project_id : project_id})
    }

_displayCreateNewProjectPage= () => {
  this.props.navigation.navigate('CreateNewProjectPage')

}

_displayFriendsListPage=()=>{
  this.props.navigation.navigate('FriendsListPage')
}

_displayEditProfilePage=()=>{
  this.props.navigation.navigate('EditProfilePage')
}

_renderSeparator = () => {
return (
  <View
    style={{
      marginTop:'1%',
      marginBottom:'1%',
      height: 1,
      width: "86%",
      backgroundColor: "#CED0CE",
      marginLeft: "3%"
    }}
  />
);
};

_renderHeader = () => {
return (
<View>
  <View>
      <ProfileHeader
       user={this.props.user}
       scrollToIndex={this._scrollToIndex}
       displayFriendsList={this._displayFriendsListPage}
       notification_icon={true}/>
  </View>
  <TouchableOpacity
  style={styles.button_edit_project}
  onPress={this._displayEditProfilePage}>
    <Text
    style={policeStyles.standard_italic_underlined}>
    {"Edit profile"}
    </Text>
  </TouchableOpacity>
  <View
  style={styles.button_create_new_project}>
     <ButtonBigImageAndText
     text="Create a new project"
     imageSource= {require("../../Images/plus.png")}
     action={this._displayCreateNewProjectPage}/>
  </View>
</View>
)
};

_scrollToIndex = () => {
  if (this.props.user.nb_projects != 0) {
    this.flatListRef.scrollToIndex({animated: true, index:0});
  }
}

_renderProjectItems(){
  if (DeviceInfo.isTablet()) {
    return (
      <FlatList
        data={this.props.projects}
        keyExtractor={(item) => item.id.toString()}
        ref={(ref) => { this.flatListRef = ref; }}
        ItemSeparatorComponent={this._renderSeparator}
        ListHeaderComponent={this._renderHeader}
        renderItem={({item}) =>
        <ProjectItem_LargeScreen
            project={item}
            displayDetailForProject={this._displayDetailForProject}
        />}
      />
    )
  }
 else {
    return (
      <FlatList
        data={this.props.projects}
        keyExtractor={(item) => item.id.toString()}
        ref={(ref) => { this.flatListRef = ref; }}
        ItemSeparatorComponent={this._renderSeparator}
        ListHeaderComponent={this._renderHeader}
        renderItem={({item}) =>
        <ProjectItem
            project={item}
            displayDetailForProject={this._displayDetailForProject}
        />}
      />
    )
  }
}

  render() {
    return (
      <View
      style={styles.main_container}>
      {this._displayLoading()}
      {this._renderProjectItems()}
        </View>
    )
  }
}
// imageSource='../Images/plus.png'/>

const styles = StyleSheet.create({
  main_container: {
    marginTop: "5%",
    marginLeft:"2%" ,
    flex:1,
  },
  button_create_new_project:{
    marginTop: "6%",
  },
  button_edit_project:{
    marginTop: "2%",
  },
})

const mapStateToProps = (state) => {
  return {
    projects : state.handleProject.projects,
    user: state.handleUser.user,
    loggedid: state.handleLogin.id,
  }
}

export default connect(mapStateToProps)(ProfilePage)
