import React, { Component } from 'react'
import { View, ImageBackground, FlatList } from 'react-native'
import { Text, Container, Content, Grid, Col, Row } from 'native-base';

import AppHeader from '../../components/AppHeader'
import images from '../../config/images'
import styles from './styles'

import Button from '../../components/ui/button'
import Spacer from '../../components/ui/spacer'
import AppInput from '../../components/ui/input'
import OrderItem from '../../components/order/OrderItem'

export class OrderView extends Component {

  constructor () {
    super();
  }

  render() {

    const {orderSummary, currency} = this.props;

    return (
      <Container>
        <AppHeader user={this.props.user} />
        <ImageBackground source={images.appbg} style={styles.appbg} resizeMode="cover" >
          <Content style={styles.content}>
            <Button title="Club member" secondary={true} full={true} rounded={true} icon={images.icons.briefcase} onPress={() => { /* ON BUTTON PRESS */ }} />
            
            <Spacer height={16} />

            <AppInput icon={images.icons.search} buttonIcon={images.icons.scanner} hasButton={true} onButtonPress={() => { /* ON BARCODE BUTTON PRESS */ }} />
            
            {this.props.orders.length > 0 &&
              <View>
                <Spacer height={26} />
                <View style={styles.cartInfoWrap}>
                  <Text style={styles.cartInfoText} >
                    <Text style={styles.cartItemsNumber}>{this.props.orders.length}</Text> items
                  </Text>
                  <Text style={styles.cartInfoText} >{this.props.orderId}</Text>
                </View>

                <Spacer height={8} />
                <FlatList 
                  numColumns={1}
                  data={this.props.orders}
                  scrollEnabled={false}
                  renderItem={(data) => {
                    return (
                      <OrderItem product={data.item} key={data.index} currency={this.props.currency} />
                    )
                  }}
                />
              </View>
            }

            <Spacer height={20} />
            
            <View style={styles.orderSummary}>
              <Text style={styles.summaryLabel} >Discount : </Text>
              <Text style={[styles.summaryValue, styles.textDanger]} >%{orderSummary.discount_percentage}(-{currency}{orderSummary.discount_price})</Text>
            </View>
            <Spacer height={3} />
            <View style={styles.orderSummary}>
              <Text style={styles.summaryLabel} >Total : </Text>
              <Text style={[styles.summaryValue, styles.textPrimary, styles.textL]} >{currency}{orderSummary.total_price}</Text>
            </View>

            <Spacer height={20} />
            
            <Grid >
              <Col style={{paddingRight: 4, width: 134}}>
                <Button title="New Order" full={true} white={true} onPress={() => { /* ON NEW ORDER BUTTON PRESS*/ }} />
                <Spacer height={10} />
                <Button title="Cancel Order" white={true} full={true} textStyle={{color: '#00000060', fontWeight: '500'}} onPress={() => { /* ON CANCEL ORDER BUTTON PRESS*/ }}  />
              </Col>
              <Col style={{paddingLeft: 4, flex: 1}} >
                <Button title="Checkout" full={true} block={true} onPress={() => { /* ON CHECKOUT BUTTON PRESS*/ }} />
              </Col>
            </Grid>
            <Spacer height={30} />
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}

export default OrderView
