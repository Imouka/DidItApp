// Components/TestComponent.js
import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'

import { getFilmsFromApiWithSearchedText } from '../API/APITest'

class TestComponent extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      title: "EMMA"
    }
  }

  _loadTitle(){
    getFilmsFromApiWithSearchedText("emma").then(data => {
        this.setState({
          title: data.title,
        })
        console.log(data.title)
    })
  }


    render() {
      return (
        <View>
          <Text
            style={styles.title_text}>
            {this.state.title}
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

/*<Text
style={styles.title_text}>*/
