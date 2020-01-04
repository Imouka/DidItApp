import React from 'react'
import {View, TextInput, StyleSheet, Image} from 'react-native'


class SearchBar extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.main_container}>
          <Image
            style={styles.image_container}
            source={require('../Images/magnifying-glass.png')}
          />
        <TextInput
          style={styles.textinput}
          placeholder='Search'
          onChangeText={console.log()}
          onSubmitEditing={console.log()}
        />
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
    alignItems:'center'
  },
  image_container:{
    width: 20,
    height: 20,
    borderRadius:360,
  }
})

export default SearchBar
