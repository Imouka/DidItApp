
import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import ButtonSmallImage from '../Components/ButtonSmallImage'
import ProjectIcon from '../Components/ProjectIcon'
import ProgressBar from '../Components/ProgressBar'
import ButtonImageAndText from '../Components/ButtonBigImageAndText'
import CommentItem from '../Components/CommentItem'
import TextInputWithImage from '../Components/TextInputWithImage'
import Panel from '../Components/Panel';  // Step 1


class HomepagePostItem extends React.Component {

_displayComments=(post)=>{
  if (post.comments.length==1){
    return (
      <View style={{marginTop:"1%"}}>
         <CommentItem
           fontsize={13}
           date_is_displayed={false}
           comment={post.comments[0]}/>
      </View>
    )
  }
  if (post.comments.length>1){
    return (
      <View style={{marginTop:"1%"}}>
        <CommentItem
         fontsize={13}
         comment={post.comments[0]}/>
         <Panel
         title_closed="See more"
         title_is_displayed={false}
         discrete={true}>
         <FlatList
           data={post.comments.slice(1)}
           scrollEnabled={false}
           keyExtractor={(item) => item.comment_id.toString()}
           ref={(ref) => { this.flatListRef = ref; }}
           renderItem={({item}) =>
           <CommentItem
             fontsize={13}
             date_is_displayed={false}
             comment={item}/>}
           />
         </Panel>
      </View>
    )
  }
}

  render() {
    const {  projectImageSource,userImageSource, post}=this.props
    return (
        <View style={styles.main_container}>
          <View style={styles.row_container}>

              <TouchableOpacity
                style={styles.left_container}
                onPress={console.log}>
                <Image
                  style={styles.project_image}
                  source={projectImageSource}/>
                <View  style={{marginLeft:"2%", width: 0, flexGrow: 1,}} >
                  <Text
                  style={styles.project_title_text}
                  numberOfLines={2}>
                  {post.project.title}
                  </Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
              style={styles.right_container}
              onPress={console.log}>
                <View  style={{ width: 0, flexGrow: 1,}}>
                  <Text
                  style={styles.user_name_text}
                  numberOfLines={1}>
                  {post.user.first_name} {post.user.last_name}
                  </Text>
                </View>
                <View  style={{marginRight:"2%", alignItems:'center'}} >
                  <Image
                    style={styles.button_image}
                    source= {userImageSource}  />
                </View>
              </TouchableOpacity>
            </View>


          <View style={{borderColor:'#E5F1F3', backgroundColor:"#F1F4F8",marginTop:'1%',borderWidth:3,borderRadius: 10,width: "80%", alignSelf:'center', padding:"2%"}}>
            {this.props.children}
          </View>

          {this._displayComments(post)}

          <View style={{marginTop:-10}}>
            <TextInputWithImage
            text={"Add a comment"}
            size={25}
            imageSource= {require("../Images/profile_icon.png")}
            action={console.log}/>
          </View>
        </View>
    )
  }
}
/*
<View style={{backgroundColor:'red',width: '20%', height:"30%"}}>
</View>

*/
const styles = StyleSheet.create({
  main_container: {
    marginTop:10,
   marginRight:'2%',
    marginLeft:'2%',
  },
  row_container: {
    //flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
    marginBottom:"2%",
  },
  project_title_text:{
    fontSize: 15,
    textAlign: 'left',
    fontWeight:'bold',
  },
  user_name_text:{
    fontSize: 15,
    textAlign: 'right',
    flex: 1
  },
  button_image:{
     width: 35,
     height: 35,
     borderRadius:360,
     borderWidth:2,
     borderColor:'skyblue',
   },
   user_image_container:{
     flexDirection: 'row',
//     alignItems :'center'
   },
   project_image:{
     width: 35,
     height: 35,
     borderRadius: 10,
     borderColor: 'skyblue',
     borderWidth:2,
     backgroundColor:'white'
   },
   left_container:{
    flex:4,
    flexDirection: 'row',
    marginRight:'1.5%',
  },
  right_container:{
    flex:2.5,
    flexDirection: 'row',
    justifyContent:"flex-end",
  },
})

export default HomepagePostItem
