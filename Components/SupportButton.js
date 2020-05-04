import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image} from 'react-native'



class SupportButton extends React.Component {

  render() {
    const{action, projectid, userId, disabled}=this.props
    if (!disabled){
      return(
        <View>
        <TouchableOpacity
        onPress={() => action(projectid,userId)}>
          <Image
            style={styles.button_image}
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
              style={[styles.button_image,{opacity: 0.2}]}
              source= {require('../Images/support2.png')}
            />
          </TouchableOpacity>
          </View>
        )}

  }
}
const styles = StyleSheet.create({
 button_image:{
   width: 40,
   height: 40,
  },
})

export default SupportButton
