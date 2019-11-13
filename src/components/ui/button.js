import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { Text } from 'native-base';
import appstyles from '../../config/styles'
import PropTypes from 'prop-types';

export class Button extends Component {

  static propTypes = {
    title: PropTypes.string,
    block: PropTypes.bool,
    full: PropTypes.bool,
    rounded: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    danger: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool,
    icon: PropTypes.any,
    shadow: PropTypes.bool,
  };

  static defaultProps = {
    title: '',
    block: false,
    full: false,
    rounded: false,
    primary: true,
    secondary: false,
    danger: false,
    success: false,
    white: false,
    icon: '',
    shadow: true,
  };

  render() {
    let bgColor = '';
    let buttonColor = appstyles.color.COLOR_WHITE;
    if (this.props.primary == true) {
      bgColor = appstyles.color.COLOR_PRIMARY;
    } 
    if(this.props.secondary == true) {
      bgColor = appstyles.color.COLOR_SECONDARY;
    } 
    if(this.props.danger == true) {
      bgColor = appstyles.color.COLOR_DANGER;
    } 
    if(this.props.success == true) {
      bgColor = appstyles.color.COLOR_SUCCESS;
    } 
    if(this.props.white == true) {
      bgColor = appstyles.color.COLOR_WHITE;
      buttonColor = appstyles.color.COLOR_PRIMARY;
    }

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => {this.props.onPress()}} style={[this.props.block && {flex: 1}]} >
        <View style={[
          styles.button, 
          this.props.rounded && styles.rounded, 
          this.props.full && styles.buttonFull, 
          this.props.block && styles.buttonBlock, 
          this.props.shadow && appstyles.buttonShadow,
          {
            backgroundColor: bgColor,
          },
          this.props.style,
        ]} >
          {/* Rendering button icon */}
          {this.props.icon != '' && 
            <View>
              <Image source={this.props.icon} style={styles.hamburgerIcon} style={styles.buttonIcon} resizeMode="contain" />
            </View>
          }
          {/* Adding space between Title and Icon If both Present */}
          {(this.props.icon != '' && this.props.title != '')&& <View style={{width: 10}} /> }
          {/* Rendering button title */}
          {this.props.title != '' && 
            <Text style={[styles.buttontext, {
              color: buttonColor,
            }, this.props.textStyle]}>{this.props.title}</Text>
          }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: appstyles.color.COLOR_GREY,
    paddingVertical: 15,
    borderRadius: 4, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    borderWidth: 0,
  },
  rounded: {
    borderRadius: 100, 
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  buttonFull: {
    flex: 1,
    display: 'flex',
    width: '99%',
  },
  buttontext: {
    textAlign: 'center',
    fontSize: appstyles.fontsize.l,
    fontWeight: 'bold',
  },
  buttonBlock: {
    flex: 1,
  }
})

export default Button
