// App.js
/*
import React from 'react'
import TestComponent from './Components/Pages/TestComponent'
import ProfilePage from './Components/Pages/ProfilePage'
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
        <Navigation/>
      </Provider>
      </MenuProvider>
    )
  }
}

*/

import React from 'react';
import {View} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk'


const App: () => React$Node = () => {
  return (
    <View>
      <LoginButton
      onLoginFinished={
        (error, result) =>{
          if (error){
            console.log("login has error: "+ result.error);
          } else if (result.isCancelled){
            console.log("login is cancelled");
          } else {
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                console.log(data.accessToken.toString())
              }
            )
          }
        }
      }
      onLogoutFinished={() => console.log("logout")} />
    </View>
  );
};

export default App;
