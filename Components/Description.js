import React from 'react'
import { StyleSheet, View, Text} from 'react-native'


class Description extends React.Component {
  render() {
    const{description,lineNb}=this.props
    return (
      <Text
      style={styles.description}
      numberOfLines={lineNb}>
      {description}
      </Text>


    )
  }
}
const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    textAlign: 'left',
  },
})

export default Description
