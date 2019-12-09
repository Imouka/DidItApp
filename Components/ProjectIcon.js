
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'


class ProjectIcon extends React.Component {
  render() {
    const{imageSource}=this.props
    return (
      <View
      style={styles.main_container}>
        <Image
          style={styles.project_image}
          source={imageSource}
        />
      </View>

    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
  },
  project_image:{
    width: 70,
    height: 70,
    borderRadius: 10,
    borderColor: 'skyblue',
    borderWidth:3,
  },
})

export default ProjectIcon
//style={{flex: 1, flexDirection: 'column'}}
