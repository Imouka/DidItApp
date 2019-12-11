
import React from 'react'
import {View,StyleSheet,FlatList } from 'react-native'
import ProjectItem from '../Components/ProjectItem'


class ProjectList extends React.Component {
  render() {
    const{projects, imageSource, progressionProjet, progressionTemps,displayDetailForProject}=this.props
    return (
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>
          <ProjectItem
              project={item}
              imageSource={imageSource}
              progressionProjet={progressionProjet}
              progressionTemps={progressionTemps}
              displayDetailForProject={displayDetailForProject}
          />}
        />
    )
  }
}

const styles = StyleSheet.create({

})
export default ProjectList
