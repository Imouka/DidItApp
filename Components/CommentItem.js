
import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import ButtonSmallImage from '../Components/ButtonSmallImage'
import moment from 'moment'



class CommentItem extends React.Component {

  _displaydate(date_is_displayed, date){
      if (date_is_displayed==true){
        return (
          <View style={{marginTop:3}}>
            <Text
            style={styles.date}>
             {moment(new Date(this.props.comment.date)).format('DD/MM/YYYY')}
            </Text>
          </View>
      )
    }
  }

  render() {
    const {comment, fontsize, date_is_displayed}=this.props
    return (
        <View
        style={styles.main_container}>
          <View  style={{flex:1}}>
          <ButtonSmallImage
            imageSource= {require("../Images/profile_icon.png")}
            action={console.log}/>
          </View>
          <View style={{flex:10}} >
            <Text>
              <Text
              style={[styles.username_text,{fontSize: fontsize}]}>
              {comment.first_name} {comment.last_name}
              </Text>
              <Text>
              {" "}
              </Text>
              <Text
              style={[{fontSize: fontsize}]}>
              {comment.message}
              </Text>
            </Text>
          {this._displaydate(date_is_displayed)}
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
    alignItems:'flex-start',
  },
  username_text: {
    fontWeight:'bold',
  },
  date:{
    fontSize: 12,
    textAlign: 'left',
    fontWeight:'bold',
    color:'#777878'
  }
})
