
import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import ButtonSmallImage from '../Components/ButtonSmallImage'
import moment from 'moment'


class SupportItem extends React.Component {
  render() {
    const {support, action}=this.props
    return (
        <View
        style={styles.main_container}>
          <View  style={{flex:1}}>
          <ButtonSmallImage
            imageSource= {require("../Images/profile_icon.png")}
            action={()=>action(support.user_id)}/>
          </View>
          <View style={{flex:10}} >
            <View style={{flexDirection: 'row'}}>
            <Text>
              <Text
              style={styles.USername_text}>
              {support.first_name} {support.last_name}
              </Text>
              <Text
              style={styles.comment}>
              {" supported this project  "}
              </Text>
            </Text>
            <Image
              style={styles.support_image}
              source= {require("../Images/support2.png")}  />
            </View>
            <View style={{marginTop:3}}>
              <Text
              style={styles.date}>
               {moment(new Date(support.date)).format('DD/MM/YYYY')}
              </Text>
            </View>

          </View>

      </View>

    )
  }
}
export default SupportItem

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems :'center',
    alignItems:'flex-start'
  },
  USername_text: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight:'bold',
  },
  comment:{
    fontSize: 15,
    textAlign: 'left',
  },
  date:{
    fontSize: 12,
    textAlign: 'left',
    fontWeight:'bold',
    color:'#777878'
  },
  support_image:{
     width: 30,
     height: 30,
     borderRadius:360,
     //alignSelf:'flex-end'
   },
})
