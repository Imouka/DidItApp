import React from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity,Animated} from 'react-native';

class Panel extends React.Component{
    constructor(props){
        super(props);

        this.icons = {
            'up'    : require('../Images/triangle_up.png'),
            'down'  : require('../Images/triangle_down.png')
        };

        this.state = {
          minHeight   : 25,
          title_expanded      : props.title_expanded,
          title_closed   : props.title_closed,
          expanded    : false,
          animation   : new Animated.Value(styles.container.height)
        };
    }

    toggle(){
      //Step 1
      let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
          finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
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

    _renderTitle(icon) {
        if (!this.state.expanded) {
            return (
              <View
                style={styles.header}>
                <Text style={styles.title}>{this.state.title_closed}</Text>
                <TouchableOpacity
                    onPress={this.toggle.bind(this)}
                    underlayColor="#f1f1f1"
                    style={styles.button}>
                      <Image
                          style={styles.buttonImage}
                          source={icon}>
                      </Image>
                </TouchableOpacity>
              </View>
            );
        } else {
            return (
                <Text style={styles.title}>{this.state.title_expanded}</Text>
            );
        }
    }


    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];
        }

        //Step 5
        return (
          <Animated.View
          style={[styles.container,{height: this.state.animation}]}>
            <View>
                  {this._renderTitle(icon)}
            </View>
            <View
            style={styles.body}
            onLayout={this._setMaxHeight.bind(this)}>
              <View>
                {this.props.children}
              </View>
                <TouchableOpacity
                style={styles.button}
                onPress={this.toggle.bind(this)}
                underlayColor="#f1f1f1">
                  <Image
                  style={styles.buttonImage}
                  source={icon}>
                  </Image>
                </TouchableOpacity>
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
        height:25
    },
    title       : {
        color   :'#2a2f43',
        fontWeight:'bold',
    },
    buttonImage : {
        width   : 20,
        height  : 20
    },
    body        : {
        paddingTop  : 10
    },
    header :{
      flexDirection: 'row',
      right:0,
      justifyContent: 'flex-end'
    },
    button:{
      alignSelf: "flex-end",
    }
});
