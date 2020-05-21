import React from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity,Animated} from 'react-native';
import {policeStyles} from '../Styles/police_styles'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from '../Utils/react-native-responsive-screen'
import {imageStyles} from '../Styles/Image_styles'

class Panel extends React.Component{
    constructor(props){
        super(props);

        this.icons = {
            'up'    : require('../Images/triangle_up.png'),
            'down'  : require('../Images/triangle_down.png')
        };

        this.state = {
          minHeight   : Math.min(hp("3.4%"),30),
          title_expanded      : props.title_expanded,
          title_closed   : props.title_closed,
          expanded    : false,
          animation   : new Animated.Value(styles.container.height)
        };
    }

    toggle(){
      //Step 1
      if (this.props.title_is_displayed==true) {
        var initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
      }
      else {
        var initialValue    = this.state.expanded? this.state.maxHeight  : this.state.minHeight;
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight ;
      }
      this.setState({
          expanded : !this.state.expanded
      });
      this.state.animation.setValue(initialValue);
      Animated.spring(
          this.state.animation,
          {
              toValue: finalValue
          }
      ).start();

    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    _renderTitle(icon, title_is_displayed) {
        if (!this.state.expanded) {
          if (this.props.discrete) {
            return (
              <View>
                <TouchableOpacity
                    onPress={this.toggle.bind(this)}
                    underlayColor="#f1f1f1">
                      <Text style={policeStyles.standard_italic_underlined}>{this.state.title_closed}</Text>
                </TouchableOpacity>
              </View>
            )
          }
          else {
            return (
              <View>
                <TouchableOpacity
                    onPress={this.toggle.bind(this)}
                    underlayColor="#f1f1f1">
                    <View
                      style={styles.header}>
                      <Text style={policeStyles.standard_bold}>{this.state.title_closed}</Text>
                      <Image
                          style={imageStyles.panel_button}
                          source={icon}>
                      </Image>
                    </View>
                </TouchableOpacity>
              </View>
            );
          }

        } else {
            if (title_is_displayed==true) {
              return (
                  <Text style={policeStyles.standard_bold}>{this.state.title_expanded}</Text>
              );
            }
        }
    }

    _renderBottomSeparator(icon) {
        if (this.props.discrete) {
            return (
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <TouchableOpacity
                onPress={this.toggle.bind(this)}
                underlayColor="#f1f1f1">
                  <Image
                  style={imageStyles.panel_button}
                  source={icon}>
                  </Image>
                </TouchableOpacity>
                </View>
            );
        } else {
            return (
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View
                  style={{
                    marginTop:'2%',
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                  }}
                />
                <TouchableOpacity
                onPress={this.toggle.bind(this)}
                underlayColor="#f1f1f1">
                  <Image
                  style={imageStyles.panel_button}
                  source={icon}>
                  </Image>
                </TouchableOpacity>
                </View>
            )
        }
    }

    render(){
        const{paddingLeft, title_is_displayed}=this.props
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];
        }

        //Step 5
        return (
          <Animated.View
          style={[styles.container,{height: this.state.animation}]}>
            <View>
                  {this._renderTitle(icon, title_is_displayed)}
            </View>
            <View
            style={[{paddingLeft: paddingLeft}]}
            onLayout={this._setMaxHeight.bind(this)}>
              <View>
                {this.props.children}
                {this._renderBottomSeparator(icon)}
              </View>


              </View>

          </Animated.View>
        );
    }
}
export default Panel;

var styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fff',
        overflow:'hidden',
        height:Math.min(hp("3.4%"),30)
    },
    header :{
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
});
