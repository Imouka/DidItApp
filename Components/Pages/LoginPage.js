import React, {Component} from 'react';
import {connect} from 'react-redux'
import {AppRegistry, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { getUserFromId, postLogin} from '../../API/APITest'
import Navigation from '../../Navigation/Navigation'
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk'
import moment from 'moment'
import {imageStyles} from '../../Styles/Image_styles'
import {Button} from 'react-native-elements'
import {policeStyles} from '../../Styles/police_styles'

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
        style={imageStyles.home_page_image}
        source={require('../../Images/main_page.png')}/>
          <Button
          title= "Continue with fb"
          raised={true}
          onPress={() => this.handleFacebookLogin(this.loginFbResult.bind(this))}
          buttonStyle={{  backgroundColor: "#4267B2", paddingLeft:"5%",  paddingRight:"5%"}}
          titleStyle={[policeStyles.medium_text_center,{   color: "white" }]}
          />

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
//  source={{uri : 'https://diditapp.s3.eu-west-3.amazonaws.com/project_icons/1800x1200_cat_relaxing_on_patio_other.jpg'}}/>
//  source={require('../../Images/main_page.png')}/>

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor:"white",
  },

})

const mapStateToProps = (state) => {
  return {
    logged: state.handleLogin.logged,
    id : state.handleLogin.id,
  }
}

export default connect(mapStateToProps)(LoginPage)
