
import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import ButtonSmallImage from '../Components/ButtonSmallImage'
import moment from 'moment'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'


class CommentItem extends React.Component {

  _displaydate(date_is_displayed, date){
      if (date_is_displayed==true){
        return (
          <View style={{marginTop:3}}>
            <Text
            style={policeStyles.update_date}>
             {moment(new Date(this.props.comment.date)).format('DD/MM/YYYY')}
            </Text>
          </View>
      )
    }
  }

  render() {
    const {comment, date_is_displayed, action,id}=this.props
    return (
        <View
        style={styles.main_container}>
          <View  style={{flex:1}}>
          <ButtonSmallImage
            imageSource= {require("../Images/profile_icon.png")}
            action={()=>action(id)}/>
          </View>
          <View style={{flex:10}} >
            <Text>
              <Text
              style={policeStyles.standard_bold}>
              {comment.first_name} {comment.last_name}
              </Text>
              <Text>
              {" "}
              </Text>
              <Text
              style={policeStyles.standard_text}>
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
})
