// Navigation/Navigation.js
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import React from 'react'
import {StyleSheet, Image } from 'react-native'

import HomePage from '../Components/Pages/HomePage'
import ProfilePage from '../Components/Pages/ProfilePage'
import ProjectPage from '../Components/Pages/ProjectPage'
import TestComponent from '../Components/Pages/TestComponent'
import CreateNewProjectPage from '../Components/Pages/CreateNewProjectPage'
import ModifyProjectPage from '../Components/Pages/ModifyProjectPage'
import FriendsListPage from '../Components/Pages/FriendsListPage'
import Calendar from '../Components/Pages/Calendar'


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
})

const HomeStackNavigator = createStackNavigator({
    HomePage: {
    screen:HomePage,
    navigationOptions: {
      title: 'Home'
    }
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
   TestComponent:{
     screen:TestComponent,
     navigationOptions:{
       tabBarIcon:()=>{
         return <Image
           source={require('../Images/search.png')}
           style={styles.icon}/>
         }
       }
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
