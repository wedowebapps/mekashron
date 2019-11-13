import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Grid, Col } from 'native-base'

import appstyles from '../../config/styles'
import images from '../../config/images'

export class OrderItem extends Component {
  
  render() {
    const {product} = this.props;
    return (
      <Grid style={styles.productItem} >
        <Col style={{width: 45}}>
          {product.product_image != '' ? 
            <Image source={product.product_image} style={styles.productImage} resizeMode='contain' /> : 
            <View style={styles.productImagePlaceholder}>
              <Image source={images.products.placeholder} style={styles.placeholderIcon} />
            </View>
          }
        </Col>
        <Col  style={{width: 176}}>
          <Text style={styles.productTitle}>{product.product_title}</Text>
        </Col>
        <Col style={styles.priceContainer}>
        <Text style={styles.totalPrice} >{this.props.currency}{product.total_price}</Text>
          {product.product_qty > 1 && 
            <Text style={styles.itemPrice}><Text style={styles.boldtext}>{product.product_qty}</Text> x {this.props.currency}{product.product_price}</Text>
          }
          {product.discount_percentage > 0 && 
            <Text style={styles.discountPrice}>{product.discount_percentage}% (-{this.props.currency}{product.discount_price})</Text>
          }
        </Col>
      </Grid>
    )
  }

}

const styles = StyleSheet.create({
  productItem: {
    ...appstyles.inputShadow,
    backgroundColor: appstyles.color.COLOR_WHITE,
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 2,
    borderRadius: 3,
  },
  productImage: {
    width: 36,
    height: 65,
    borderRadius: 3,
  },
  productImagePlaceholder: {
    width: 36,
    height: 65,
    borderRadius: 3,
    backgroundColor: appstyles.color.PRODUCT_IMAGE_PLCEHOLDER_BG,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    width: 18,
    height: 18,
  },
  productTitle: {
    fontSize: appstyles.fontsize.m
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  totalPrice: {
    color: appstyles.color.COLOR_PRIMARY,
    fontSize: appstyles.fontsize.l,
    fontWeight: 'bold',
    lineHeight: 25,
  },
  itemPrice: {
    color: '#00000060',
    fontSize: appstyles.fontsize.m,
  },
  discountPrice: {
    color: appstyles.color.COLOR_DANGER,
    lineHeight: 19,
  },
  boldtext: {
    fontWeight: 'bold',
    fontSize: appstyles.fontsize.m,
    lineHeight: 19,
  }
})

export default OrderItem
