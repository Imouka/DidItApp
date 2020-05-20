import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Modal, Text, TouchableHighlight, TouchableOpacity, View , Image, StyleSheet, TextInput, Alert, Keyboard} from 'react-native';
import moment from 'moment'
import { Input} from 'react-native-elements'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'

class AddProgression extends Component {


  constructor(props) {
     super(props)
     this.state = {
         modalVisible: false,
         description:"",
         progressValue:null,
         height: '50%',

         error_progressValue:"",
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

     display_update_button(is_over) {
       if (is_over==false){
         return(
           <TouchableOpacity
           onPress={() => {this.setState({modalVisible:true})}}>
             <Image
               style={imageStyles.add_update_button}
               source= {require('../Images/progress.png')}/>
           </TouchableOpacity>
         )}
         else{
           return(
             <TouchableOpacity
             onPress={() => {this.setState({modalVisible:true})}}
             disabled={true}>
               <Image
                 style={[imageStyles.add_update_button,{opacity: 0.2}]}
                 source= {require('../Images/progress.png')}/>
             </TouchableOpacity>
           )}
      }

      _check_form(addProgression){
        if (this.state.progressValue< 1){
          this.setState({error_progressValue:"The progress value must be grater or equal to one"})
        }
        else{
          this.setState({error_progressValue:""})
          this.setState({modalVisible: false})
          addProgression(parseInt(this.state.progressValue, 10 ), this.state.description)
        }
      }

    render() {
      const {addProgression,disabled}=this.props
      return (
        <View style={{ justifyContent: 'center', alignItems:'center', flex:1}}>
            <Modal animationType={'slide'} transparent={true} visible={this.state.modalVisible}>
                <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', height: '100%', backgroundColor: 'black', opacity: .6 }}/>
                    <View style={[{ position: 'absolute', width: '80%', height:this.state.height, backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                        <View style={styles.main_container}>
                            <Text style ={policeStyles.project_title_text} >Update your project</Text>
                            <Input
                            inputStyle={ policeStyles.standard_text}
                            labelStyle={policeStyles.label_text_input}
                            label="Specify a value for your progress"
                            keyboardType="numeric"
                            onChangeText={progressValue=>this.setState({progressValue  })}
                            errorStyle={{ color: 'red' }}
                            errorMessage={this.state.error_progressValue}/>

                            <Input
                            inputStyle={ policeStyles.standard_text}
                            labelStyle={policeStyles.label_text_input}
                            label='Describe your progress'
                            multiline={true}
                            blurOnSubmit={true}
                            maxHeight={80}
                            onChangeText={description=>this.setState({
                                      description
                                  })}/>

                            <View style={styles.button_container}>
                            <TouchableOpacity
                              onPress={() => {this.setState({modalVisible: false})}
                                }>
                              <Text  style ={policeStyles.standard_text_center} >CANCEL</Text>
                            </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => this._check_form(addProgression)}>
                                <Text  style ={policeStyles.standard_text_center} >OK</Text>
                              </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            {this.display_update_button(disabled)}
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
    row_container: {
     flexDirection: 'row',
     alignItems:'center',
     },
     button_container:{
       flexDirection:"row",
       justifyContent :'space-around',
     },
  })

  const mapStateToProps = (state) => {
    return {
      projects : state.handleProject.projects,
      user: state.handleUser.user
    }
  }

export default connect (mapStateToProps) (AddProgression)
