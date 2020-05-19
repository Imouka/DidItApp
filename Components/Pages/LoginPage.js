import React, {Component} from 'react';
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import { getUserFromId, postLogin} from '../../API/APITest'
import Navigation from '../../Navigation/Navigation'
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk'
import moment from 'moment'


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
    this.props.dispatch({ type: "LOGIN", value: {id:id,logged:true} })
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
      postLogin(json['id'],json['first_name'],json['last_name'], moment(new Date()).format("YYYY-MM-DD HH:mm:ss")).then((response) => this.login2(response.id))

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
      style={styles.main_container}>
        <Image
        style={styles.main_image}
        source={require('../../Images/main_page.png')}/>
        <Button
        onPress={() => this.handleFacebookLogin(this.loginFbResult.bind(this))}
        title="Continue with fb"
        color="#4267B2"/>
        <View>
          <TextInput
          label='id'
          value={this.state.text}
          onChangeText={text => this.setState({text})}
          onSubmitEditing={() => this._login()}/>
        </View>
      </View>
    )
  }
}
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor:"white",
  },
  main_image:{
    //width:400,
}
})

const mapStateToProps = (state) => {
  return {
    logged: state.handleLogin.logged,
    id : state.handleLogin.id,
  }
}

export default connect(mapStateToProps)(LoginPage)
