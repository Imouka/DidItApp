
import React from 'react'
import {View,StyleSheet,FlatList } from 'react-native'
import ProjectItem from '../Components/ProjectItem'
import Constant from 'react-native'

class ProjectList extends React.Component {
  render() {
    return (
      <View>
      </View>

    )
  }
}

  /*const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      imageSource:{require('../Images/project.png')},
      projectTitle:'Project Title1',
      description:'Pendant deux ans, Cyril Dion a sillonné 18 pays, près de 200 villes pour accompagner le succès de son documentaire Demain, co-réalisé avec Mélanie Laurent. Pendant ce temps, la litanie des mauvaises nouvelles sallongeait : accélération du réchauffement planétaire, disparition de 80% des insectes en Europe et de 50% des populations de vertébrés ces 40 dernières années, explosion des inégalités, des migrations, des déchets... Comment faire face à une telle conjonction de catastrophes alors que de nombreux scientifiques parlent désormais dune poignée dannées pour réagir?',
      progressionProjet:'20%',
      progressionTemps:'50%',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      imageSource:{require('../Images/project.png')},
      projectTitle:'Project Title2',
      description:'Pendant deux ans, Cyril Dion a sillonné 18 pays, près de 200 villes pour accompagner le succès de son documentaire Demain, co-réalisé avec Mélanie Laurent. Pendant ce temps, la litanie des mauvaises nouvelles sallongeait : accélération du réchauffement planétaire, disparition de 80% des insectes en Europe et de 50% des populations de vertébrés ces 40 dernières années, explosion des inégalités, des migrations, des déchets... Comment faire face à une telle conjonction de catastrophes alors que de nombreux scientifiques parlent désormais dune poignée dannées pour réagir?',
      progressionProjet:'20%',
      progressionTemps:'50%',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      imageSource:{require('../Images/project.png')},
      projectTitle:'Project Title3',
      description:'Pendant deux ans, Cyril Dion a sillonné 18 pays, près de 200 villes pour accompagner le succès de son documentaire Demain, co-réalisé avec Mélanie Laurent. Pendant ce temps, la litanie des mauvaises nouvelles sallongeait : accélération du réchauffement planétaire, disparition de 80% des insectes en Europe et de 50% des populations de vertébrés ces 40 dernières années, explosion des inégalités, des migrations, des déchets... Comment faire face à une telle conjonction de catastrophes alors que de nombreux scientifiques parlent désormais dune poignée dannées pour réagir?',
      progressionProjet:'20%',
      progressionTemps:'50%',
    },
  ];

  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text >{projectTitle}</Text>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        <ProjectItem/>
      />
    )
  }
}


const styles = StyleSheet.create({

})
/*const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );*/
export default ProjectList
