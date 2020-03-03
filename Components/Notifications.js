import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View , Image, StyleSheet, FlatList} from 'react-native';
import { getFriendsFromUserId } from '../API/APITest'

import NotificationItem  from '../Components/NotificationItem'



const DATA = [
  {
    id :0,
    type:'newfrienship',
    user:'username',
  },
  {
    id:2,
    type:'support',
    user:'username',
    project:'project title'

  },
  {
    id:3,
    type:'comment',
    user:'username',
    project:'project title'
  },
  {
    id:4,
    type:'comment',
    user:'username',
    project:'project title'
  },
  {
    id:5,
    type:'support',
    user:'username',
    project:'project title'

  },
  {
    id:6,
    type:'support',
    user:'username',
    project:'project title'

  },
  {
    id :7,
    type:'newfrienship',
    user:'username',
  },
  {
    id :8,
    type:'friendrequest',
    user:'username',
  },

]

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

   _renderSeparator = () => {
   return (
     <View
       style={{
         marginBottom:'3%',
         marginTop:'3%',
         height: 1,
         width: "86%",
         backgroundColor: "#CED0CE",
         marginLeft: "3%"
       }}
     />
   );
   };

   _renderHeader = () => {
   return (
   <View style={{ marginBottom:"6%",}}>
     <Text style={styles.title_text}>
     New notifications !
     </Text>
   </View>
   )
   };

    render() {
      return (
        <View style={{ justifyContent: 'center', alignItems:'center', flex:1}}>
            <Modal animationType={'slide'} transparent={true} visible={this.state.modalVisible}>
                <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', height: '100%', backgroundColor: 'black', opacity: .6 }}/>
                    <View style={[{ position: 'absolute', width: '80%', height:"60%", backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                        <View style={styles.main_container}>
                            <FlatList
                              data={DATA}
                              ItemSeparatorComponent={this._renderSeparator}
                              ListHeaderComponent={this._renderHeader}
                              keyExtractor={(item) => item.id.toString()}
                              ref={(ref) => { this.flatListRef = ref; }}
                              renderItem={({item}) =>
                              <NotificationItem
                                  notification={item}
                              />}
                              />
                            <View style={styles.button_container}>
                              <TouchableOpacity
                                style ={{marginTop:"10%"}}
                                onPress={() => {this.setState({modalVisible: false})}
                                  }>
                                <Text>CLOSE</Text>
                              </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View>
            {this._displayBell(DATA.length)}
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
    title_text:{
      fontWeight:'bold',
      fontSize: 20,
    }
  })
export default Notifications
