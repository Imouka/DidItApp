import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import {policeStyles} from '../Styles/police_styles'

class Description extends React.Component {
  render() {
    const{description,lineNb}=this.props
    return (
      <Text
      style={policeStyles.description_text}
      numberOfLines={lineNb}>
      {description}
      </Text>


    )
  }
}

export default Description
