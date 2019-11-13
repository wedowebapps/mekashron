import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Body, Button, Icon, Text } from 'native-base';

import images from '../config/images';
import appstyles from '../config/styles'

export class AppHeader extends Component {
  render() {
    return (
      <View style={{elevation: 4}}>
        <Header androidStatusBarColor="#ffffff" iosBarStyle="dark-content" style={styles.header} noShadow={false} >
          <Body style={styles.headerBody} >
            <View style={styles.backContrainer}>
              <TouchableOpacity >
                <Image source={images.icons.hamburger} style={styles.hamburgerIcon} />
              </TouchableOpacity> 
            </View>
            <View style={styles.userContainer}>
              <Image source={this.props.user.image} style={styles.userIcon} />
              <Text style={styles.userName}>{this.props.user.name}</Text>
              <Image source={images.icons.caretDown} style={styles.caretIcon} />
            </View>
            <View style={styles.iconsContrainer}>
              
            </View>
          </Body>
        </Header>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    elevation: 4,
  },
  headerBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 6,
    elevation: 4,
  },
  backContrainer: {
    flex: 0.25,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContrainer: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  hamburgerIcon: {
    width: 32,
    height: 32,
  },
  userIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
    borderRadius: 30,
  },
  caretIcon: {
    width: 12,
    height: 7,
    marginLeft: 8
  },
  userName: {
    fontSize: appstyles.fontsize.m,
    color: appstyles.color.COLOR_PRIMARY,
    fontFamily: appstyles.fonts.FONT_BOLD,
  }
});

export default AppHeader
