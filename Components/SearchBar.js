import React from 'react'
import {View, TextInput, StyleSheet, Image} from 'react-native'


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
           style={styles.image_container}
           source={require('../Images/magnifying-glass.png')}
         />
         <View style={{  flex:1}}>
          <TextInput
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
  image_container:{
    width: 20,
    height: 20,
    borderRadius:360,
  }
})

export default SearchBar
