import React from 'react'
import { StyleSheet, View, Text} from 'react-native'


class Description extends React.Component {
  render() {
    return (
      <Text
      style={styles.description}
      numberOfLines={4}>
      Pendant deux ans, Cyril Dion a sillonné 18 pays, près de 200 villes pour accompagner le succès de son documentaire Demain, co-réalisé avec Mélanie Laurent. Pendant ce temps, la litanie des mauvaises nouvelles s'allongeait : accélération du réchauffement planétaire, disparition de 80% des insectes en Europe et de 50% des populations de vertébrés ces 40 dernières années, explosion des inégalités, des migrations, des déchets... Comment faire face à une telle conjonction de catastrophes alors que de nombreux scientifiques parlent désormais d'une poignée d'années pour réagir ?
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
