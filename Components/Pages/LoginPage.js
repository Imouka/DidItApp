import React, {Component} from 'react';
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native';
import { getUserFromId, postLogin} from '../../API/APITest'
import Navigation from '../../Navigation/Navigation'
//var FBLoginButton = require('../../Components/FBLoginButton');
//import FBLoginButton from '../../Components/FBLoginButton';
import {LoginButton, AccessToken} from 'react-native-fbsdk'
import { Button } from 'react-native'
import { LoginManager } from 'react-native-fbsdk'


 class LoginPage extends Component {

  state = {
    text: ''
  };



   _login(){
     console.log(this.state.text)
      getUserFromId(this.state.text).then(data => {
        this.props.dispatch({ type: "LOGIN", value: {id:this.state.text,logged:true} })
      })
    }

    login2 = (id) => {
       // Faire une API qui se connecte à facebook et récupére les informations renvoyer par Facebook (token + id)
       //
         this.props.dispatch({ type: "LOGIN", value: {id:id,logged:true} })

  //  this.props.dispatch({ type: "LOGIN", value: {id:userId,logged:true} })

     }


     loginFbResult(data) {
       {
          const { accessToken } = data
          fetch('https://graph.facebook.com/v2.5/me?fields=first_name,last_name&access_token=' + accessToken)
          .then((response) => {
          console.log("First response") ;
          return response.json();
        }
        )
          .then((json) => {
            postLogin(json['id'],json['first_name'],json['last_name']).then((response) => this.login2(response.id))

          })
          .catch((error) => {
              console.log('Login failed with error: ' + error);
          })
        }
       }

    handleFacebookLogin(loginAction) {
    LoginManager.logInWithPermissions(['public_profile'])
    .then(
      (result)=>{
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) =>loginAction(data))
         };
      }
     );
   }

  render(){
    if (this.props.logged){
      return (
        <Navigation/>
      )
    }
    else {
      return (
        <View
        style={{
         backgroundColor: "skyblue",
         borderBottomColor: '#000000',
         borderBottomWidth: 1,
       }}>
          <TextInput
            label='id'
            value={this.state.text}
            onChangeText={text => this.setState({text})}
            onSubmitEditing={() => this._login()}
          />
          <View>
          <Button
          onPress={() => this.handleFacebookLogin(this.loginFbResult.bind(this))}
          title="Continue with fb"
          color="#4267B2"
        />
        </View>
        </View>
      )
    }
  }
}



const mapStateToProps = (state) => {
  return {
    logged: state.handleLogin.logged,
    id : state.handleLogin.id,
  }
}

export default connect(mapStateToProps)(LoginPage)


//AppRegistry.registerComponent('LoginPage', () => LoginPage);
