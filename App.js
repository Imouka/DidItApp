// App.js

import React from 'react'
import TestComponent from './Components/Pages/TestComponent'
import ProfilePage from './Components/Pages/ProfilePage'
import Navigation from './Navigation/Navigation'
import { MenuProvider } from 'react-native-popup-menu';

export default class App extends React.Component {
  render() {
    return (
      <MenuProvider>
       <Navigation/>
      </MenuProvider>
    )
  }
}
