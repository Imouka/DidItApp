
import React from 'react'
import { StyleSheet, View, Image, Text, TextInput} from 'react-native'
import {policeStyles} from '../Styles/police_styles'
import {imageStyles} from '../Styles/Image_styles'

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
            style={imageStyles.text_input_image}
            source= {imageSource}
          />
          <View style={styles.sub_container}>
          <View style ={[styles.text_input_container, ]}>
            <TextInput
            style={ policeStyles.standard_text}
            placeholder={text}
            multiline={true}
            blurOnSubmit={true}
            onChangeText={(typedText)=>this.setState({
                      typedText
                  })}
            value={this.state.typedText =="" ? null : this.state.typedText}
            onSubmitEditing={()=>{
              console.log(this.state.typedText)
                let finalTypedText = this.state.typedText
                action(finalTypedText)
                this.setState({typedText:""})
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
  },
  sub_container:{
    flex:1,
  },
})

export default TextInputWithImage
