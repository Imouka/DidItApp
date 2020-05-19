import React from 'react'
import {View, TextInput, StyleSheet, Image} from 'react-native'
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'

class SearchBar extends React.Component {

constructor(props) {
  super(props)
  this.searchedText = ""
}

_searchTextInputChanged(text) {
  this.searchedText = text
}

  render() {
    const{ action} = this.props
    return (
      <View>
        <View
          style={styles.main_container}>
         <Image
           style={imageStyles.research_icon}
           source={require('../Images/magnifying-glass.png')}
         />
         <View style={{  flex:1}}>
          <TextInput
            style={ policeStyles.standard_text}
            placeholder='Search'
            onChangeText={(text) => this._searchTextInputChanged(text)}
            onSubmitEditing={() => action(this.searchedText)}  />
          </View>
        </View>


      <View
        style={{
          height: 1,
          backgroundColor: "#B1B1B3",
          marginBottom: "5%",
          marginLeft:'5%',
          marginRight:'5%',
        }}
      />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems:'center',

  },
})

export default SearchBar
