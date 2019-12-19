import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import moment from 'moment'

class ProjectDetails extends React.Component {


  render() {
    const project=this.props
    const date = new Date(); //Current Date
    console.log(date)
    return (
      <View>
        <View
        style={styles.row_container}>
          <View>
            <Text  style={styles.categorie_text}>Start date:</Text>
          </View>
          <View style={styles.response_text}>
            <Text>  {moment(new Date(project.project.project_start_date)).format('DD/MM/YYYY')}</Text>
          </View>
          <View>
            <Text  style={styles.categorie_text}>End date:</Text>
          </View>
          <View style={styles.response_text}>
            <Text>  {moment(new Date(project.project.project_end_date)).format('DD/MM/YYYY')}</Text>
          </View>
        </View>
        <Text style={styles.small_text}>Project will end //ended {moment(project.project.project_end_date, "YYYYMMDD").fromNow()} </Text>
        <View
        style={styles.row_container}>
          <View>
            <Text  style={styles.categorie_text}>Goal:</Text>
          </View>
          <View style={styles.response_text}>
            <Text>   {project.project.objective}  {project.project.label_objective}</Text>
          </View>
          <View>
            <Text  style={styles.categorie_text}>Done:</Text>
          </View>
          <View style={styles.response_text}>
            <Text> XX </Text>
          </View>
        </View>
        <Text  style={styles.small_text}>XX% Already accomplished</Text>
        <View
        style={styles.row_container}>
          <View>
            <Text  style={styles.categorie_text}>Step size:</Text>
          </View>
          <View style={styles.response_text}>
            <Text>   {project.project.pas}</Text>
          </View>
        </View>
        <View
        style={styles.row_container}>
          <View>
            <Text  style={styles.categorie_text}>Last update:</Text>
          </View>
          <View style={styles.response_text}>
            <Text>   XX/XX/XXXX</Text>
          </View>
        </View>
      </View>

    )
  }
}
export default ProjectDetails

var styles = StyleSheet.create({
  row_container:{
    flexDirection:"row",
    marginTop:8,
  },
  response_text:{
   flex:1,
   //backgroundColor:"red"
  },
  categorie_text: {
    fontWeight: 'bold',
    color:'#000000',
  },
  small_text: {
    fontStyle: 'italic',
    color: '#666666',
    marginLeft: 10,
    paddingTop:1,
  },
});
