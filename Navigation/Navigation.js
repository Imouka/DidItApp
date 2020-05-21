// Navigation/Navigation.js
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import React from 'react'
import {StyleSheet, Image, TouchableOpacity,Text} from 'react-native'

import HomePage from '../Components/Pages/HomePage'
import ProfilePage from '../Components/Pages/ProfilePage'
import ProjectPage from '../Components/Pages/ProjectPage'
import CreateNewProjectPage from '../Components/Pages/CreateNewProjectPage'
import ModifyProjectPage from '../Components/Pages/ModifyProjectPage'
import FriendsListPage from '../Components/Pages/FriendsListPage'
import Calendar from '../Components/Pages/Calendar'
import Notifications from '../Components/Notifications'
import EditProfilePage from '../Components/Pages/EditProfilePage'
import LoginPage from '../Components/Pages/LoginPage'
import FriendsFriendListPageTitle from '../Components/FriendsFriendListPageTitle'


import FriendProfilePage from '../Components/Pages/OtherUserPages/FriendProfilePage'
import FriendProjectPage from '../Components/Pages/OtherUserPages/FriendProjectPage'
import FriendFriendsListPage from '../Components/Pages/OtherUserPages/FriendFriendsListPage'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from '../Utils/react-native-responsive-screen'


const ProfileStackNavigator = createStackNavigator({
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      title: 'Your Profile',
      headerTitleStyle: {
         fontSize:  Math.min(hp('3.2%'),25)
      },
    }

  },
  ProjectPage: {
   screen: ProjectPage,
 },
 CreateNewProjectPage:{
   screen: CreateNewProjectPage,
 },
 ModifyProjectPage:{
   screen: ModifyProjectPage,
 },
 FriendsListPage:{
   screen : FriendsListPage,
   navigationOptions: {
     title: 'Your Friends',
    headerTitleStyle: {
       fontSize:  Math.min(hp('3.2%'),25)
    },
   },

 },
 Calendar:{
   screen : Calendar,
 },
 EditProfilePage:{
   screen : EditProfilePage,
 },
 FriendProfilePage: {
   screen: FriendProfilePage,
 },
 FriendProjectPage: {
  screen: FriendProjectPage,
},
FriendFriendsListPage:{
  screen : FriendFriendsListPage,
  navigationOptions: {
    headerTitle: (navigation) => {
          return (<FriendsFriendListPageTitle/>) ;
        },
  }
},


})

const SearchStackNavigator = createStackNavigator({
  FriendsListPage: {
    screen: FriendsListPage,
    navigationOptions: {
      title: 'Your Friends',
      headerTitleStyle: {
         fontSize:  Math.min(hp('3.2%'),25)
      },
    }
  },
  FriendProfilePage: {
   screen: FriendProfilePage,
 },
 FriendProfilePage: {
   screen: FriendProfilePage,
 },
 FriendProjectPage: {
  screen: FriendProjectPage,
},
FriendFriendsListPage:{
  screen : FriendFriendsListPage,
  navigationOptions: {
    headerTitle: (navigation) => {
          return (<FriendsFriendListPageTitle/>) ;
        },
  }
},
ProjectPage: {
 screen: ProjectPage,
},
})

const HomeStackNavigator = createStackNavigator({
    HomePage: {
    screen:HomePage,
    navigationOptions: {
      headerTitle: (
           <Image style={{ width:Math.min(hp( '22%')), height:Math.min(hp('6.7%')) }} source={require('../Images/app_logo_.png')}/>
            ),
    /*  headerRight: (navigation) => {
            return <Notifications />;
          },*/
    }
  },
    ProjectPage: {
     screen: ProjectPage,
   },
   ProfilePage: {
     screen: ProfilePage,
     navigationOptions: {
       title: 'Your Profile',
       headerTitleStyle: {
          fontSize:  Math.min(hp('3.2%'),25)
       },
     }
   },
   FriendProfilePage: {
     screen: FriendProfilePage,
   },
   FriendProjectPage: {
    screen: FriendProjectPage,
  },


})


const DidItTabNavigator=createBottomTabNavigator(
  {
  HomePage:{
    screen:HomeStackNavigator,
    navigationOptions:{
      tabBarIcon:()=>{
        return <Image
          source={require('../Images/homepage.png')}
          style={styles.icon}/>
      }
    }
  },
  ProfilePage:{
    screen:ProfileStackNavigator,
    navigationOptions:{
      tabBarIcon:()=>{
        return <Image
          source={require('../Images/user.png')}
          style={styles.icon}/>
      },
     }
   },
   FriendsListPage:{
     screen:SearchStackNavigator,
     navigationOptions:{
       tabBarIcon:()=>{
         return <Image
           source={require('../Images/search.png')}
           style={styles.icon}/>
         },
      unmountOnBlur: true,
        },
  },
  },




  {
  tabBarOptions:{
    showLabel: false,
    showIcon: true,
    activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
    inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
  }
})

const styles = StyleSheet.create({
    icon: {
      width:  Math.min(hp('3%'),25),
      height: Math.min(hp('3%'),25),
  },
})




export default createAppContainer(DidItTabNavigator)
