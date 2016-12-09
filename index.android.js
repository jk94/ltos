/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Container, Header, Title, Icon, Button, Footer, Content } from 'native-base';


import { OrderListItem } from './app/components/orderListItem'
import { OtherPurchaser } from './app/components/otherPurchaser'

import { NewOrderPage } from './app/pages/newOrder';

export default class CTA_LTOS extends Component {
  render() {
    let orderItem = {
      orderId: 1,
      orderTime: new Date(),
      orderCategory: 2,
      orderTitle: "Döner mit allem",
      wishes: "Ohne schaf"
    };
    let orderItem2 = {
      orderId: 2,
      orderTime: new Date(),
      orderCategory: 1,
      orderTitle: "Pizza Hawaii",
      wishes: "No Ham\nwith Ham\nwith Pineapples\nso more\nand more\nso more\nand more"
    };
    let orderItems = [orderItem, orderItem2];

    let orders2 = [
      { orderId: 1, orderCategory: 1, orderTitle: "Döner mit allem", user: { userId: 1, name: "Koschke", surname: "Jan", avatar: "" } },
      { orderId: 2, orderCategory: 2, orderTitle: "Pizza Hawaii", user: { userId: 2, name: "Loessl", surname: "Dominik", avatar: "" } }
    ]

    let orderItemsRender = [];
    {
      orderItems.forEach((orderItem) => {
        orderItemsRender.push(<OrderListItem key={orderItem.orderId} orderItem={orderItem}></OrderListItem>)
      }, this)
    }
    //<ScrollView style={styles.container}>
    //</ScrollView>
    return (
      <Container>
        <Header backgroundColor='#00c497'>
          <Button backgroundColor='#00c497' transparent>
            <Icon name='ios-menu' />
          </Button>
          <Title>Header</Title>
        </Header>
        <Content>
          <NewOrderPage />

          {orderItemsRender}
          <OtherPurchaser orders={orders2}></OtherPurchaser>


        </Content>
        <Footer backgroundColor='#00c497'></Footer>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CTA_LTOS', () => CTA_LTOS);
