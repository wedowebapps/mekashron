import React, { Component } from 'react'
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
  }
}

export default OrderContainer
