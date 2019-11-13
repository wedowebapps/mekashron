import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

export class Spacer extends Component {

  static propTypes = {
    height: PropTypes.number,
  };

  static defaultProps = {
    height: 0,
  };

  render() {
    return (
      <View style={{height: this.props.height}} />
    )
  }
}

export default Spacer;