
import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import ButtonSmallImageAndText from '../Components/ButtonSmallImageAndText'

class CommentItem extends React.Component {
  render() {
    const {comment}=this.props
    return (
        <View
        style={styles.main_container}>
          <View  style={{flex:1}}>
            <Image
              style={styles.user_image}
              source= {require("../Images/profile_icon.png")}
            />
          </View>
          <View style={{flex:10}} >
            <Text>
              <Text
              style={styles.USername_text}>
              User name
              </Text>
              <Text
              style={styles.comment}>
              {comment}
              </Text>
            </Text>
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
 user_image:{
    width: 25,
    height: 25,
    borderRadius:360,
    borderWidth:2,
    borderColor:'#55cfb3',
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
  }
})
