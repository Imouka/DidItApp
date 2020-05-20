
import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import ButtonSmallImage from '../Components/ButtonSmallImage'
import moment from 'moment'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'

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
              style={policeStyles.standard_bold}>
              {support.first_name} {support.last_name}
              </Text>
              <Text
              style={policeStyles.standard_text_center}>
              {" supported this project  "}
              </Text>
            </Text>
            <Image
              style={imageStyles.support_image}
              source= {require("../Images/support2.png")}  />
            </View>
            <View style={{marginTop:3}}>
              <Text
              style={policeStyles.update_date}>
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
})
