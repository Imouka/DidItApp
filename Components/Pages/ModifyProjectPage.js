import React from 'react'
import {connect} from 'react-redux'
import {View,StyleSheet, Text, TouchableOpacity, TextInput, Button, ScrollView, Alert, ActivityIndicator} from 'react-native';
import ProjectIcon from '../../Components/ProjectIcon';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import {postModifyProject } from '../../API/APITest'
import update from '../../Utils/Updaters.js';


class ModifyProjectPage extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       title:"",
       description:"",
       selectedStartDate: null,
       selectedEndDate: null,
       targetValue:"",
       stepSize:"null",
       stepNumber:"null",
       isLoading:false,
     };
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
        <Text style={[{color:"#999EA5"}]}>
         {"   Select date"}
        </Text>
      )
    }
    else {
      if (editable==true){
        return (
          <Text>
           {"   "+moment(new Date(date)).format('DD/MM/YYYY')}
          </Text>
        )
      }
      else {
        return (
          <Text style={[{color:"#999EA5"}]}>
           {"   "+moment(new Date(date)).format('DD/MM/YYYY')}
          </Text>
        )
      }
    }
  }


  _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }

_display_number_of_steps(target_val, step_size){
    if (! isNaN(Math.round(target_val / step_size))){
      return (
        <Text style={[{color:"#999EA5"}]}>
         {"Your project will be divided in "+ Math.round(target_val / step_size)+" steps"}
        </Text>
      )
    }
}

_manageDate(date){
  return (
    moment(new Date(date)).format('YYYY/MM/DD')
  )
}

_check_form=()=>{
  if (this._valid_title() && this._valid_description() && this._valid_dates()) {
    this.setState({ isLoading: true })
    console.log("ModifyProjectPage "+this.state.title )
    postModifyProject(this.props.navigation.state.params.project.id, this.state.title,this.state.description,this._manageDate(this.state.selectedEndDate))
    .then(data => {
            this.setState({ isLoading: false })
            update.update_projects(this)
            this._displayProjectPage(this.props.navigation.state.params.project.id)
           Alert.alert("Project modified ","Your project has been modified")
          })
    .catch(data => {
            this.setState({ isLoading: false })
            Alert.alert("Error", "The action could not be performed, please try again later")
          })
   }
  else {
    Alert.alert("Something went wrong ", " Please check the following fields:  \n -> Title: mandatory  \n -> Dates: mandatory")
  }
}

_valid_title=()=>{
  if (this.state.title !== "" ){
    return (true)
  }
  else {
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
              imageSource={require('../../Images/project.png')}
              iseditable="true"/>
            </View>
          <View style={styles.sub_container}>
            <View style ={styles.text_input_container}>
              <TextInput
                placeholderTextColor="black"
                placeholder={titlePlaceholder}
                maxLength = {40}
                onChangeText={title=>this.setState({
                          title
                      })}/>
            </View>
          </View>
          <View style={styles.sub_container}>
            <View style ={styles.text_input_container}>
              <TextInput
              placeholderTextColor="black"
              placeholder={descPlaceholder}
              multiline={true}
              blurOnSubmit={true}
              onChangeText={description=>this.setState({
                        description
                    })}>
              </TextInput>
            </View >
          </View >

          <View style={styles.sub_container}>
              <Text style={styles.instruction_text}>
                &#10171; {"Define your project dates"}
              </Text>
              <View   style={styles.row_container_dates}>
                <TouchableOpacity
                  style={styles.bouton_date_disabled}
                  onPress={() =>  this._displayCalendar(this.state.selectedStartDate,this.state.selectedEndDate)}
                  disabled={true}>
                  <Text style={styles.from_to_text_disabled}>{"From:"}  </Text>
                  {this._displaydate(this.state.selectedStartDate, false)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bouton_date}
                  onPress={() =>  this._displayCalendar(this.state.selectedStartDate,this.state.selectedEndDate)}>
                  <Text style={styles.from_to_text}>{"To:"}  </Text>
                  {this._displaydate(this.state.selectedEndDate, true)}
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.sub_container2}>
              <Text style={styles.instruction_text_disabled}>
              &#10171; {"Specify a quantitative target for your project"}
              </Text>
              <View   style={styles.row_container}>
                <View style={styles.left} >
                  <Text style={styles.from_to_text_disabled}>
                  {"Target value: "}
                  </Text>
                </View>
                <View
                style ={[styles.text_input_container_disabled, ]}>
                  <TextInput
                    keyboardType="numeric"
                    placeholderTextColor="grey"
                    placeholder={this.state.targetValue.toString()}
                    editable ={false}
                  />
                </View>
                <View style={styles.right} >
                </View>
              </View>
          </View>
          <View style={styles.sub_container2}>
              <Text style={styles.instruction_text_disabled}>
                &#10171;  {"Specify a size for the steps of your project"}
              </Text>
              <View   style={styles.row_container}>
                <View style={styles.left} >
                  <Text style={styles.from_to_text_disabled}>
                  {"Step size: "}
                  </Text>
                </View>
                <View  style ={[styles.text_input_container_disabled, ]}>
                  <TextInput
                    keyboardType="numeric"
                    placeholderTextColor="grey"
                    placeholder={this.state.stepSize.toString()}
                    editable ={false}
                   />
                </View>
                <View style={styles.right} >
                   {  this._display_number_of_steps(this.state.targetValue, this.state.stepSize)}
                </View>
              </View>
          </View>
          <View  style={styles.sub_container2}>
            <Button
            title= "Save project"
            onPress={
              this._check_form
              }
            color="#40AFBF"
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
   //justifyContent :'space-between',
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
   borderWidth:1,
   paddingBottom:"1%",
   paddingTop:"1%",
   paddingLeft:"5%",
   borderColor:'skyblue',
   borderRadius:10,
   backgroundColor:'white'
 },
 text_input_container:{
   borderWidth:1,
   borderColor:'skyblue',
   borderRadius:10,
   backgroundColor:'white'
 },
 from_to_text: {
   fontWeight: 'bold',
   fontSize:15,
 },
 instruction_text: {
   fontStyle: "italic",
   color:"#4B5E78",
 },
 instruction_text_disabled: {
   fontStyle: "italic",
   color:"#AFB6C0",
 },
 from_to_text_disabled: {
   fontWeight: 'bold',
   fontSize:15,
   color:"#AFB6C0",
 },
 text_input_container_disabled:{
   borderWidth:1,
   borderColor:"#AFB6C0",
   borderRadius:10,
   backgroundColor:'#E3E7ED'
 },
 bouton_date_disabled:{
  flex:0.45,
  borderWidth:1,
  paddingBottom:"1%",
  paddingTop:"1%",
  paddingLeft:"5%",
  borderColor:"#AFB6C0",
  borderRadius:10,
  backgroundColor:'#E3E7ED'
},
 sub_container:{
   flex:1,
   marginTop:'4%'
 },
 sub_container2:{
   flex:1,
   marginTop:'6%'
 },
 left:{
   flex :0.9,
//   backgroundColor:'red'
 },
 right:{
   marginLeft:"3%",
   flex :2
 },
 loading_container: {
 position: 'absolute',
 left: 0,
 right: 0,
 top: 100,
 bottom: 0,
 alignItems: 'center',
 justifyContent: 'center'
}
  })

  const mapStateToProps = (state) => {
    return {
      projects : state.handleProject.projects,
      user: state.handleUser.user
    }
  }


export default connect(mapStateToProps) (ModifyProjectPage)
