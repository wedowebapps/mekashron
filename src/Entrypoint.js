import React, { Component } from 'react'

// Importing the order screen. Ideally this will go in the navigation stack.
// Since we are dealing with single screen only right now. I am injecting the screen directly.
import OrderContainer from './screens/order'

export class Entrypoint extends Component {
  render() {
    return (
      <OrderContainer />
    )
  }
}

export default Entrypoint
