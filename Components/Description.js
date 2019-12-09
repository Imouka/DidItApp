import React from 'react'
import { StyleSheet, View, Text} from 'react-native'


class Description extends React.Component {
  render() {
    const{description}=this.props
    return (
      <Text
      style={styles.description}
      numberOfLines={4}>
      {description}
      </Text>


    )
  }
}
const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    textAlign: 'left',
    flexWrap: 'wrap',
  },
})

export default Description
