import React, { Component } from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { Item, Input } from 'native-base';
import Button from './button';

import appstyles from '../../config/styles';

import PropTypes from 'prop-types'

export class AppInput extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.any,
    hasButton: PropTypes.bool,
    buttonTitle: PropTypes.string,
    buttonIcon: PropTypes.any,
    onButtonPress: PropTypes.func,
  };

  static defaultProps = {
    placeholder: '',
    icon: '',
    hasButton: false,
    buttonTitle: '',
    buttonIcon: '',
  };

  render() {
    return (
      <Item style={[styles.inputItem, appstyles.inputShadow]} >
        {this.props.icon != '' && 
          <Image source={this.props.icon} style={styles.inputIcon}  />
        }
        <Input inputColorPlaceholder="#dddddd" />
        {this.props.hasButton != '' && 
          <Button icon={this.props.buttonIcon} onPress={this.props.onButtonPress} style={{paddingVertical: 12, width: 75}} />
        }
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  inputItem: {
    backgroundColor: appstyles.color.INPUT_BG,
    marginHorizontal: 2,
    flex: 1,
    borderRadius: 3,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginLeft: 16,
    marginRight: 10,
  }
});

export default AppInput
