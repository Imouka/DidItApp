import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity, TextInput, Button, ScrollView, Alert, ActivityIndicator} from 'react-native';
import ProjectIcon from '../../Components/ProjectIcon';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import {getFriendsFromUserId } from '../../API/APITest'

class CreateNewProjectPage extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       title:"",
       description:"",
       selectedStartDate: null,
       selectedEndDate: null,
       targetValue:null,
       stepSize:null,
       stepNumber:null,
       stepSizeTmp:null,
       isLoading:false,
     };
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
           selectedStartDate:this.props.navigation.state.params.selectedStartDate,
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
        <Text>
         {"   Select date"}
        </Text>
      )
    }
    else {
      return (
        <Text>
         {"   "+moment(new Date(date)).format('DD/MM/YYYY')}
        </Text>
      )
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
        <Text>
         {"Your project will be divided in "+ Math.round(target_val / step_size)+" steps"}
        </Text>
      )
    }
}

_default_step_size=(target_val)=> {
       this.setState({
         stepSize: Math.max(1, Math.round(target_val /10)).toString()
       });
  }

_check_form=()=>{
  if (this._valid_title() && this._valid_description() && this._valid_dates() && this._valid_target_value() && this._valid_step_size() ) {
    this.setState({ isLoading: true })
    getFriendsFromUserId("2")
    .then(data => {
           this.setState({ isLoading: false })
           this._displayProfilePage()
           Alert.alert("New project created ","your new project has been created")
          })
    .catch(data => {
            this.setState({ isLoading: false })
            Alert.alert("Error", "The action could not be performed, please try again later")
          })
   }
  else {
    Alert.alert("Something went wrong ", " Please check the following fields:  \n -> Title: mandatory  \n -> Dates: mandatory  \n -> Target value: must be a number greater or equal to 1\n -> Step size: must be a number between 1 and Target value")
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

_valid_target_value=()=>{
    if ((this.state.targetValue != null) && (! isNaN(this.state.targetValue)) &&  (1<= this.state.targetValue)) {
      return (true)
    }
    else {
      console.log("target NOT ok")
      return (false)
    }
  }

_valid_step_size=()=>{
    if ((this.state.stepSize !== null) && (! isNaN(this.state.stepSize)) &&  (1<= Number.parseInt(this.state.stepSize)) &&   (Number.parseInt(this.state.targetValue) >= Number.parseInt(this.state.stepSize))) {
      return (true)
    }
    else {
      console.log(this.state.stepSize)
      console.log("step NOT ok")
      return (false)
    }
  }

  render() {
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
                placeholder={'Insert your project title'}
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
              placeholder='Insert a description for your project'
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
                  style={styles.bouton_date}
                  onPress={() =>  this._displayCalendar(this.state.selectedStartDate,this.state.selectedEndDate)}>
                  <Text style={styles.from_to_text}>{"From:"}  </Text>
                  {this._displaydate(this.state.selectedStartDate)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bouton_date}
                  onPress={() =>  this._displayCalendar(this.state.selectedStartDate,this.state.selectedEndDate)}>
                  <Text style={styles.from_to_text}>{"To:"}  </Text>
                  {this._displaydate(this.state.selectedEndDate)}
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.sub_container2}>
              <Text style={styles.instruction_text}>
              &#10171; {"Specify a quantitative target for your project"}
              </Text>
              <View   style={styles.row_container}>
                <View style={styles.left} >
                  <Text style={styles.from_to_text}>
                  {"Target value: "}
                  </Text>
                </View>
                <View
                style ={[styles.text_input_container, ]}>
                  <TextInput
                    keyboardType="numeric"
                    placeholderTextColor="grey"
                    placeholder={''}
                    onChangeText={(targetValue)=>this.setState({targetValue})}
                    onEndEditing={() => this._default_step_size(this.state.targetValue)}/>
                </View>
                <View style={styles.right} >
                  <Text >
                  {"eg: Choose 8 if you wnat to read 8 books"}
                  </Text>
                </View>
              </View>
          </View>
          <View style={styles.sub_container2}>
              <Text style={styles.instruction_text}>
                &#10171;  {"Specify a size for the steps of your project"}
              </Text>
              <View   style={styles.row_container}>
                <View style={styles.left} >
                  <Text style={styles.from_to_text}>
                  {"Step size: "}
                  </Text>
                </View>
                <View  style ={[styles.text_input_container, ]}>
                  <TextInput
                    keyboardType="numeric"
                    placeholderTextColor="grey"
                    placeholder={this.state.stepSize}
                    onChangeText={(stepSizeTmp)=>this.setState({
                              stepSizeTmp
                          })}
                    onEndEditing={()=>this.setState({stepSize:this.state.stepSizeTmp})}/>
                </View>
                <View style={styles.right} >
                   {  this._display_number_of_steps(this.state.targetValue, this.state.stepSize)}
                </View>
              </View>
          </View>
          <View  style={styles.sub_container2}>
            <Button
            title= "Create project"
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

export default CreateNewProjectPage
