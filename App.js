// App.js
import React from 'react'
import Navigation from './Navigation/Navigation'
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'


import LoginPage from './Components/Pages/LoginPage'


export default class App extends React.Component {
  render() {
    return (
      <MenuProvider>
      <Provider store={Store}>
        <LoginPage/>
      </Provider>
      </MenuProvider>
    )
  }
}
