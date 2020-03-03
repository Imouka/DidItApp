import React from 'react'
import { Input} from 'react-native-elements'
import {View,StyleSheet,Text, TouchableOpacity, KeyboardAvoidingView,ScrollView} from 'react-native'
import EditableUserIcon from '../../Components/EditableUserIcon'



class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView >
      <View style={styles.main_container}>
        <View
        style={styles.user_icon_container}>
          <EditableUserIcon
          imageSource= {require("../../Images/user.png")}/>
        </View>
        <Input
          containerStyle={styles.input_container}
          label='Name'
          placeholder='Your present name'
          errorStyle={{ color: 'red' }}
          errorMessage='Enter a valid user name'  />
        <Input
          containerStyle={styles.input_container}
          label='Description'
          placeholder='Present description'  />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    alignItems:'center',

//    backgroundColor:"green",
    marginTop:"5%",
    marginBottom:"5%",
  },
  user_icon_container:{
    marginBottom:"10%",
  //  backgroundColor:'red'
  },
  input_container:{
    marginBottom:"10%",
     //backgroundColor:'blue'

  }
})

export default EditProfilePage
