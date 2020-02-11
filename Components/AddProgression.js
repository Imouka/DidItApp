import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableOpacity, View , Image, StyleSheet, TextInput, Alert, Keyboard} from 'react-native';
import { getFriendsFromUserId } from '../API/APITest'


class AddProgression extends Component {

  // You can import from local files

  // or any pure javascript modules available in npm

  constructor(props) {
     super(props)
     this.state = {
         modalVisible: false,
         description:"",
         progressValue:null,
         height: '50%'
     }
   //this._scrollToIndex=this._scrollToIndex.bind(this)
   }

   componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }
     componentWillUnmount() {
       this.keyboardDidShowListener.remove();
       this.keyboardDidHideListener.remove();
     }

     _keyboardDidShow = ()=> {
       this.setState({
         height:"90%"
       })
     }

     _keyboardDidHide = ()=> {
       this.setState({
         height:"50%"
       })
     }

   _check_form=()=>{
     if (this.state.progressValue < 1 ) {
        Alert.alert("Error", "The progress value must be grater or equal to one")
      }
     else {
       console.log(this.state.progressValue)
       if (this.state.progressValue=="hello1" ) {
         this.setState({ isLoading: true })
         console.log(this.state.isLoading)
         getFriendsFromUserId("2")
         .then(data => {
                 this.setState({ isLoading: false })
                 Alert.alert("Project finished", "You finished your project")
               })
         .catch(data => {
                 this.setState({ isLoading: false })
                 Alert.alert("Error", "The action could not be performed, please try again later")
               })
       }
       else if (this.state.progressValue=="hello") {
         this.setState({ isLoading: true })
         console.log(this.state.isLoading)
         getFriendsFromUserId("2")
         .then(data => {
                 this.setState({ isLoading: false })
                 Alert.alert("Project updated", "Your update is saved")
               })
         .catch(data => {
                 this.setState({ isLoading: false })
                 Alert.alert("Error", "The action could not be performed, please try again later")
               })
       }
     }
   }

    render() {
      console.log(this.state);
      return (
        <View style={{ justifyContent: 'center', alignItems:'center', flex:1}}>
            <Modal animationType={'slide'} transparent={true} visible={this.state.modalVisible}>
                <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', height: '100%', backgroundColor: 'black', opacity: .6 }}/>
                    <View style={[{ position: 'absolute', width: '80%', height:this.state.height, backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                        <View style={styles.main_container}>
                            <Text style ={styles.text_title} >Update your project</Text>
                            <View>
                            <Text style={styles.instruction_text}>
                              &#10171;  {"Specify a value for your progress"}
                            </Text>
                            <View   style={styles.row_container}>
                              <View style={styles.left} >
                                <Text style={styles.from_to_text}>
                                {"Progress value: "}
                                </Text>
                              </View>
                              <View  style ={[styles.text_input_container, ]}>
                                <TextInput
                                  keyboardType="numeric"
                                  placeholderTextColor="grey"
                                  placeholder={" "}
                                  onChangeText={progressValue=>this.setState({
                                            progressValue
                                        })}
                                  />
                              </View>
                            </View>
                            </View>
                            <View style ={styles.text_input_container}>
                              <TextInput
                                placeholder={'Describe your progress'}
                                multiline={true}
                                blurOnSubmit={true}
                                maxHeight={80}
                                onChangeText={description=>this.setState({
                                          description
                                      })}/>
                            </View>
                            <View style={styles.button_container}>
                            <TouchableOpacity
                              onPress={() => {this.setState({modalVisible: false})}
                                }>
                              <Text  style ={styles.button_text} >CANCEL</Text>
                            </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => {this.setState({modalVisible: false}),  this._check_form()}
                                  }>
                                <Text  style ={styles.button_text} >OK</Text>
                              </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
            onPress={() => {this.setState({modalVisible:true})}}>
              <Image
                style={styles.update_image}
                source= {require('../Images/progress.png')}/>
            </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    main_container: {
     position: 'absolute',
     width: '90%',
     height: '90%',
     flex:1,
     marginTop:"2%",
     justifyContent :'space-between',
      },
    text_title:{
      fontWeight: 'bold',
      fontSize:20,
    },
    update_image:{
      width: 40,
      height:40,
    },
    text_input_container:{
      marginTop:"3%",
      borderWidth:1,
      borderColor:'#D5D5D5',
      borderRadius:10,
      backgroundColor:'white'
    },
    row_container: {
     flexDirection: 'row',
     alignItems:'center',
     },
     from_to_text: {
       fontWeight: 'bold',
       fontSize:15,
     },
     instruction_text: {
       fontStyle: "italic",
       color:"#494949",
     },
     button_container:{
       flexDirection:"row",
       justifyContent :'space-around',
     },
     button_text: {
       fontSize:14,
     },
  })
export default AddProgression
