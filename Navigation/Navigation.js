// Navigation/Navigation.js
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import React from 'react'
import {StyleSheet, Image, TouchableOpacity } from 'react-native'

import HomePage from '../Components/Pages/HomePage'
import ProfilePage from '../Components/Pages/ProfilePage'
import ProjectPage from '../Components/Pages/ProjectPage'
import TestComponent from '../Components/Pages/TestComponent'
import CreateNewProjectPage from '../Components/Pages/CreateNewProjectPage'
import ModifyProjectPage from '../Components/Pages/ModifyProjectPage'
import FriendsListPage from '../Components/Pages/FriendsListPage'
import Calendar from '../Components/Pages/Calendar'
import Notifications from '../Components/Notifications'
import EditProfilePage from '../Components/Pages/EditProfilePage'
import LoginPage from '../Components/Pages/LoginPage'

import FriendProfilePage from '../Components/Pages/OtherUserPages/FriendProfilePage'
import FriendProjectPage from '../Components/Pages/OtherUserPages/FriendProjectPage'

const ProfileStackNavigator = createStackNavigator({
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      title: 'Your Profile'
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
 },
 Calendar:{
   screen : Calendar,
 },
 EditProfilePage:{
   screen : EditProfilePage,
 },
})

const SearchStackNavigator = createStackNavigator({
  FriendsListPage: {
    screen: FriendsListPage,
    navigationOptions: {
      title: 'Search'
    }
  },
  FriendProfilePage: {
   screen: FriendProfilePage,
 },
})

const HomeStackNavigator = createStackNavigator({
    HomePage: {
    screen:HomePage,
    navigationOptions: {
      headerTitle: (
           <Image style={{ width: 150, height: 40 }} source={require('../Images/app_logo2.png')}/>
            ),
      headerRight: (navigation) => {
            return <Notifications />;
          },
    }
  },
  ProjectPage: {
   screen: ProjectPage,
 },
})

const LoginStackNavigator = createStackNavigator({
    LoginPage: {
    screen:LoginPage,
    navigationOptions: {
      title: 'Login'
    }
  },
  HomePage: {
   screen: HomePage,
 },
})

const FriendProfileStackNavigator = createStackNavigator({
  FriendProfilePage: {
    screen: FriendProfilePage,
    navigationOptions: {
      title: 'Your Profile'
    }
  },
  FriendProjectPage: {
   screen: FriendProjectPage,
 },
 FriendsListPage:{
   screen : FriendsListPage,
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
      }
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
      width: 20,
      height:20,
  },
})
export default createAppContainer(DidItTabNavigator)
