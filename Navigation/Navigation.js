// Navigation/Navigation.js
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import React from 'react'
import {StyleSheet, Image } from 'react-native'

import HomePage from '../Components/HomePage'
import ProfilePage from '../Components/ProfilePage'
import ProjectPage from '../Components/ProjectPage'


const ProfileStackNavigator = createStackNavigator({
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      title: 'Your Profile'
    }
  },
  ProjectPage: {
   screen: ProjectPage,
 }
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
    }
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
/*
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import React from 'react'
import {StyleSheet, Image } from 'react-native'

import Search from '../Components/Search'
import Favorites from '../Components/Favorites'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
   screen: FilmDetail
  }
})


const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
   screen: FilmDetail
  }
})



const MoviesTabNavigator=createBottomTabNavigator(
  {
  Search:{
    screen:SearchStackNavigator,
    navigationOptions:{
      tabBarIcon:()=>{
        return <Image
          source={require('../Images/ic_search.png')}
          style={styles.icon}/>
      }
    }
  },
  Favorites:{
    screen:Favorites,
    navigationOptions:{
      tabBarIcon:()=>{
        return <Image
          source={require('../Images/ic_favorite.png')}
          style={styles.icon}/>
      }
     }
    }
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
      width: 30,
      height:30,
  },
})


export default createAppContainer(MoviesTabNavigator)*/
