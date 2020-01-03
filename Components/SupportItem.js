
import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import ButtonSmallImage from '../Components/ButtonSmallImage'

class CommentItem extends React.Component {
  render() {
    return (
        <View
        style={styles.main_container}>
          <View  style={{flex:1}}>
          <ButtonSmallImage
            imageSource= {require("../Images/profile_icon.png")}
            action={console.log}/>
          </View>
          <View style={{flex:10}} >
            <View style={{flexDirection: 'row'}}>
            <Text>
              <Text
              style={styles.USername_text}>
              User name
              </Text>
              <Text
              style={styles.comment}>
              {" supported this project  "}
              </Text>
            </Text>
            <Image
              style={styles.support_image}
              source= {require("../Images/support2.png")}
            />
            </View>
            <View style={{marginTop:3}}>
              <Text
              style={styles.date}>
                XX/XX/XXXX
              </Text>
            </View>

          </View>

      </View>

    )
  }
}
export default CommentItem

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
