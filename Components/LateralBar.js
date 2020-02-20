
import React from 'react'
import {View, ScrollView,StyleSheet, FlatList} from 'react-native'
import LateralProjectItem from '../Components/LateralProjectItem'


class LateralBar extends React.Component {
  render() {
    const{imageSource, projects,displayDetailForProject}=this.props
    return (
      <View>
      <FlatList
        style = {styles.main_container}
        horizontal={true}
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        ref={(ref) => { this.flatListRef = ref; }}
        renderItem={({item}) =>
        <LateralProjectItem
          project={item}
          imageSource={imageSource}
          displayDetailForProject={displayDetailForProject}/>}
        />
        </View>

    )
  }
}


const styles = StyleSheet.create({
  main_container: {
    marginTop:"2%",
  },
})

export default LateralBar
