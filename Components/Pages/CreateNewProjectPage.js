import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-elements'
import ProjectIcon from '../../Components/ProjectIcon';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import{postCreateNewProject, getProjectFromUserId, postUpdateProjectImage } from '../../API/APITest'
import update from '../../Utils/Updaters.js';
import {imageStyles} from '../../Styles/Image_styles'
import {policeStyles} from '../../Styles/police_styles'
import ImagePicker from 'react-native-image-picker'
import { Input} from 'react-native-elements'


class CreateNewProjectPage extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
        avatar: require('../../Images/project.png'),
       title:"",
       description:"",
       selectedStartDate: null,
       selectedEndDate: null,
       targetValue:null,
       stepSize:null,
       stepNumber:null,
       stepSizeTmp:null,
       isLoading:false,
       changed_avatar:false,

        error_title:"",
        error_target:"",
        error_step:"",
     };
      this.edit_project_icon = this.edit_project_icon.bind(this)
   }

   createFormData = (photo) => {
     const data = new FormData();
     data.append("file", {
       name: photo.fileName,
       type: photo.type,
       uri:
         Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
     });
     return data;
   };


   edit_project_icon(){
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
         //let requireSource = { uri: response.uri }
         this.setState({
           avatar: response,
           changed_avatar:true,
         })
       }
     })
   }

  _displayCalendar=(selectedStartDate,selectedEndDate )=> {
    this.props.navigation.navigate('Calendar',{selectedStartDate :selectedStartDate , selectedEndDate: selectedEndDate,  returnPage:"CreateNewProjectPage", selectableStartDate:true})
  }

  _displayProfilePage=()=>{
    this.props.navigation.navigate('ProfilePage')
    }


   componentDidUpdate(prevProps){
     newHasParam = (typeof this.props.navigation.state.params === "object")
     if(newHasParam){
       if(this.state.selectedStartDate != this.props.navigation.state.params.selectedStartDate ){
         this.setState ({
           selectedStartDate:this.props.navigation.state.params.selectedStartDate
         })
       }
       if(this.state.selectedEndDate != this.props.navigation.state.params.selectedEndDate ){
         this.setState ({
           selectedEndDate:this.props.navigation.state.params.selectedEndDate
         })
       }
     }
  }

  _displaydate(date){
    if (date==null){
      return (
        <Text style={policeStyles.standard_text_disabled}>
         {"   Select date"}
        </Text>
      )
    }
    else {
      return (
        <Text  style={policeStyles.standard_text}>
         {"   "+moment(new Date(date)).format('DD/MM/YYYY')}
        </Text>
      )
    }
  }

  _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={imageStyles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }

_display_number_of_steps(target_val, step_size){
    if (! isNaN(Math.round(target_val / step_size))){
      return (
        <Text style={policeStyles.standard_text_disabled}>
         {"Your project will be divided in "+ Math.round(target_val / step_size)+" steps"}
        </Text>
      )
    }
}

_manageDate(date){
  return (
    moment(new Date(date)).format("YYYY-MM-DD HH:mm:ss")
  )
}

_default_step_size=(target_val)=> {
       this.setState({
         stepSize: Math.max(1, Math.round(target_val /10)).toString()
       });
  }

_check_form=()=>{
  var valid_form =this._valid_title() && this._valid_description() && this._valid_dates() && this._valid_target_value() && this._valid_step_size()
  if ( valid_form && this.state.changed_avatar) {
    this.setState({ isLoading: true })
    postCreateNewProject(this.props.user.id, this.state.title,this.state.description,this._manageDate(this.state.selectedStartDate),this._manageDate(this.state.selectedEndDate), this.state.targetValue, this.state.stepSize, moment(new Date()).format("YYYY-MM-DD HH:mm:ss"))
    .then(data =>{
      console.log(data)
      return postUpdateProjectImage(data.id,this.createFormData(this.state.avatar))})
    .then(data => {
           this.setState({ isLoading: false })
           update.update_projects(this, this.props.user.id)
           update.update_user(this,this.props.loggedid )
           this._displayProfilePage()
           Alert.alert("New project created ","your new project has been created")
          })
    .catch(data => {
            this.setState({ isLoading: false })
            Alert.alert("Error", "The action could not be performed, please try again later")
          })
   }
   else if (valid_form){
     this.setState({ isLoading: true })
     postCreateNewProject(this.props.user.id, this.state.title,this.state.description,this._manageDate(this.state.selectedStartDate),this._manageDate(this.state.selectedEndDate), this.state.targetValue, this.state.stepSize, moment(new Date()).format("YYYY-MM-DD HH:mm:ss"))
     .then(data => {
            this.setState({ isLoading: false })
            update.update_projects(this, this.props.user.id)
            update.update_user(this,this.props.loggedid )
            this._displayProfilePage()
            Alert.alert("New project created ","your new project has been created")
           })
     .catch(data => {
             this.setState({ isLoading: false })
             Alert.alert("Error", "The action could not be performed, please try again later")
           })
   }
  else if (!this._valid_dates()){
      Alert.alert("Something went wrong ", " Please enter start and end dates")
    }

}

_valid_title=()=>{
  if  ((this.state.title).replace(/\s/g, '').length){
    this.setState({
      error_title: ''
    })
    return (true)
  }
  else {
    this.setState({
      error_title:  'Please enter a valid title'
    })
    return (false)
  }
}

_valid_description=()=>{
    return (true)
  }

_valid_dates=()=>{
  if ((this.state.selectedStartDate != null ) && (this.state.selectedEndDate != null )) {
    return (true)
  }
  else {
    console.log("dates NOT ok")
    return (false)
  }
  }

_valid_target_value=()=>{
    if ((this.state.targetValue != null) && (! isNaN(this.state.targetValue)) &&  (1<= this.state.targetValue)) {
      this.setState({
        error_target:''
      })
      return (true)
    }
    else {
      this.setState({
        error_target: 'Please enter a number greater or equal to 1'
      })
      return (false)
    }
  }

_valid_step_size=()=>{
    if ((this.state.stepSize !== null) && (! isNaN(this.state.stepSize)) &&  (1<= Number.parseInt(this.state.stepSize)) &&   (Number.parseInt(this.state.targetValue) >= Number.parseInt(this.state.stepSize))) {
      this.setState({
      error_step: ''
      })
      return (true)
    }
    else {
      this.setState({
      error_step: 'Please enter a number between 1 and the target value'
      })
      return (false)
    }
  }

  render() {
    return (
        <ScrollView style={styles.Container_scrollView} >
        <View style={styles.main_container}>
            <View   style={styles.row_container}>
              <ProjectIcon
              imageSource={this.state.avatar}
              iseditable="true"
              action={this.edit_project_icon}/>
            </View>
          <View style={styles.sub_container}>
            <Input
            containerStyle={styles.input_container}
            inputStyle={ policeStyles.standard_text}
            labelStyle={policeStyles.label_text_input}
            label='Project title'
            placeholder={'Insert your project title'}
            onChangeText={title=>this.setState({title})}
            onEndEditing={() => this._valid_title()}
            errorStyle={{ color: 'red' }}
            errorMessage={this.state.error_title}/>
          </View>
          <View style={styles.sub_container}>
            <Input
            inputStyle={ policeStyles.standard_text}
            multiline={true}
            blurOnSubmit={true}
            labelStyle={policeStyles.label_text_input}
            containerStyle={styles.input_container}
            label='Project description'
            placeholder={'Insert a description for your project'}
            onChangeText={description=>this.setState({  description})}/>
          </View >

          <View style={styles.sub_container}>
              <Text style={policeStyles.description_text_disabled}>
                &#10171; {"Define your project dates"}
              </Text>
              <View   style={styles.row_container_dates}>
                <TouchableOpacity
                  style={styles.bouton_date}
                  onPress={() =>  this._displayCalendar(this.state.selectedStartDate,this.state.selectedEndDate)}>
                  <Text style={policeStyles.label_text_input}>{"From:"}  </Text>
                  {this._displaydate(this.state.selectedStartDate)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bouton_date}
                  onPress={() =>  this._displayCalendar(this.state.selectedStartDate,this.state.selectedEndDate)}>
                  <Text style={policeStyles.label_text_input}>{"To:"}  </Text>
                  {this._displaydate(this.state.selectedEndDate)}
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.sub_container}>
              <Text style={policeStyles.description_text_disabled}>
              &#10171; {"Specify a quantitative target for your project"}
              </Text>
              <View   style={styles.row_container}>
                <View style={styles.left} >
                  <Input
                  inputStyle={ policeStyles.standard_text}
                  labelStyle={policeStyles.label_text_input}
                  containerStyle={styles.input_container}
                  label='Target value'
                  keyboardType="numeric"
                  onChangeText={(targetValue)=>this.setState({targetValue})}
                  onEndEditing={() => {this._default_step_size(this.state.targetValue),this._valid_target_value()}}
                  errorStyle={{ color: 'red' }}
                  errorMessage={this.state.error_target}/>
                </View>
                <View style={styles.right} >
                  <Text style={policeStyles.standard_text_disabled}>
                  {"eg: Choose 8 if you wnat to read 8 books"}
                  </Text>
                </View>
              </View>
          </View>
          <View style={styles.sub_container}>
              <Text style={policeStyles.description_text_disabled}>
                &#10171;  {"Specify a size for the steps of your project"}
              </Text>
              <View   style={styles.row_container}>
                <View style={styles.left} >
                <Input
                inputStyle={ policeStyles.standard_text}
                labelStyle={policeStyles.label_text_input}
                containerStyle={styles.input_container}
                label='Step size'
                keyboardType="numeric"
                placeholder={this.state.stepSize}
                onChangeText={(stepSizeTmp)=>this.setState({stepSizeTmp})}
                onEndEditing={()=>{this.setState({stepSize:this.state.stepSizeTmp}),this._valid_step_size()}}
                errorStyle={{ color: 'red' }}
                errorMessage={this.state.error_step}/>
                </View>
                <View style={styles.right} >
                   {  this._display_number_of_steps(this.state.targetValue, this.state.stepSize)}
                </View>
              </View>
          </View>
          <View  style={styles.sub_container}>
            <Button
            title= "Save project"
            onPress={this._check_form  }
            buttonStyle={{  backgroundColor: "#40AFBF"}}
            titleStyle={[policeStyles.medium_text_center,{   color: "white" }]}
            />
          </View>
            {this._displayLoading()}
        </View>
        </ScrollView>

    )
  }
}


const styles = StyleSheet.create({
  main_container: {
    marginLeft:"3%" ,
    marginRight:"3%" ,
    flex:1,
    marginTop:"2%",
   justifyContent :'space-between',
    },
  Container_scrollView: {
   flex:1,
   backgroundColor:"#E5F1F3",
      },
  row_container: {
   flex:1,
   flexDirection: 'row',
   alignItems:'center',
   },
   row_container_dates: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
    },
  bouton_date:{
   flex:0.45,
   paddingBottom:"1%",
   paddingTop:"1%",
   paddingLeft:"5%",
   borderRadius:10,
   backgroundColor:'white'
 },
 sub_container:{
   flex:1,
   marginTop:'4%'
 },
 left:{
   flex :0.9,
 },
 right:{
   marginLeft:"3%",
   flex :2
 },
input_container:{
   backgroundColor:'white',
   borderRadius:10,
},
  })

  const mapStateToProps = (state) => {
    return {
      projects : state.handleProject.projects,
      user: state.handleUser.user,
      loggedid: state.handleLogin.id,
    }
  }

export default connect(mapStateToProps)(CreateNewProjectPage)
