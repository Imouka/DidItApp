
import React from 'react'
import { StyleSheet, View, Image, Text, TextInput} from 'react-native'

class TextInputWithImage extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       typedText:'',
     }
   }


  render() {
    const{text, imageSource, action, size}=this.props
    return (
      <View style={styles.main_container}>
          <Image
            style={[styles.button_image, {width: size, height: size}]}
            source= {imageSource}
          />
          <View style={styles.sub_container}>
          <View style ={[styles.text_input_container, ]}>
            <TextInput
            placeholder={text}
            multiline={true}
            blurOnSubmit={true}
            onChangeText={(typedText)=>this.setState({
                      typedText
                  })}
            value={this.state.typedText =="" ? null : this.state.typedText}
            onSubmitEditing={()=>{
              console.log(this.state.typedText)
                action(this.state.typedText)
                }}>
            </TextInput>
          </View>
          </View>
      </View>
    )}
}


const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems :'center',
    marginRight: 5
  },
  text_input_container: {
    marginLeft: "2%",
    marginRight: "2%",
//  borderBottomColor:"#CED0CE",
  //  borderBottomWidth:1
  },
 button_image:{
    borderRadius:360,
    borderWidth:2,
    borderColor:'#000000'
  },
  sub_container:{
    flex:1,
  },
})

export default TextInputWithImage
