
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'


class ProjectIcon extends React.Component {
  render() {
    return (
      <View
      style={styles.main_container}>
        <TouchableOpacity
        onPress={() => console.log("Pressed ProjectIcon")}>
          <Image
            style={styles.project_image}
            source={require('../Images/project.png')}
          />
        </TouchableOpacity>
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
