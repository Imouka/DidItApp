import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View , Image, StyleSheet, ScrollView} from 'react-native';
import { getFriendsFromUserId } from '../API/APITest'


class Notifications extends Component {

  constructor(props) {
     super(props)
     this.state = {
         modalVisible: false,
     }
   }

   _displayBell(nb_notif){
     if (nb_notif > 0){
       return (
           <TouchableOpacity
           style={{ marginRight:25}}
              onPress={() => {this.setState({modalVisible:true})}}>
              <Image style={{ width: 40, height: 40 }} source={require('../Images/bell_ring.png')}/>
              <View
              style={styles.icon}>
              {this._displayNotifNumber(nb_notif)}
              </View>
           </TouchableOpacity>
       )
     }
   }


   _displayNotifNumber(nb_notif){
     if (nb_notif>99){
       return (
         <Text style={styles.badge} >
         {"+99"}
         </Text>
       )
     }
     else {
       return (
         <Text style={styles.badge} >
         {nb_notif}
         </Text>
       )
     }
   }

    render() {
      return (
        <View style={{ justifyContent: 'center', alignItems:'center', flex:1}}>
            <Modal animationType={'slide'} transparent={true} visible={this.state.modalVisible}>
                <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', height: '100%', backgroundColor: 'black', opacity: .6 }}/>
                    <View style={[{ position: 'absolute', width: '80%', height:"80%", backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                        <ScrollView style={styles.main_container}>
                            <View style={styles.button_container}>
                              <TouchableOpacity
                                onPress={() => {this.setState({modalVisible: false})}
                                  }>
                                <Text  style ={styles.button_text} >OK</Text>
                              </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <View>
            {this._displayBell(3)}
            </View>
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
   },
     button_container:{
       flexDirection:"row",
       justifyContent :'space-around',
     },
     button_text: {
       fontSize:14,
     },
     icon: {
       backgroundColor:'#79D2A6',
       position: 'absolute',
       borderRadius: 360,
       right:-15,
       top: 0,
       width: 30,
       height: 22,
     },
     badge:{
       fontWeight: 'bold',
       textAlign: 'center',
       },
  })
export default Notifications
