import React, { Component } from 'react'
import { View, Text } from 'react-native';
import OrderView from './OrderView'
import images from '../../config/images'
import { orders, currency, orderId, orderSummary } from '../../data/orders'

export class OrderContainer extends Component {
  
  constructor (props) {
    super(props);
  }
  
  static defaultProps = {
    orders: orders,
    user: {
      name: 'Johnissimus Van-Doe',
      image: images.image.user,
    },
    currency: currency,
    orderId: orderId,
    orderSummary: orderSummary,
  }

  render() {
    return (
      <OrderView {...this.props} />
    )

    // return (
    //   <View>
    //     <View style={{height: 100}} />
    //     <Text style={{fontFamily:'OpenSans-Regular', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //     <Text style={{fontFamily:'OpenSans-Bold', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //     <Text style={{fontFamily:'OpenSans-SemiBoldItalic', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //     <Text style={{fontFamily:'OpenSans-ExtraBoldItalic', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //     <Text style={{fontFamily:'OpenSans-LightItalic', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //     <Text style={{fontFamily:'OpenSans-BoldItalic', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //     <Text style={{fontFamily:'OpenSans-Light', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //     <Text style={{fontFamily:'OpenSans-SemiBold', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //     <Text style={{fontFamily:'OpenSans-Italic', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //     <Text style={{fontFamily:'OpenSans-ExtraBold', fontSize: 18, marginBottom: 10}}>Hello World</Text>
    //   </View>
    // )
  }
}

export default OrderContainer
