// Components/TestComponent.js
import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'

import { getUserFromId } from '../../API/APITest'
import { getFilmDetailFromApi} from '../../API/APITest'

class TestComponent extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      first_name: "EMMA"
    }
  }

  _loadTitle(){
    getFilmDetailFromApi("181809").then(data => {
        this.setState({
          first_name: data.title,
        })
    })
    /*getUserFromId("2").then(data => {
        this.setState({
          first_name: data.first_name,
        })
    })*/
  }

    render() {
      return (
        <View>
          <Text
            style={styles.title_text}>
            {this.state.first_name}
          </Text>
          <Button title='Call API' onPress={() => this._loadTitle()}/>
        </View>
        )
    }
}



const styles = StyleSheet.create({
  title_text: {
    fontWeight: 'bold',
    fontSize: 25,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
})

export default TestComponent
