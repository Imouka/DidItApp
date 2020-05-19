import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image} from 'react-native'
import {imageStyles} from '../Styles/Image_styles'


class SupportButton extends React.Component {

  render() {
    const{action, projectid, userId, disabled}=this.props
    if (!disabled){
      return(
        <View>
        <TouchableOpacity
        onPress={() => action(projectid,userId)}>
          <Image
            style={imageStyles.support_button}
            source= {require('../Images/support2.png')}
          />
        </TouchableOpacity>
        </View>
      )}
      else{
        return(

          <View>

          <TouchableOpacity
          onPress={() => action()}
          disabled={true}>
            <Image
              style={[imageStyles.support_button,{opacity: 0.2}]}
              source= {require('../Images/support2.png')}
            />
          </TouchableOpacity>
          </View>
        )}

  }
}

export default SupportButton
