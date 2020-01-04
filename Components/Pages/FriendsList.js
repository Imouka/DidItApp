import React from 'react'
import {View, StyleSheet, TextInput, FlatList} from 'react-native'
import FriendItem from '../../Components/FriendItem'
import SearchBar from '../../Components/SearchBar'
import {getFriendsFromUserId } from '../../API/APITest'


class FriendsList extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       friends: [],
     }
   }

   componentDidMount(){
     getFriendsFromUserId("2").then(data => {
       this.setState ({
         friends:data.friends
       })
     })
   }

  _renderHeader = () => {
  return (
  <View>
    <SearchBar/>
  </View>
  )
  };

  _renderSeparator = () => {
  return (
    <View
      style={{
        marginTop:'5%',
      }}
    />
  );
  };

  render() {
    return (
        <View style={styles.main_container}>
        <FlatList
          data={this.state.friends}
          keyExtractor={(item) => item.id.toString()}
          ref={(ref) => { this.flatListRef = ref; }}
          ItemSeparatorComponent={this._renderSeparator}
          ListHeaderComponent={this._renderHeader}
          renderItem={({item}) =>
          <FriendItem
            userfirstname={item.first_name}
            userlastname={item.last_name}
            imageSource={require('../../Images/profile_icon.png')}
          />}
        />
        </View>

    )
  }
}
/*<FriendItem
username={"Emma"}
imageSource={require('../../Images/profile_icon.png')}
/>
<FriendItem
username={"Emma"}
imageSource={require('../../Images/profile_icon.png')}
/>
<FriendItem
username={"Emma"}
imageSource={require('../../Images/profile_icon.png')}
/>
*/

const styles = StyleSheet.create({
  main_container: {
    marginLeft: '3%',
  },
})

export default FriendsList
