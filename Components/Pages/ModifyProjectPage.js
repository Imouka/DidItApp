import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-elements'
import ProjectIcon from '../../Components/ProjectIcon';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import {postModifyProject, postUpdateProjectImage } from '../../API/APITest'
import update from '../../Utils/Updaters.js';
import ImagePicker from 'react-native-image-picker'
import { Input} from 'react-native-elements'
import {imageStyles} from '../../Styles/Image_styles'
import {policeStyles} from '../../Styles/police_styles'

class ModifyProjectPage extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       avatar: {uri:this.props.navigation.state.params.project.logo},
       title:"",
       description:"",
       selectedStartDate: null,
       selectedEndDate: null,
       targetValue:"",
       stepSize:"null",
       stepNumber:"null",
       isLoading:false,

       error_title:"",
        changed_avatar:false,
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

   componentDidMount(){
    this.setState ({
         title:this.props.navigation.state.params.project.title,
         description:this.props.navigation.state.params.project.description,
         selectedStartDate:this.props.navigation.state.params.project.project_start_date,
         selectedEndDate:this.props.navigation.state.params.project.project_end_date,
         targetValue:this.props.navigation.state.params.project.objective,
         stepSize:this.props.navigation.state.params.project.pas,
       })

   }

_displayCalendar=(selectedStartDate,selectedEndDate )=> {
    this.props.navigation.navigate('Calendar',{selectedStartDate :selectedStartDate , selectedEndDate: selectedEndDate, returnPage:"ModifyProjectPage", selectableStartDate:false})
  }

_displayProjectSettings=()=>{
       this.props.navigation.navigate('ModifyProjectPage')
 }

 _displayProjectPage=(project_id)=>{
   this.props.navigation.navigate('ProjectPage',{project_id : project_id})
   }

   componentDidUpdate(prevProps){
     newHasParam = (typeof this.props.navigation.state.params.selectedEndDate === "object")
     if(newHasParam){
       if(this.state.selectedEndDate != this.props.navigation.state.params.selectedEndDate ){
         this.setState ({
           selectedEndDate:this.props.navigation.state.params.selectedEndDate
         })
       }
     }
  }

  _displaydate(date, editable){
    if (date==null){
      return (
        <Text style={policeStyles.standard_text_disabled}>
         {"   Select date"}
        </Text>
      )
    }
    else {
      if (editable==true){
        return (
          <Text  style={policeStyles.standard_text}>
           {"   "+moment(new Date(date)).format('DD/MM/YYYY')}
          </Text>
        )
      }
      else {
        return (
          <Text style={[policeStyles.standard_text,{color:"#999EA5"}]}>
           {"   "+moment(new Date(date)).format('DD/MM/YYYY')}
          </Text>
        )
      }
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

_check_form=()=>{
  var valid_form =this._valid_title() && this._valid_description() && this._valid_dates()
  if ( valid_form && this.state.changed_avatar) {
    this.setState({  isLoading: true  })
    postModifyProject(this.props.navigation.state.params.project.id, this.state.title,this.state.description,this._manageDate(this.state.selectedEndDate))
    .then(data => postUpdateProjectImage(this.props.navigation.state.params.project.id,this.createFormData(this.state.avatar)))
    .then(data => {
            this.setState({ isLoading: false })
            update.update_projects(this, this.props.user.id)
            this._displayProjectPage(this.props.navigation.state.params.project.id)
           Alert.alert("Project modified ","Your project has been modified")
          })
    .catch(data => {
            this.setState({ isLoading: false })
            Alert.alert("Error", "The action could not be performed, please try again later")
          })
   }
   else if (valid_form){
     this.setState({  isLoading: true  })
     postModifyProject(this.props.navigation.state.params.project.id, this.state.title,this.state.description,this._manageDate(this.state.selectedEndDate))
     .then(data => {
             this.setState({ isLoading: false })
             update.update_projects(this, this.props.user.id)
             this._displayProjectPage(this.props.navigation.state.params.project.id)
            Alert.alert("Project modified ","Your project has been modified")
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


  render() {
    const titlePlaceholder=this.props.navigation.state.params.project.title
    const descPlaceholder=this.props.navigation.state.params.project.description
    return (
        <ScrollView style={styles.Container_scrollView} >
        <View style={styles.main_container}>
            <View   style={styles.row_container}>
              <ProjectIcon
              imageSource= {this.state.avatar}
              iseditable="true"
              action={this.edit_project_icon}/>
            </View>
          <View style={styles.sub_container}>
              <Input
              containerStyle={styles.input_container}
              inputStyle={ policeStyles.standard_text}
              labelStyle={policeStyles.label_text_input}
              label='Project title'
              placeholder={titlePlaceholder}
              onChangeText={title=>this.setState({  title   })}
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
              placeholder={descPlaceholder}
              onChangeText={description=>this.setState({  description})}/>
          </View >

          <View style={styles.sub_container}>
              <Text style={policeStyles.description_text_disabled}>
                &#10171; {"Define your project dates"}
              </Text>
              <View   style={styles.row_container_dates}>
                <TouchableOpacity
                  style={styles.bouton_date_disabled}
                  onPress={() =>  this._displayCalendar(this.state.selectedStartDate,this.state.selectedEndDate)}
                  disabled={true}>
                  <Text style={policeStyles.label_text_input_disabled}>{"From:"}  </Text>
                  {this._displaydate(this.state.selectedStartDate, false)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bouton_date}
                  onPress={() =>  this._displayCalendar(this.state.selectedStartDate,this.state.selectedEndDate)}>
                  <Text style={policeStyles.label_text_input}>{"To:"}  </Text>
                  {this._displaydate(this.state.selectedEndDate, true)}
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.sub_container}>
              <Text style={policeStyles.description_text_disabled}>
              &#10171; {"Specify a quantitative target for your project"}
              </Text>
              <View   style={styles.row_container}>
                <View style ={styles.left}>
                  <Input
                  inputStyle={ policeStyles.standard_text}
                  labelStyle={policeStyles.label_text_input_disabled}
                  containerStyle={styles.input_container_disabled}
                  label='Target value'
                  keyboardType="numeric"
                  placeholder={this.state.targetValue.toString()}
                  disabled={true}/>
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
                <View style ={styles.left}>
                   <Input
                   inputStyle={ policeStyles.standard_text}
                   labelStyle={policeStyles.label_text_input_disabled}
                   containerStyle={styles.input_container_disabled}
                   label='Step size'
                   keyboardType="numeric"
                   placeholder={this.state.stepSize.toString()}
                   disabled={true}/>
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
 bouton_date_disabled:{
  flex:0.45,
  paddingBottom:"1%",
  paddingTop:"1%",
  paddingLeft:"5%",
  borderRadius:10,
  backgroundColor:'#E3E7ED'
},
 sub_container:{
   flex:1,
   marginTop:'4%'
 },
 left:{
   flex :1,
 },
 right:{
   marginLeft:"3%",
   flex :2
 },
input_container:{
   backgroundColor:'white',
   borderRadius:10,
},
input_container_disabled:{
  borderRadius:10,
  backgroundColor:'#E3E7ED'
}
})

  const mapStateToProps = (state) => {
    return {
      projects : state.handleProject.projects,
      user: state.handleUser.user
    }
  }


export default connect(mapStateToProps) (ModifyProjectPage)
