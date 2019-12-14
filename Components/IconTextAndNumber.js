import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native'


class IconTextAndNumber extends React.Component {
  render() {
    const {text,number, action}=this.props
    return (
        <TouchableOpacity
        onPress={() => action()}>
          <Text
          style={styles.nb_of_friends} >
          {this.props.number}
          </Text>
          <Text
          style={styles.text_friends} >
          {text}
          </Text>
        </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
  },
  nb_of_friends: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text_friends:{
    fontSize: 15,
    textAlign: 'center',
  }
})

export default IconTextAndNumber
