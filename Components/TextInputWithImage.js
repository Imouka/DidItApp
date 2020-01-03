
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
    const{text, imageSource, action}=this.props
    console.log(this.state.clearInput)
    return (
      <View style={styles.main_container}>
          <Image
            style={styles.button_image}
            source= {imageSource}
          />
          <TextInput
          style={styles.text_input}
          placeholder={text}
          multiline={true}
          blurOnSubmit={true}
          onChangeText={(typedText)=>this.setState({
                    typedText
                })}
          value={this.state.typedText =="" ? null : this.state.typedText}
          onSubmitEditing={()=>{
              this.setState({typedText:"",
                    })
              }}>
          </TextInput>
      </View>
    )}
}


const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems :'center'
  },
  text_input: {
    marginLeft: 5,
    fontSize: 15,
    textAlign: 'left',
  },
 button_image:{
    width: 35,
    height: 35,
    borderRadius:360,
    borderWidth:2,
    borderColor:'#000000'
  },
})

export default TextInputWithImage
