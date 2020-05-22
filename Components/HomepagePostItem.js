
import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import ButtonSmallImage from '../Components/ButtonSmallImage'
import ProjectIcon from '../Components/ProjectIcon'
import ProgressBar from '../Components/ProgressBar'
import HomePageCommentItem from '../Components/HomePageCommentItem'
import TextInputWithImage from '../Components/TextInputWithImage'
import Panel from '../Components/Panel';  // Step 1
import {imageStyles} from '../Styles/Image_styles'
import {policeStyles} from '../Styles/police_styles'


class HomepagePostItem extends React.Component {

_displayComments=(post, displayProfilePage)=>{
  if (post.comments.length==1){
    return (
      <View style={{marginTop:"1%"}}>
         <HomePageCommentItem
           date_is_displayed={false}
           comment={post.comments[0]}
           id={post.comments[0].user_id}
           action={displayProfilePage}
           />
      </View>
    )
  }
  if (post.comments.length>1){
    return (
      <View style={{marginTop:"1%"}}>
        <HomePageCommentItem
         comment={post.comments[0]}
         id={post.comments[0].user_id}
         action={displayProfilePage}/>
         <View style={{marginTop:"1.5%"}}>
           <Panel
           title_closed="See more"
           title_is_displayed={false}
           discrete={true}>
           <FlatList
             data={post.comments.slice(1)}
             scrollEnabled={false}
             ItemSeparatorComponent={this._renderSeparator}
             keyExtractor={(item) => item.comment_id.toString()}
             ref={(ref) => { this.flatListRef = ref; }}
             renderItem={({item}) =>
             <HomePageCommentItem
               date_is_displayed={false}
               comment={item}
               id={item.user_id}
               action={displayProfilePage}/>}
             />
           </Panel>
        </View>
      </View>
    )
  }
}
_renderSeparator () {
  return (
    <View
    style={{
      marginBottom:'1.5%',
    }}
    />
  );
};

send_comment=(message) => {
  const {sendComment, post }= this.props
  sendComment(post.project.id,message)
   }

 _display_add_comment(isMyProject,userImageSource) {
   if (!isMyProject){
     console.log("_display_add_comment"+userImageSource)
     return (
       <View>
         <TextInputWithImage
         text={"Add a comment"}
         imageSource= {userImageSource}
         action={this.send_comment}/>
       </View>
     )
   }
}


  render() {
    const { userImageSource,post, displayProfilePage, displayProjectPage, isMyProject}=this.props
    return (
        <View style={styles.main_container}>
          <View style={styles.row_container}>
              <TouchableOpacity
                style={styles.left_container}
                onPress={() => displayProjectPage(post.user.id, post.project.id)}>
                <Image
                  style={imageStyles.project_icon_SMALL}
                  source={{uri:post.project.logo}}/>
                <View  style={{marginLeft:"2%", width: 0, flexGrow: 1}} >
                  <Text
                  style={policeStyles.standard_bold}
                  numberOfLines={2}>
                  {post.project.title}
                  </Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
              style={styles.right_container}
              onPress={() => displayProfilePage(post.user.id)}>
                <View  style={{ width: 0, flexGrow: 1,}}>
                  <Text
                  style={policeStyles.standard_text_right}
                  numberOfLines={1}>
                  {post.user.first_name} {post.user.last_name}
                  </Text>
                </View>
                <View  style={{marginRight:"2%", alignItems:'center'}} >
                  <Image
                    style={imageStyles.small_user_avatar}
                    source= {{uri:post.user.icon}}  />
                </View>
              </TouchableOpacity>
            </View>


          <View style={{borderColor:'#E5F1F3', backgroundColor:"#F1F4F8",marginTop:'1%',borderWidth:3,borderRadius: 10,width: "80%", alignSelf:'center', padding:"2%"}}>
            {this.props.children}
          </View>

          {this._displayComments(post,displayProfilePage)}
          {this._display_add_comment(isMyProject,userImageSource)}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop:5,
    marginRight:'2%',
    marginLeft:'2%',
  },
  row_container: {
    flexDirection: 'row',
    justifyContent:'space-around',
    marginBottom:"2%",
  },
   user_image_container:{
     flexDirection: 'row',
   },
   left_container:{
    flex:4,
    flexDirection: 'row',
    paddingRight:"3%",
  //  backgroundColor:'red'
  },
  right_container:{
    flex:2.5,
    flexDirection: 'row',
    justifyContent:"flex-end",
  //  backgroundColor:'blue'
  },
})

export default HomepagePostItem
