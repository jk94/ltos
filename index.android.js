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
  ScrollView,
  Navigator,
  NativeModules
} from 'react-native';
import { Container, Header, Title, Icon, Button, Footer, Content } from 'native-base';


import { OrderListItem } from './app/components/orderListItem'
import { OtherPurchaser } from './app/components/otherPurchaser'

import { NewOrderPage } from './app/pages/newOrder';

export default class CTA_LTOS extends Component {
  constructor() {
    super();
    this.state = {
      toggled: true
    }
  }

  toggleSideMenu() {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    let list = [{ avatar_url: 'https://avatars3.githubusercontent.com/u/8340860?v=3&s=460', name: 'jan', subtitle: 'test' }]


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
    //{orderItemsRender}
    //<OtherPurchaser orders={orders2}></OtherPurchaser>
    return (
      
        <Container>
          <Header backgroundColor='#00c497'>
            <Button backgroundColor='#00c497' transparent onPress={() => this.toggleSideMenu()}>
              <Icon name='ios-menu' />
            </Button>
            <Title>CTA LTOS</Title>
          </Header>
          <Content>
            <NewOrderPage />
          </Content>
          <Footer backgroundColor='#00c497'></Footer>
        </Container>

    );
  }

}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('CTA_LTOS', () => CTA_LTOS);
