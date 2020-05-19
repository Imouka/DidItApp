import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import moment from 'moment'
import {policeStyles} from '../Styles/police_styles'


class ProjectDetails extends React.Component {

  _displayProjectDeadlineMessage(dateDay, dateEndProject) {
    if (moment(dateDay).isBefore(dateEndProject)) {
      return <Text style={styles.project_details_small_text}> Project will end {moment(dateEndProject, "YYYY-MM-DD HH:mm:ss").fromNow()} </Text>;
    } else {
      return <Text style={styles.project_details_small_text}> Project ended {moment(dateEndProject,"YYYY-MM-DD HH:mm:ss").fromNow()}</Text>;
    }
  }

  _displayLastUpdateDateMessage(date) {
    if (date == 0) {
      return <Text style={styles.project_details_small_text}> Still no updates </Text>;
    } else {
      return <Text  style={policeStyles.standard_text}> {moment(new Date(date)).format('DD/MM/YYYY')}</Text>;
    }
  }

  //{moment(new Date(project.project.project_end_date)).format('DD/MM/YYYY')}
  render() {
    const project=this.props
    const date = new Date(); //Current Date
    return (
      <View>
      <View
      style={styles.row_container}>
      <View>
      <Text  style={policeStyles.standard_bold}>Start date:</Text>
      </View>
      <View style={styles.response_text}>
      <Text style={policeStyles.standard_text}>  {moment(new Date(project.project.project_start_date)).format('DD/MM/YYYY')}</Text>
      </View>
      <View>
      <Text  style={policeStyles.standard_bold}>End date:</Text>
      </View>
      <View style={styles.response_text}>
      <Text style={policeStyles.standard_text}>  {moment(new Date(project.project.project_end_date)).format('DD/MM/YYYY')}</Text>
      </View>
      </View>
      <Text style={policeStyles.project_details_small_text}> {this._displayProjectDeadlineMessage(moment(new Date()), moment(project.project.project_end_date, "YYYYMMDD").add(23, 'h'))}</Text>
      <View
      style={styles.row_container}>
      <View>
      <Text  style={policeStyles.standard_bold}>Goal:</Text>
      </View>
      <View style={styles.response_text}>
      <Text style={policeStyles.standard_text}>   {project.project.objective} </Text>
      </View>
      <View>
      <Text  style={policeStyles.standard_bold}>Done: </Text>
      </View>
      <View style={styles.response_text}>
      <Text style={policeStyles.standard_text}>{project.project.progression} </Text>
      </View>
      </View>
      <Text   style={policeStyles.project_details_small_text}>{Math.round(project.project.progression_percentage * 100) + "% Already accomplished"}</Text>
      <View
      style={styles.row_container}>
      <View>
      <Text  style={policeStyles.standard_bold}>Step size:</Text>
      </View>
      <View style={styles.response_text}>
      <Text style={policeStyles.standard_text}>   {project.project.pas}</Text>
      </View>
      </View>
      <View
      style={styles.row_container}>
      <View>
      <Text  style={policeStyles.standard_bold}>Last update:</Text>
      </View>
      {this._displayLastUpdateDateMessage(project.project.last_update_date)}
      </View>

      </View>

    )
  }
}
export default ProjectDetails

var styles = StyleSheet.create({
  row_container:{
    flexDirection:"row",
    marginTop:"2%",
  },
  response_text:{
    flex:1,
    //backgroundColor:"red"
  },
});
