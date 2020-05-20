import React from 'react'
import {connect} from 'react-redux'
import { Input} from 'react-native-elements'
import {View,StyleSheet,Text, TouchableOpacity, KeyboardAvoidingView,ScrollView} from 'react-native'
import {Button} from 'react-native-elements'
import EditableUserIcon from '../../Components/EditableUserIcon'
import ImagePicker from 'react-native-image-picker'
import {imageStyles} from '../../Styles/Image_styles'
import {policeStyles} from '../../Styles/police_styles'


class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: require("../../Images/user.png"),
      first_name:this.props.user.first_name,
      last_name:this.props.user.last_name,
      description:this.props.user.description,

      error_first_name:'',
      error_last_name:'',
      error_desc:'',
    }
    this.edit_profile_icon = this.edit_profile_icon.bind(this)
  }

  displayProfilePage=()=>{
    this.props.navigation.navigate('ProfilePage')
  }

  edit_profile_icon(){
    console.log("Edit project icon")
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('L\'utilisateur a annulé')
      }
      else if (response.error) {
        console.log('Erreur : ', response.error)
      }
      else {
        console.log('Photo : ', response.uri )
        let requireSource = { uri: response.uri }
        this.setState({
          avatar: requireSource
        })
      }
    })
  }

  _check_form=()=>{
    if (this._valid_first_name()  && this._valid_last_name() && this._valid_description()) {
      this.setState({
        error_first_name: '',
        error_last_name: '',
        description: ''
      })
      this.displayProfilePage()
    }
    else {
      if (!this._valid_first_name()){
        this.setState({
          error_first_name: 'Please enter a valid first name'
        })
      }
      if (!this._valid_last_name()){
        this.setState({
          error_last_name: 'Please enter a valid last name'
        })
      }
      if (!this._valid_description()){
        this.setState({
          error_desc: 'Please enter a valid description'
        })
      }
    }
  }

  _valid_first_name(){
    console.log((this.state.first_name))
    console.log((this.state.first_name).replace(/\s/g, '').length)
    if ((this.state.first_name).replace(/\s/g, '').length){
      return (true)
    }
    else {
      return (false)
    }
  }

  _valid_description(){
    return (true)
  }

  _valid_last_name(){
    if ((this.state.last_name).replace(/\s/g, '').length){
      return (true)
    }
    else {
      return (false)
    }
  }

  render() {
    return (
      <ScrollView >
        <View style={styles.main_container}>
          <View
          style={styles.user_icon_container}>
            <EditableUserIcon
          imageSource= {this.state.avatar}
          action={this.edit_profile_icon}/>
          </View>
          <Input
          containerStyle={styles.input_container}
          inputStyle={ policeStyles.standard_text}
          labelStyle={policeStyles.label_text_input}
          label='First name'
          placeholder={this.props.user.first_name}
          onChangeText={value => this.setState({ first_name: value })}
          errorStyle={{ color: 'red' }}
          errorMessage={this.state.error_first_name}/>
          <Input
          containerStyle={styles.input_container}
          inputStyle={ policeStyles.standard_text}
          labelStyle={policeStyles.label_text_input}
          label='Last name'
          placeholder={this.props.user.last_name}
          onChangeText={value => this.setState({ last_name: value })}
          errorStyle={{ color: 'red' }}
          errorMessage={this.state.error_last_name}/>
          <Input
          containerStyle={styles.input_container}
          inputStyle={ policeStyles.standard_text}
          labelStyle={policeStyles.label_text_input}
          label='Description'
          placeholder={this.props.user.description}
          onChangeText={value => this.setState({ description: value })}
          errorStyle={{ color: 'red' }}
          errorMessage={this.state.error_desc} />
        </View>
        <View>
          <Button
          title= "Save Profile"
          onPress={this._check_form  }
          buttonStyle={{  backgroundColor: "#40AFBF"}}
          titleStyle={[policeStyles.medium_text_center,{   color: "white" }]}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    alignItems:'center',
    marginTop:"5%",
  },
  user_icon_container:{
    marginBottom:"10%",
  },
  input_container:{
    marginBottom:"5%",
  },
})

const mapStateToProps = (state) => {
  return {
    user: state.handleUser.user,
  }
}

export default connect(mapStateToProps)(EditProfilePage)
